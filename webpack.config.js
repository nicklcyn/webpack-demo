const { constants } = require('buffer')
const path = require('path')


module.exports = {
    entry: {
        alert: './src/alert.js',
        login: './src/login.js'
    },
    output: {
        filename: '[name].[hash].js',
        path : path.resolve(__dirname, './dist')
    }
}
