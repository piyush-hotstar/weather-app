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
    externals: {
        'react': 'React',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        'react-addons-test-utils': 'react-dom'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        
    ]
      
}