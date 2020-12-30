const Dotenv = require('dotenv-webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
    },

    devServer: {
        contentBase: path.resolve(__dirname, '..', './dist'),
        port: 3000,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.production'),
        }),
    ],
};
