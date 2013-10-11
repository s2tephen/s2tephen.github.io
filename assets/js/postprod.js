/* postprod.js
 * Reformats post DOM for fancy Verge-esque layouts
 * while minimizing custom markup within Markdown.
 *
 * DOM elements follow five general layouts: basic,
 * full, left, right, split. In the diagrams below:
 * c = columns (Bootstrap defaults to 12)
 * x = main content (usually text)
 * s = side content (for left/right)
 * 
 * Basic (most paragraphs, smaller images/quotes)
 * c c c c c c c c c c c c
 *     x x x x x x x x
 *
 * Full (feature images, quotes, interactives)
 * c c c c c c c c c c c c
 * x x x x x x x x x x x x
 *
 * Left (vertical images, quotes)
 * c c c c c c c c c c c c
 *   s s s x x x x x x
 *
 * Right (vertical images, quotes, footnotes)
 * c c c c c c c c c c c c
 *     x x x x x x s s s
 * Split (usually image + image)
 * c c c c c c c c c c c c
 * x x x x x x s s s s s s
 */

(function() {
  // takes a jQuery object and applies "full" style
  var setFull = function(jqo) {
    jqo.removeClass('col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
       .addClass('col-sm-12 col-md-12 col-lg-12');
  }

  // takes two jQuery objects and applies "left" style,
  // requires multiple calls if jqo_side > jqo_main
  // TODO: use recursion to automate this
  // alternatively, use absolute positioning
  var setLeft = function(jqo_main, jqo_side) {
    jqo_main.removeClass('col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
        .addClass('col-sm-6 col-md-6 col-lg-6');
    jqo_side.removeClass('col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
        .addClass('col-sm-3 col-md-3 col-lg-3 col-sm-offset-1 col-md-offset-1 col-lg-offset-1');
    jqo_main.parent().prepend(jqo_side);
  }

  // takes two jQuery objects and applies "right" style,
  // requires multiple calls if jqo_side > jqo_main
  // TODO: use recursion to automate this
  // alternatively, use absolute positioning
  var setRight = function(jqo_main, jqo_side) {
    jqo_main.removeClass('col-sm-8 col-md-8 col-lg-8')
        .addClass('col-sm-6 col-md-6 col-lg-6');
    jqo_side.removeClass('col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
        .addClass('col-sm-3 col-md-3 col-lg-3');
    jqo_main.parent().append(jqo_side);
  }

  // takes two jQuery objects and applies "split" style
  var setSplit = function(jqo_main, jqo_side) {
    jqo_main.removeClass('col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
        .addClass('col-sm-6 col-md-6 col-lg-6');
    jqo_side.removeClass('col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
        .addClass('col-sm-6 col-md-6 col-lg-6');
    jqo_main.parent().append(jqo_side);
  }

  // lays footnotes on the page depending on viewport
  // non-mobile: inline "right" footnotes (Grantland)
  // mobile: all footnotes in a list at the bottom
  var layFootnotes = function() {
    if ($(window).width() > 767) {
      $('.post a[href^="#fn-"]').each(function(index) {
        // make footnote inline and move to relevant row
        var footnote = $('#fn-' + (index + 1));
        setRight($(this).parent(), footnote);
        // recalculate vertical offset (consider font size)
        var y = $(this).offset().top - footnote.offset().top + 1;
        footnote.css('top', y);
      });
    }
    else {
      $('.footnote').appendTo($('.post .row').last()).css('top', 0);
    }
  }

  // row-ify all paragraphs
  $('.post > p, .post .highlight, .post blockquote').addClass('col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2')
                                                    .wrap('<div class="row"></div>');
  
  // handle images and blockquotes
  $('.post img, .post blockquote p').each(function() {
    if ($(this).hasClass('full')) {
      setFull($(this).parent());
    }
    else if ($(this).hasClass('left')) {
      setLeft($(this).parents('.row').prev().find('p'), $(this).parent());
    }
    else if ($(this).hasClass('right')) { // next() to preserve order on mobile
      setRight($(this).parents('.row').next().find('p'), $(this).parent());
    }
    // TODO: apply split styles
  });

  layFootnotes();

  // adjust on window resize
  // TODO: improve performance
  $(window).on("throttledresize", layFootnotes);
})();