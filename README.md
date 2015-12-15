# Udacity Front-End Web Developer Nanodegree
## Project 4: Website Optimization

This repository contains my submission for the Website Optimization project of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).

### Install Instructions

* To install this website copy all files in the dist folder to the desired location on your web server.  The two main pages optimized in this project are index.html and views/pizza.html.

* The production version project can be rebuilt using gulp the default task.  To rebuild, delete the dist folder and run the `gulp` command.  Please see [this site](https://www.npmjs.com/package/gulp) for more information on using gulp.

### Optimizations

Here are the optimizations I made to meet the [specifications of the project](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535).

#### The [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score for index.html has been optimized (Score of 94 for Mobile, 96 for Desktop).

* CSS resources related to above-the-fold content have been inlined in index.html

* Google fonts are loaded using [webfontloader](https://github.com/typekit/webfontloader)

* Google Analytics script is loaded asynchronously

* Images have been compressed, and CSS and JavaScript resources have been minified using optimized resources provided by PageSpeed Insights.  A Pizzeria thumbnail file is now used and stored in the /img folder.

* The index.html file has been reformatted using [jsbeautifier](http://jsbeautifier.org/)

#### The time necessary to resize pizzas in /views/pizza.html has been reduced.

* The calculations used to determine pizza sizes have been greatly simplified.  See inline comments in /views/js/unminified/main.js for details.

####All content has a framerate of 60 fps or better when scrolling in /views/pizza.html.

* Different pizza image files are used for randomPizzaContainer and mover classes.  The image file for the mover class been resized to 77px x 100px and compressed.

* CSS rules in /views/css/style.css and related to the mover class have been changed to handle the new dimensions of the pizza image file.  The "backface-visibility: hidden" property is now used for the mover class.

* Typo in CSS rules for .input class has been corrected: "background: grey" is now used instead of "background: gray"

* The number of pizzas displayed on the screen has been reduced from 200 to 32.

* requestAnimationFrame is used to handle requests related to animating the background pizzas in response to scrolling.

* Using [this approach presented by Paul Lewis](http://www.html5rocks.com/en/tutorials/speed/animations/) to debounce scroll events.

* Using global variables and [this array approach presented by Matt Prather](https://gist.github.com/prather-mcs/05526bb379f845ee2ba1) to  simplify the pizza animation calculations in updatePositions() as much as possible.

* Using the transform property to animate the pizzas since it has a small performance cost according to [csstriggers.com](http://csstriggers.com/).

* CSS and JavaScript files have been minified.  See views/css/unminified and views/js/unminified for the unminified versions.

#### [npm](https://www.npmjs.com/) and the following packages were used in this project.

* [gulp](https://www.npmjs.com/package/gulp): The stream building system.  Please see gulpfile.js for examples of how gulp was used to execute the various npm resources used as a part of completing this project.

* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin): used to compress images

* [gulp-image-resize](https://www.npmjs.com/package/gulp-image-resize): used to resize images

* [gulp-minifier](https://github.com/webyom/gulp-minifier): used to minify CSS and JavaScript files