const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/JS/gameReady.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	// setting Local Server
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		open: true,
		compress: true,
		port: 3000,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/index.html', to: '' },
				{ from: 'public/audio', to: 'audio' },
				{ from: 'public/images', to: 'images' },
				{ from: 'public/favicon', to: 'favicon' },
			],
		}),
	],
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
			{ test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
			{
				test: /\.js$/,
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
	optimization: {
		minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
	},
};
