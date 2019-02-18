/**
 * Created by turashov on 14.08.2018.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: ['@babel/polyfill', './src/client/index.jsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/static'),
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 5011,
        historyApiFallback: true,
        open: true,
        hot: true,
        proxy: {
            '/api': 'http://localhost:5010'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Aviasales | Поиск',
            filename: 'index.html',
            template: './src/client/index.html',
            mobile: true,
            appMountId: 'app'
        }),
    ]
};