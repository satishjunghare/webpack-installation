module.exports = {
	entry: './js/main.js',
	output: {
		filename: './js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_module/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	watch: true
};