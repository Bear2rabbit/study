const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

let pathsToClean = [
    'dist/*.*',
    'build'
]

let cleanOptions = {
    root: __dirname,
    verbose: true,
    dry: false
}

module.exports = {
    entry: './src/main.js',
    output: {
        //   path: path.reslove('./dist'),
        path: path.join(__dirname, './dist'),
        filename: 'bundle.[name].[hash].js'
    },
    devServer: {
        port: 8090,
        open: true,
        hot: true,
        compress: true,
        contentBase: "./src"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Html 插件 Demo',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'assets'),
                to: 'assets'
            }
        ]),
        new webpack.BannerPlugin('zina')
    ],
    module: {
        rules: [
            // 配置的是用来解析.css文件的loader(style-loader和css-loader)
            {
                // 用正则匹配当前访问的文件的后缀名是  .css
                // loader的释义:
                // 1. css-loader: 解析css文件
                // 2. style-loader: 将解析出来的结果 放到html中, 使其生效
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // webpack底层调用这些包的顺序是从右到左
            },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(png|jpg|gif|bmp|jpeg)/,
                use: [{
                    loader: 'url-loader',
                   
                    options: {
                        esModule:false,
                        // limit表示如果图片大于5KB，就以路径形式展示，小于的话就用base64格式展示
                        limit: 5 * 1024,
                        // 打包输出目录
                        outputPath: 'images',
                        // 打包输出图片名称
                        name: '[name]-[hash:4].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)/,
                use: [{
                    loader: 'file-loader',

                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    mode: 'development',
    // 开启监视模式, 此时执行webpack指令进行打包会监视文件变化自动打包
    watch: false,
    devtool: 'cheap-module-eval-source-map'
}