---
layout: work
title: Under Pressure
subtitle: Visualizing the stress of drinking from the MIT firehose
categories: work
year: 2012
prev: govt-snooping
prev-title: Gov't Snooping
next: 21st-century-boy
next-title: 21st Century Boy
links:
  - url: //tech.mit.edu/V132/N59/pressure/index.htm
    text: Issue
    icon: newspaper-o
---

{% include image.html src='pressure_tech.jpg' alt='The Tech\'s special on student stress sparked a campus-wide conversation about mental health at MIT' caption='<em>The Tech</em>\'s special on student stress sparked a campus-wide conversation about mental health at MIT' class='wide' %}

"Getting an education from MIT is like taking a drink from a firehose," said former MIT president Jerome Wiesner. This evocative description of life at the Institute is immortalized in a student-built [fire hydrant/drinking fountain](//hacks.mit.edu/Hacks/by_year/1991/fire_hydrant) and — even more importantly — in the undergrad lexicon, where being "hosed" means being flooded with work or the physical/mental exhaustion that comes with it. At MIT, academic stress is a badge of honor; to be hosed is to be hardcore.

{% include image.html src='mit_firehose.jpg' alt='The infamous MIT firehose hack' caption='The infamous MIT firehose hack (Photo: <a href="//www.flickr.com/photos/diueine/4360537481">Diueine Monteiro</a>)' class='right' %}

In the last five years, the school has reported an average of 12.5 suicides per 100,000 students, far beyond the national average (somewhere between 6.5 and 7.5 per 100,000 students). To delve into this issue, <em>The Tech</em> ran a schoolwide survey exploring how academic pressure affected students' lives, from workload to self-image, from social life to happiness.

Nearly 3,200 people — 29% of the entire student population — responded to our survey. Based on the results, we put together [Under Pressure](//tech.mit.edu/V132/N59/pressure), a special issue of *The Tech* comprised of data-driven stories and interviews on all angles of stress at MIT. I was brought on as the data editor for this project, helping design and deploy the questionnaire. Once we had the responses, I was responsible for cleaning and querying the dataset with OpenRefine and SQL, surfacing story ideas and extracting interesting statistics for infographics.

{% include image.html src='pressure_print.png' alt='Our spread of infographics for the print edition of The Tech\'s pressure special' caption='Our spread of infographics for the print edition of <em>The Tech</em>\'s pressure special' class='wide' %}

A clear trend emerged from the data: [impostor syndrome](//en.wikipedia.org/wiki/Impostor_syndrome) was a commonplace occurrence at MIT, and our masochistic academic culture wasn't helping. Students often perceived themselves as inferior to their peers, believing that others worked harder, slept less, and took more clases than themselves. Over half of survey respondents said that at some point during their time at MIT, they had felt like they did not belong. Our report showed the student body that they were not alone in feeling this way, and provoked discussions around the school community. A month after publication, *The Tech* co-hosted a forum with the student body and senior administrators, exploring constructive solutions to various issues caused by academic stress.

{% include image.html src='pressure_breakdown.png' alt='One of our interactive visualizations of the survey data, allowing readers to explore the results' caption='One of our interactive visualizations of the survey data, allowing readers to explore the results' class='wide shadow' %}

In addition to our print infographics, I helped direct the online interactives for the issue, guiding the developers in the information and interaction design of their visualizations. These included a comprehensive [breakdown of survey highlights](//tech.mit.edu/V132/N59/pressure/breakdown), faceted by dorm, year, major, gender, and age (the underlying library was eventually [open-sourced on GitHub](//github.com/TheMITTech/breakdown)); a filterable graph of [when MIT students are asleep](//tech.mit.edu/V132/N59/pressure/sleepinghours); an interactive chart looking at how students divide their time between [sleep, work, and play](//tech.mit.edu/V132/N59/pressure/sleepworkplay); and a bubble chart of the Institute's [most stressful classes](//tech.mit.edu/V132/N59/pressure/stressful_classes). As an entire package, Under Pressure brought the issue of stress to the forefront of the community conversation, served as a model for a number of future survey-driven specials at *The Tech*, and placed as a finalist in the student projects category of the [2013 Online Journalism Awards](//journalists.org/awards/2013-awards/).