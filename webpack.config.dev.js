// Start the mockign server
require('./tools/mock');

var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: ['./src/main.js'],
    output: {
        path: './public',
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({
            browsers: [
                'last 2 versions',
                'IE >= 10',
                'Chrome >= 31',
                'Android >= 4.4',
                'Safari >= 7',
                'iOS >= 7',
                'Firefox >= 27'
            ]
        })];
    },
    devServer: {
        proxy: {
            '/api/db*': {
                target: 'http://localhost:8080'
            }
        }
    }
};
