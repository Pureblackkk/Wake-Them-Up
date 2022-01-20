const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        canvas: './src/entry/testEntry.js',
        others: '/src/others/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Demo',
          filename: 'index.html',
          template: path.resolve(__dirname, "src/index.html")
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        hot: 'true'
    },
    devtool: 'inline-source-map',
    mode: 'development',
};