const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: {
        alert: './src/alert.js',
        login: './src/login.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'],
        }, ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new CleanWebpackPlugin({
            verbose: true,
        })
    ],
}