const path = require('path');
const merge = require('webpack-merge');
// import config file
const common = require('./webpack.common');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    // use source-map
    devtool: 'souce-map',
    //config dev server
    devServer: {
        contentBase: './dist',
        // set port
        port: 9000,
        open: true
    },
    plugins: [
    ],
    // set output file and directories
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    }
})