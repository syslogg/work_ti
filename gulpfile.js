var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');

var Path = {
    BaseDir: './',
    Dist: {
        CSS: './src/'
    },
    Src:{
        LESS: './src/**/*.less',
    }
};

gulp.task('less', function() {
   gulp.src(Path.Src.LESS)
        .pipe(less({
            paths:[ path.join(__dirname,'less','includes') ]
        }))
        .pipe(gulp.dest(Path.Dist.CSS));
});

gulp.task('default', [ 'less' ], function() {
    gulp.watch([Path.Src.LESS],function(event){
        gulp.run('less');
    });
});

gulp.task('build', function() {
    gulp.run('less');
});