/**
 * Created by 75214 on 2017/4/24.
 */
let path = require('path');
let webpack = require('webpack');

let extensions = ['', '.js', '.jsx'];

module.exports = {
    entry: path.join(__dirname, '/client/pages/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public/assets'),
        publicPath: path.resolve(__dirname, '/assets/')
    },

    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css',
        }, {
            test: /\.less$/,
            loader: 'style!css!less',
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            include: path.join(__dirname, '/client'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    },

    resolve: {
        extensions: extensions
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};

/*new webpack.optimize.UglifyJsPlugin({
 compress: {
 warnings: false
 }
 })*/
