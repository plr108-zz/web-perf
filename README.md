## Udacity Front-End Web Developer Nanodegree Project 4 Website Optimization

This repository contains my submission for the Website Optimization project of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).  Here are the optimizations I made to meet the [specifications of the project](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535).

####The [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score for index.html has been optimized (Score of 94 for Mobile, 96 for Desktop).

Optimizations and changes made:

* CSS resources related to above-the-fold content have been inlined in index.html

* Google fonts are loaded using [webfontloader](https://github.com/typekit/webfontloader)

* Google Analytics script is loaded asynchronously

* Images have been compressed, and CSS and JavaScript resources have been minified using optimized resources provided by PageSpeed Insights

* The index.html files has been reformatted using [jsbeautifier](http://jsbeautifier.org/)

####The time necessary to resize pizzas in /views/pizza.html has been reduced.

Optimizations and changes made:

* The calculations used to determine pizza sizes have been greatly simplified.  See inline comments in /views/js/main.js for details.

####All content has a framerate of 60 fps or better when scrolling in /views/pizza.html.

Optimizations and changes made:

* The pizza.png file has been resized to 77px x 100px and compressed.

* CSS rules in /views/css/style.css and related to the .mover class have been changed to handle the new dimensions of pizza.png.  The "backface-visibility: hidden" property is now used for the .mover class.

* Typo in CSS rules for .input class has been corrected: "background: grey" is now used instead of "background: gray"

* The number of pizzas displayed on the screen has been reduced from 200 to 32.

* requestAnimationFrame is used to handle requests related to animating the background pizzas in response to scrolling.

* Using [this approach presented by Paul Lewis](http://www.html5rocks.com/en/tutorials/speed/animations/) to debounce scroll events.

* Using global variables and [this array approach presented by Matt Prather](https://gist.github.com/prather-mcs/05526bb379f845ee2ba1) to  simplify the pizza animation calculations in updatePositions() as much as possible.

* Using the transform property to animate the pizzas since it has a small performance cost according to [csstriggers.com](http://csstriggers.com/).

