var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
        libraryTarget: 'commonjs2',
        library: pkg.name
    },
    externals: getExt([
        'classnames',
        'react',
        'react-dom',
        'react-redux',
        'redux',
        'redux-saga',
        'redux-saga/effects'
    ]),
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
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
    }
};

/**
 * getExt - return a list of externals for WebPack
 * @param  {array} externals An array of strings for each package
 * @return {object} An object representing each external
 */
function getExt(externals) {
    // Split this functionality out in order to allow for future changes, as we
    // may later have a need to package our exports in a different way. It also
    // keeps the externals above looking 'neat'
    var returnData = {};

    externals.map(function(item){ returnData[item] = true; });

    return returnData;
}
