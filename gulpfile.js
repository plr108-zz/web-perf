var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var minify = require('gulp-minifier');

// default task is used to build production version of project
gulp.task('default', function() {
    return gulp.src('source/**/*')
        .pipe(gulp.dest('dist/'));
});

gulp.task('compressImages', function() {
    return gulp.src('views/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('views/images-compressed'))
});


// resizeImages was used as a part of creating views/images/pizza2.png
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

gulp.task('minifyCSS', function() {
    return gulp.src('views/css/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('css-minified'));
});

gulp.task('minifyJS', function() {
    return gulp.src('views/js/*')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('js-minified'));
});