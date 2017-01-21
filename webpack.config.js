var assetPlugin = require('assets-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    entry: {
        "index": "./assets/js/index"
    },
    output: {
        //本地存放路径
        path: __dirname + "/assets/dist",
        //name默认为main
        filename: "[name].bundle.js",
        //webpack-dev开启时,外部访问路径，(开发时的文件变动会推送到这个域名下)前缀：0.0.0.0:8000/webpack-dev-server/
        publicPath: "http://0.0.0.0:8000/js/",
        sourceMapFilename: "[name].bundle.map"
    },
    module: { //加载器配置 
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [__dirname + '/assets/js/']
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap',
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: { //查找module的话从这里开始查找
        extensions: ['', '.js', '.jsx'],
        // root: __dirname + 'public/src/js', //绝对路径
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    //enable dev source map
    devtool: '#eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    }
}

var env = process.env.NODE_ENV
if (env !== 'development') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new assetPlugin({ filename: 'assets.json' }),
        // new webpack.optimize.CommonsChunkPlugin({name: "commons", filename: "commons.js"})
    ])
}