const webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            }
        ]
    }
};