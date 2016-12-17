import gulp from 'gulp'
import babel from 'gulp-babel'
import browserSync from 'browser-sync'
import webpack from 'webpack'
var webpackconfig = require('./webpack.config.js')

gulp.task('html', () => {
    gulp.src('dev/src/html/*.html')
        .pipe(gulp.dest('public/src/html'));
});

gulp.task('css', () => {
    gulp.src('dev/src/css/*')
        .pipe(gulp.dest('public/src/css/'));
});

gulp.task('img', () => {
    gulp.src('dev/src/img/*')
        .pipe(gulp.dest('public/src/img/'));
});

gulp.task('webpack', (callback) => {
    var myconfig = Object.create(webpackconfig);
    webpack(myconfig, (err, stats) => {
        console.log('webpack status:' + stats);
    });
});

gulp.task('server', () => {
    gulp.src('dev/server/**')
        .pipe(babel({
            //支持generators
            plugins: ['transform-runtime']
        }))
        .pipe(gulp.dest('public/server'));
});

gulp.task('appjs', () => {
    gulp.src('dev/app.js')
        .pipe(babel({
            plugins: ['transform-runtime']
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', () => {

    browserSync.init({

        //设置代理
            proxy: 'localhost:8080'
    });

    //监视后端文件改动并babel
    gulp.watch('dev/server/**', ['server']);
    //将启动文件转码后放在public目录下
    gulp.watch('dev/app.js', ['appjs']);

    //监视前端文件改动
    gulp.watch('dev/src/html/*.html', ['html']);
    gulp.watch('dev/src/css/*.css', ['css']);
    gulp.watch('dev/src/img/*', ['img']);
    // gulp.watch('./webpack.config.js', ['webpack']);

    //html文件改动时，浏览器重载，
    gulp.watch('public/src/html/*.html', browserSync.reload);
});

//开始webpack，编译css、js，监视后端改动和html文件
gulp.task('default', ['server', 'appjs', 'watch', ]);