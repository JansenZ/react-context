const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js', //webpack的默认配置
    output: {
        path: path.resolve(__dirname, 'dist'), //必须是绝对路径
        filename: 'connect.js',
        libraryTarget: 'umd' // 这个选项会尝试把库暴露给前使用的模块定义系统，这使其和CommonJS、AMD兼容或者暴露为全局变量
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js|jsx|ts|tsx$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                use: ['style-loader', 'css-loader', {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          [
                            "postcss-preset-env",
                            {
                              // 其他选项
                            },
                          ],
                        ],
                      },
                    },
                  }, 'less-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            minify: {
                removeAttributeQuotes: false, //是否删除属性的双引号
                collapseWhitespace: false, //是否折叠空白
            },
            hash: true, //是否加上hash，默认是 false, 加上后，main.js后缀会带hash值,
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            FLAG: 'true' //FLAG 是个布尔类型
        })
    ],
    devServer: {
        port: '3000', //默认是8080
        // quiet: false, //默认不启用
        // inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
        // stats: "errors-only", //终端仅打印 error
        // overlay: false, //默认不启用
        // client: "silent", //日志等级
        // client-overlay:true,
        hot: true, // 热更新
        compress: true //是否启用 gzip 压缩
    },
    devtool: false,
    resolve: {
        extensions: ['.js', '.jsx','.json', '.ts', '.tsx']
    },
}