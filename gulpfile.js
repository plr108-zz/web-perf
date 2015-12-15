var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var minify = require('gulp-minifier');
var del = require('del');

// The default task is a stub function used to build the production version of the website.
// The task first deletes the existing dist directory (if it exists),
// then copies all source files to dist,
// then adds minified versions of the source css files,
// then adds minified version of the js files.
gulp.task('default', ['minifyJS'], function() {

});

gulp.task('minifyJS', ['minifyCSS'], function() {
    return gulp.src('source/views/js/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('dist/views/js'));
});

gulp.task('minifyCSS', ['copySource'], function() {
    return gulp.src('source/views/css/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist/views/css'));
});


// first delete the dist directory (if it exists),
// then copy source files to dist directory
gulp.task('copySource', ['deleteDist'], function() {
    return gulp.src('source/**/*')
        .pipe(gulp.dest('dist/'))
});

// delete the dist directory (if it exists)
gulp.task('deleteDist', function() {
    del('dist');
});

// compressImages was used as a part of compressing images for the project
// but is not called in the current build process.
// The compressed images have been incorporated into the source folder.
gulp.task('compressImages', function() {
    return gulp.src('source/views/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('source/views/images-compressed'))
});


// resizeImages was used as a part of creating views/images/pizza2.png
// but is not called in the current build process.
// The resized image has been incorporated into the source folder.
gulp.task('resizeImages', function() {
    return gulp.src('source/views/images/pizza.png*')
        .pipe(imageResize({
            width: 100,
            height: 100,
            crop: false,
            upscale: true
        }))
        .pipe(gulp.dest('source/views/images-resized'));
});