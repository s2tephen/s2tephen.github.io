(function() {
  // extend object prototype
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  var descriptions = {
    nsaclaims: {
      title: 'Has the Gov\'t Lied on Snooping?',
      subtitle: 'Debunking claims on NSA surveillance, pop-up video style',
      content: {
        p1: '<img src=\'/assets/img/work_nsaclaims.png\'>',
        p2: 'As part of ProPublica\'s reporting on government surveillance, I created a video interactive that debunks claims about the NSA programs.',
        p3: 'Inspired by VH1 pop-up videos of the \'90s, the video uses pop-ups to annotate clips of statements made by government officials.',
        p4: 'The video component was designed to be shared on social networks. On the ProPublica website, the video is accompanied by an interactive frame.',
        p5: 'Using the YouTube API, the interactive lets readers follow along with a live transcript and read a more in-depth analysis of the claims.',
        p6: '<a href="http://www.youtube.com/watch?v=eptZuXkUGmI"><i class="icon-external-link"></i> Video</a><br><a href="http://projects.propublica.org/graphics/nsa-claims"><i class="icon-external-link"></i> Interactive</a>'
      }
    },
    civomega: {
      title: 'CivOmega',
      subtitle: 'Wolfram|Alpha for government data',
      content: {
        p1: '<img src=\'/assets/img/work_civomega.png\'>',
        p2: 'Created during the Knight-Mozilla-MIT Hack Day 2013, CivOmega provides a UI for querying public data sets with natural language.',
        p3: 'You can ask CivOmega questions like &ldquo;What legislative bills are about healthcare?&rdquo; or &ldquo;Who is talking about alternative energy?&rdquo;',
        p4: 'This prototype was created with the Flask Python web framework and uses various APIs from the Sunlight Foundation, as well as census data.',
        p5: '<a href="http://www.civomega.com"><i class="icon-external-link"></i> Live Demo</a><br><a href="https://github.com/CivOmega/civomega"><i class="icon-external-link"></i> GitHub</a>'
      }
    },
    mbiz: {
      title: 'Monkey Business',
      subtitle: 'Teaching children the joys of corporate espionage',
    },
    bridge: {
      title: 'Bridge',
      subtitle: 'Connecting the Marriott community'
    },
    hitched: {
      title: 'Hitched',
      subtitle: 'Wedding planning on a budget',
      content: {
        p1: '<img src=\'/assets/img/work_hitched.png\'>',
        p2: 'The final project of my user interface design class at MIT, Hitched is a web app for young couples who may not be able to afford a wedding planner.',
        p3: 'It boils the complexity of organizing a wedding down to its most basic components, populating a timeline with suggested tasks and events.',
        p4: 'These are all customizable by the couple depending on their needs. Hitched also allows family members and the wedding party to provide input.',
        p5: 'On the technical side, Hitched is built in Ruby on Rails. Its centerpiece is an interactive wedding timeline that was created with D3.js.',
        p6: 'The project went through multiple iterations of prototyping, as well as user testing and consultation with members of our target user group.',
        p7: '<a href="https://github.com/s2tephen/hitched"><i class="icon-external-link"></i> GitHub</a>'
      }
    },
    pressure: {
      title: 'Under Pressure',
      subtitle: 'Visualizing the stress of the MIT firehose'
    },
    foodmap: {
      title: 'Cambridge Food Inspections',
      subtitle: 'Investigating food safety around MIT campus'
    },
    snackshot: {
      title: 'Snackshot',
      subtitle: 'A collapsible container for snacking and snapping'
    },
    remixig: {
      title: 'Coached to Poach',
      subtitle: 'An infographic look at "copy-paste" literacies'
    },
    vojo: {
      title: 'Vojo.co',
      subtitle: 'Community storytelling for dumbphones'
    },
    nekuvo: {
      title: 'Nekuvo',
      subtitle: 'Making learning tactile again'
    },
    fourpark: {
      title: 'Fourparking',
      subtitle: 'An exploration of the design space around parking apps'
    },
    '21cb': {
      title: '21st Century Boy',
      subtitle: 'Blogging the flows of Asian pop culture and politics'
    },
    writing: {
      title: 'Writing Samples',
      subtitle: 'My written work around the web'
    }
  };

  $(window).load(function() {
    var resizeBox = function() {
      $('.description').height($('.thumbs').height())
                       .fadeIn(650);
    };

    enquire.register('screen and (max-width: 767px)', resizeBox)
           .register('screen and (min-width: 768px) and (max-width: 991px)', resizeBox)
           .register('screen and (min-width: 992px) and (max-width: 1199px)', resizeBox)
           .register('screen and (min-width: 1200px)', resizeBox);

    $('.cover:not(.external)').click(function() {
      $('.cover').unbind('mouseout').fadeIn(650)
                 .parent().removeClass('active');
      $(this).mouseout(function() {
        $(this).fadeOut(650)
               .parent().addClass('active');
      });
      var url_tokens = $(this).next().attr('src').split('/');
      var key = url_tokens[url_tokens.length - 1].split('.')[0].split('_')[1];
      var well = $('.description .well > div');
      well.fadeOut(650, function() {
        $(this).scrollTop(0).empty()
               .append('<h2>' + descriptions[key].title + '</h2>')
               .append('<h3 class="subtitle">' + descriptions[key].subtitle + '</h3>');
        for (i = 0; i < Object.size(descriptions[key].content); i++) {
          $(this).append('<p>' + descriptions[key].content['p' + (i + 1)]);
        }
        $(this).fadeIn();
      });
    });
  });
})();
