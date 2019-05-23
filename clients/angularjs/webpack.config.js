module.exports = {
    mode: "development",
    context: __dirname + "/src",
    entry: {
        app: "./index.js"
    },
    output: {
        path: __dirname + "/dist/",
        filename: "app.bundle.js"
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