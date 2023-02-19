const path = require('path');

module.exports = {
	mode:"development", // default "production" or "development"
	entry:"./src/index.js", // default entry for javascript | string, object or array path to files
	output: { // output configuration
		path: path.resolve(__dirname, 'build'), // folder path to output
		// filename: '../build/build.js', // output to filename create new folder outside
		filename: 'js/build.js', // output filename with folder
	}
}