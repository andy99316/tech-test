var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/index.js',
	// entry: '/server.js',

	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js|.jsx$/,
				exclude: /node_modules/,
				include: APP_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},

	//webpack --progress --colors --watch
	//webpack-dev-server --progress --colors
};

module.exports = config;
