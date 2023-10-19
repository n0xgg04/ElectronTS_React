const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = [
    {
        mode: "development",
        entry: "./src/index.tsx",
        target: "electron-renderer",
        devtool: "source-map",
        module: {
            rules: [
                // {
                //     test: /\.ts(x?)$/,
                //     include: /src/,
                //     use: [{ loader: "ts-loader" }],
                // },
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(scss|sass|css)$/,
                    include: resolve(__dirname, "src"),
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
            ],
        },
        output: {
            path: __dirname + "/build",
            filename: "index.js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./build/index.html",
            }),
        ],
        resolve: {
            extensions: [".ts", ".js", ".tsx", ".jsx"],
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },
    },
];
