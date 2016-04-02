var gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'); // Плагин для Jade

// Jade
gulp.task('jade', function(){
  gulp.src('./set/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
});


// Watch
gulp.task('watch', function(){
 gulp.watch('./set/*.jade', ['jade']);
});

// build
gulp.task('build', function(){
 gulp.run('jade');
});

gulp.task('default', ['build', 'watch']);