const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(path.resolve(__dirname, 'build'));

module.exports = {
    mode: "production",
    entry: {
        main: [
            path.resolve(__dirname, 'src/main.js'),
            path.resolve(__dirname, 'src/main.scss'),
    ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },

    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
                {
                    test: /\.(scss|sass)$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                },
        ],
    },
}