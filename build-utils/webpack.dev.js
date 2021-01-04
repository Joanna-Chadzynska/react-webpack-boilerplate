const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.development'),
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '..', './public'),
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
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
};
