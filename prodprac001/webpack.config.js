const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack placeholders
 * [hash] | [chunkhash] | [name] | [id] | [query] | [contenthash]
 */
/**
 * Webpack library target options
 * var | amd | commonjs | umd (Universal Module Defination)
 */

module.exports = {
	mode:"development", // default "production" or "development"
	entry:{// default entry for javascript | string, object or array path to files
		app:"./src/index.js", // entry placeholder
		popup:"./src/popup.js", // second entry
	}, 
	output: { // output configuration
		path: path.resolve(__dirname, 'build'), // folder path to output
		// filename: '../build/build.js', // output to filename create new folder outside
		filename: 'js/[name].build.js', // output filename with folder with webpack placeholders
		publicPath: '/assets/', // path that webpack used to internally(path on server) while in development of application
		// libraryTarget:'umd', // define various export syntax implementations like CommonJS, AMD define, ES6 import  
		// library:'sosLib', // it is library name and required if you set libraryTarget, this will be available on global scope

	},
	devServer: {
		port:3002, // running on port localhost:3002
		static: { // static folder directory
			directory: path.join(__dirname, 'public')
		},
		devMiddleware: {
	      writeToDisk: false, // generate file and save it to disk
	    },
	    hot:true, // enable Hot Module Replacement(HMR)


	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //enable Hot Module Replacement(HMR) by providing it via plugins
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname, 'public', 'index.html'),
			filename: "index.html",
			chunks:['app']
		}), // used to generate html template
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname, 'public', 'popup.html'),
			filename: "popup.html",
			chunks:['popup']
		})
	],

}