const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        //   path: path.reslove('./dist'),
        path: path.join(__dirname, './dist'),
        filename: 'bundle.[name].[hash].js'
    },
    mode: 'development',
    // 开启监视模式, 此时执行webpack指令进行打包会监视文件变化自动打包
    watch: true
}