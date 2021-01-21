const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.js'),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(a?png|svg|jpe?g|gif|bmp)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            assets: path.resolve(__dirname, '../src/assets/*'),
            components: path.resolve(__dirname, '../src/components'),
            containers: path.resolve(__dirname, '../src/containers'),
            contexts: path.resolve(__dirname, '../src/contexts/*'),
            constants: path.resolve(__dirname, '../src/constants/*'),
            hooks: path.resolve(__dirname, '../src/hooks/*'),
            pages: path.resolve(__dirname, '../src/pages/*'),
            utils: path.resolve(__dirname, '../src/utils/*'),
            routing: path.resolve(__dirname, '../src/routing/*'),
        },
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello Webpack bundled JS Project',
            template: path.resolve(
                __dirname,
                '..',
                './public/index.html',
            ),
        }),
    ],
};
