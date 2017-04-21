var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/app.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/app/dist",
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["react-hot-loader", "babel-loader"],
        }],
    },

    plugins: [ new HtmlWebpackPlugin() ]

}