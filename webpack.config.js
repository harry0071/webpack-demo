const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/entry.js',
	output: {
		filename: 'main.min.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	module: {
		rules: [{
				test: /\.js$/, //以.js结尾的文件
				exclude: /(node_modules|bower_components)/, //排除
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}, 'postcss-loader', 'sass-loader'],
					publicPath: "/dist"
				})
			}
			//['style-loader','css-loader','sass-loader']
			, {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}, 'postcss-loader'],
					publicPath: "/dist"
				})
			}, {
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}, 'postcss-loader', 'less-loader'],
					publicPath: "/dist"
				})
			}
		]

	},
	plugins: [
		new ExtractTextPlugin('../css/style.css')
	]
};