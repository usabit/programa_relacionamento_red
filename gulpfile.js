var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jeet = require('jeet');
var rupture = require('rupture');
var nib = require('nib');
var prefixer = require('autoprefixer-stylus');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var sequence = require('run-sequence');
var notify = require('gulp-notify');
var npmDist = require('gulp-npm-dist');
var browserSync = require('browser-sync').create();

gulp.task('stylus', function() {
    return gulp.src('_assets/styl/main.styl')
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [nib(), prefixer(), jeet(), rupture()],
            compress: true
        }))
        //write('.') para jogar o mapa do css na mesma pasta em que vai ser colocado o css gerado
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream())
    ;
});

gulp.task('vendors', function() {
    return gulp.src(npmDist(), { base: './node_modules' })
        .pipe(gulp.dest('./assets/libs'))
    ;
});

gulp.task('js', function() {
    return gulp.src('_assets/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/'))
        .on('error', notify.onError({ Title: 'JSHint', message: 'Errors on javascript.' }))
        .pipe(browserSync.stream())
    ;
});

gulp.task('image', function() {
    return gulp.src('_assets/img/**/*')
        .pipe(gulp.dest('assets/img/'));
});

gulp.task('fonts', function() {
    return gulp.src('_assets/fonts/**/*')
        .pipe(gulp.dest('assets/fonts/'));
});

gulp.task('watch', function() {
    gulp.watch('_assets/styl/**/*.styl', ['stylus']);
    gulp.watch('_assets/js/**/*.js', ['js']);
    gulp.watch('_assets/img/**/*.{jpg,png,gif}', ['image']);
});

gulp.task('clean', function(cb) {
    return del(['_site/', 'assets/']);
});


gulp.task('sequence', function(callback) {
    sequence(
        'clean',
        'vendors',
        ['js', 'stylus', 'image', 'fonts'],
        'watch',
        callback
    );
});

gulp.task('default', ['sequence'], function() {
    browserSync.init({
        server: "./_site"
    });

    gulp.watch("_site/**/*.html").on('change', browserSync.reload);
});
