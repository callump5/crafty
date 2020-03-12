var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

var paths = {
    scss: {
        src: 'resources/scss/**/*.scss',
        dist: 'assets/css'
    }
}

gulp.task('compile:sass', function() {
    return gulp.src(paths.scss.src)
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(maps.write())
    .pipe(gulp.dest(paths.scss.dist));
});

gulp.task('watch:sass', function(){
    gulp.watch(paths.scss.src, gulp.task('compile:sass'))
});


       

