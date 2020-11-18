const path = require('path');

const BitBarWebpackProgressPlugin = require('bitbar-webpack-progress-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webConfig = {
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: ['@babel/polyfill', './src/client/index.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },

    externals: [],

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.web.js'
    },
    plugins: [new BitBarWebpackProgressPlugin(),
              new HtmlWebpackPlugin({ title: 'Template' })
             ],
    watch: true
};

module.exports = [webConfig];