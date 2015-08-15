---
layout: work
title: UpBeat
subtitle: Universal drum attachments for interactive music learning
categories: work
year: 2014
prev: 21st-century-boy
prev-title: 21st Century Boy
next: logo-design
next-title: Logo Design
links:
  - url: //designed.mit.edu/gallery/view-2014-UpBeat.html
    text: Gallery
    icon: picture-o
---

{% include image.html src='upbeat_top.jpg' alt='UpBeat can be attached to any standard drum kit for practicing, but can be also removed when it\'s time to perform' caption='UpBeat can be attached to any standard drum kit for practicing, but can also be removed when it\'s time to perform' class='wide' %}

[UpBeat](//designed.mit.edu/gallery/view-2014-UpBeat.html) is a system of modular attachments for the drum kit that uses lights and a Guitar Hero-inspired web app to teach beginner drummers how to play. The device was developed from initial concept to alpha prototype over the course of 2.009, MIT's infamous [mechanical engineering capstone course](//designed.mit.edu/gallery). In this hands-on design class, teams are given a semester and $6,500 to launch a new product around a particular theme — this year, it was "adventure." As such, UpBeat takes the daunting task of learning the drums and turns it into a fun, tactile experience.

<figure class="embed embed--full">
  <iframe src="https://player.vimeo.com/video/114149570?color=773f9b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <figcaption>Final project presentation. <a href="//vimeo.com/114149506">Watch the Q&amp;A</a></figcaption>
</figure>

UpBeat has three main components: the attachments, designed to fit any drum, cymbal, or hi-hat; the app, which runs on a laptop and contains the user's library of songs; and a central dock, which powers the attachments and sends information to and from the app. Over many weeks of extensive user testing, technical investigation, and product refinement, we created prototypes of increasing functional and aesthetic fidelity.

{% include image.html src='upbeat_prototype.jpg' alt='A functional prototype of the attachment' caption='A functional prototype of the attachment' class='right' %}

Colorful LEDs in the attachments and scrolling sheet music in the app prompt the user when to play each drum. There are two modes: one where the app waits for the user, and one that moves in real time. Hits are detected by [piezoelectric sensors](//en.wikipedia.org/wiki/Piezoelectric_sensor), allowing the app to display live feedback and record accuracy.

{% include image.html src='upbeat_drum.png' alt='The drum attachment' class='left-overflow double' %}
{% include image.html src='upbeat_cymbal.png' alt='The cymbal attachment' class='right-overflow double' %}
{% include image.html src='upbeat_hihat.png' alt='The hi-hat attachment' class='left-overflow double' %}
{% include image.html src='upbeat_dock.png' alt='The central dock' class='right-overflow double' %}
{% include image.html caption='Final CAD renderings of the dock and various drum attachments' class='caption-overflow' %}

Unlike other rhythm games on the market, however, UpBeat's interface is based on actual sheet music and the input device is the actual instrument — as a result, the learning is transferrable. Users can import any MIDI file into their library to be learned and played. In addition, the app has a record mode that allows users to compose new songs to be shared with others online. For example, an instructor can create custom exercises for students to take home and practice. They can then review individual sections that students might be struggling with and track their overall progress.

{% include image.html src='upbeat_install.png' alt='Installing a new UpBeat attachment' caption='Installing a new UpBeat attachment' class='left-overflow double' %}
{% include image.html src='upbeat_app.png' alt='UpBeat\'s practice mode, similar to Guitar Hero or Rock Band' caption='UpBeat\'s practice mode, similar to Guitar Hero or Rock Band' class='right-overflow double' %}

For this project, I was the task force leader for the software side of the product, from the central dock's [Arduino code](//github.com/s2tephen/edrum-arduino) (controlling LEDs and analyzing sensor input) to the [Ruby on Rails web app](//github.com/s2tephen/edrum) (MIDI transcription, sheet music drawing, and serial comms). When a song is selected, the app sends the notes to the Arduino, lighting up the corresponding attachment's LEDs at the correct time. Simultaneously, the dock listens for inputs from the sensors and sends feedback back to the app. This data is used to determine whether the user hit the correct note in time with the song.

{% include image.html src='upbeat_logo.png' alt='The UpBeat logo, simple and sunny' caption='The UpBeat logo, simple and sunny' class='right' %}

In addition to my development role, I also contributed to the app's UX design, planning out the onboarding process, basic user flows, and the interface itself. I also designed UpBeat's branding — I was inspired by the Dropbox logo but opted to use less harsh, rounded corners along with the whimsical Bryant typeface. This creates an identity that is minimalist and professional (for parents and educators), but at the same time also playful and child-friendly.