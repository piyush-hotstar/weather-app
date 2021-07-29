const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: [
        "@babel/polyfill", "./index.js"
    ],
    
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader'
            // options: {
            //     presets: ['@babel/preset-env']
            // }
            }
        },
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            // options: {
            //     presets: ['@babel/preset-env']
            // }
            ]
        }
        ]
    },
    // module: {
    //     rules: [
    //     {
    //         test: /\.css$/,
    //         use: [
    //         'style-loader',
    //         'css-loader'
    //         // options: {
    //         //     presets: ['@babel/preset-env']
    //         // }
    //         ]
    //     }
    //     ]
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
      
}