var assetPlugin = require('assets-webpack-plugin')

module.exports = {
    entry: {
        "index": "./dev/src/js/index"
    },
    output: {
        //本地存放路径
        path: __dirname + "/public/src/js",
        //name默认为main
        filename: "[name].bundle.js",
        //webpack-dev开启时,外部访问路径，(开发时的文件变动会推送到这个域名下)前缀：0.0.0.0:8000/webpack-dev-server/
        publicPath: "http://0.0.0.0:8000/src/js/",
        sourceMapFilename:"[name].bundle.map"
    },
    module: { //加载器配置 
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [__dirname + '/dev/src']
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap',
                include: [__dirname + './dev/src/css/']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
                include: [__dirname + './dev/src/img/']
            }
        ]
    },
    resolve: { //查找module的话从这里开始查找
        extensions: ['', '.js', '.jsx'],
        // root: __dirname + 'public/src/js', //绝对路径
        modulesDirectories: ['node_modules', 'dev/src/js']
    },
    plugins: [
        new assetPlugin({filename: 'assets.json'})
    ],
    //enable dev source map
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    }
}