/*  Requirements    */
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


//COPY HTML files
gulp.task('copyHtml', function (){
	return gulp.src('./**.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('server', function(){
  browserSync.init({
    server: './'
  });
});

//SASS COMPILER
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('Css'))
    .pipe(browserSync.stream());
});

//AUTOPREFIXER
gulp.task('autoprefix', function() {
  return gulp.src('./Css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
  }))
    .pipe(gulp.dest('dist'));
});

//MINIFY js file
gulp.task('minify', function  () {
	return gulp.src('./sass/scripts/*.js')
	.pipe(concat('min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/'));
});


gulp.task('default', ['copyHtml', 'sass', 'autoprefix', 'minify', 'server'], function(){
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('*.html').on('change', reload);
});
