var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    watch   = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    gls     = require('gulp-live-server');
    
gulp.task('serve', function(){
    var server = gls.static('/', 8080);
    server.start();
});

gulp.task('sass-compile', function(){
    gulp.src('css/**.scss')
    .pipe(plumber())
    .pipe(watch('css/**.scss'))
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function(){
    gulp.src('js/**/*.js')
    .pipe(gulp.dest('build/js'));
})

gulp.task('default', ['sass-compile', 'js', 'serve']);