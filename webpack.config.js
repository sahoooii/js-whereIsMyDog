const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/gameReady.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	mode: 'production',
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		open: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
	optimization: {
		minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'], //後ろから実行される
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
