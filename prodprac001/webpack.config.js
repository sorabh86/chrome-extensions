const path = require('path');

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
	}, 
	output: { // output configuration
		path: path.resolve(__dirname, 'build'), // folder path to output
		// filename: '../build/build.js', // output to filename create new folder outside
		filename: 'js/[name].build.js', // output filename with folder with webpack placeholders
		publicPath: '/assets/', // path that webpack used to internally(path on server) while in development of application
		libraryTarget:'umd', // define various export syntax implementations like CommonJS, AMD define, ES6 import  
		library:'sosLib', // it is library name and required if you set libraryTarget, this will be available on global scope


	}
}