import gulp from 'gulp'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'

gulp.task('html', () => {
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('public/html'));
});

gulp.task('watch', () => {

    browserSync.init({

        //设置代理
            proxy: 'localhost:8080'
    });

    gulp.watch('src/html/*.html', ['html']);

    //浏览器重载
    gulp.watch('public/**', browserSync.reload);
});

gulp.task('default', ['watch']);