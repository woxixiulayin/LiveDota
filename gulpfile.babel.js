import gulp from 'gulp'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import webpack from 'webpack'
var webpackconfig = require('./webpack.config.js')

// gulp.task('webpack', (callback) => {
//     var myconfig = Object.create(webpackconfig);
//     webpack(myconfig, (err, stats) => {
//         console.log('webpack status:' + stats);
//     });
// });

var serverSrc = 'server/**',
    serverBuild = 'server-build/';

gulp.task('server', () => {
    gulp.src(serverSrc)
        .pipe(babel({
            //支持generators
            plugins: ['transform-runtime']
        }))
        .pipe(gulp.dest(serverBuild))
});

gulp.task('watch', () => {

    // browserSync.init({

    //     //设置代理
    //         proxy: 'localhost:8080'
    // });

    //监视后端文件改动并babel
    gulp.watch(serverSrc, ['server']);

    // gulp.watch('./webpack.config.js', ['webpack']);

    //html文件改动时，浏览器重载，
    // gulp.watch('public/src/html/*.html', browserSync.reload);
});

//开始webpack，编译css、js，监视后端改动和html文件
gulp.task('default', ['server', 'watch', ]);