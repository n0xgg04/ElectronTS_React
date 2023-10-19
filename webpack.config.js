const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './src/index.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: { rules: [{
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            }] },
        output: {
            path: __dirname + '/build',
            filename: 'index.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './build/index.html'
            })
        ]
    }
];
