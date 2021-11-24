const gulp = require('gulp'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename'),
        cssnano = require('gulp-cssnano');
    
gulp.task('sass',function(){
    gulp.src('./src/sass/*scss').pipe(sass())
    .pipe(rename({
        'suffix' : '.min'
    }))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist'));
})
gulp.task('default',function(){
    gulp.watch(['./src/sass/*.scss'],['sass']);
})