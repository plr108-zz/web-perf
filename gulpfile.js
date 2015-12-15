var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var minify = require('gulp-minifier');

// The default task is used to build production version of project.
// This task copies all files to dist,
// then adds minified css to dist,
// then adds minified js to dist.
gulp.task('default', function() {
    return gulp.src('source/**/*')
        .pipe(gulp.dest('dist/'))
        gulp.src('source/views/css/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist/views/css/'))
        gulp.src('source/views/js/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist/views/js/'));
});

// compressImages was used as a part of compressing images for the project
// but is not called in the current build process.
// The compressed images have been incorporated into the source folder.
gulp.task('compressImages', function() {
    return gulp.src('views/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('views/images-compressed'))
});


// resizeImages was used as a part of creating views/images/pizza2.png
// but is not called in the current build process.
// The resized image has been incorporated into the source folder.
gulp.task('resizeImages', function() {
    return gulp.src('views/images/pizza.png*')
        .pipe(imageResize({
            width: 100,
            height: 100,
            crop: false,
            upscale: true
        }))
        .pipe(gulp.dest('views/images-resized'));
});