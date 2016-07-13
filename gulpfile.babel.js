import gulp from 'gulp'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import webpack from 'webpack'
var webpackconfig = require('./webpack.config.js')

gulp.task('html', () => {
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('public/html'));
});

gulp.task('css', () => {
    gulp.src('src/css/*')
        .pipe(gulp.dest('public/css/'));
});

// gulp.task('babel', () => {
//     gulp.src('src/js/**')
//         .pipe(babel())
//         .pipe(gulp.dest('public/js/'));
// });

gulp.task('webpack', (callback) => {
    var myconfig = Object.create(webpackconfig);
    webpack(myconfig, (err, stats) => {
        callback();
    });
});

gulp.task('watch', () => {

    browserSync.init({

        //设置代理
            proxy: 'localhost:8080'
    });

    gulp.watch('src/html/*.html', ['html']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['webpack']);

    //浏览器重载
    gulp.watch('public/**', browserSync.reload);
});

gulp.task('default', ['watch']);