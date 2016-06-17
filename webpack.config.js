// Dependencies
const webpack       = require('webpack');
const path          = require('path');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const ExtractPlugin = require('extract-text-webpack-plugin');

const production = true;

if (production) {
    module.exports = {
        entry: [
            './scss/include.js',
        ],
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NoErrorsPlugin(),
            new ExtractPlugin('style.css')
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            loaders: [{
                test: /\.s?css$/,
                loader: ExtractPlugin.extract('style-loader', 'css!postcss!sass'),
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }],
        },
        postcss: () => ([autoprefixer, cssnano]),
    };
} else {
    module.exports = {
        entry: [
            'webpack-hot-middleware/client',
            './scss/include.js',
        ],
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NoErrorsPlugin(),
            new ExtractPlugin('style.css')
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            loaders: [{
                test: /\.s?css$/,
                loader: ExtractPlugin.extract('style-loader', 'css!postcss!sass'),
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }],
        },
        postcss: () => ([autoprefixer, cssnano]),
    };
}
