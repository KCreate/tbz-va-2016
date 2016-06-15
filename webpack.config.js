// Dependencies
const webpack         = require('webpack');
const path            = require('path');
const autoprefixer    = require('autoprefixer');
const cssnano         = require('cssnano');

const production = false;

if (production) {
    module.exports = {
        entry: [
            './scss/include.js',
        ],
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false },
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            loaders: [
                {
                    test: /\.s?css$/,
                    loader: 'style!css!postcss!sass',
                },
            ],
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
            new webpack.NoErrorsPlugin()
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        module: {
            loaders: [
                {
                    test: /\.s?css$/,
                    loader: 'style!css!postcss!sass',
                },
            ],
        },
        postcss: () => ([autoprefixer, cssnano]),
    };
}
