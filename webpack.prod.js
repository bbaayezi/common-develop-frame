const path = require('path');
const merge = require('webpack-merge');
// import config file
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const uglifyJSPlugin = new UglifyJSPlugin();
const babelOptions = {
    "presets": [
        ["env", {
          "targets": {
            "browsers": ["last 2 versions", "safari >= 7"]
          }
        }]
    ]
};
module.exports = merge(common, {
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        uglifyJSPlugin
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.min.js'
    }
});
