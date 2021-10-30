const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
}

const imageLoader = {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
        'file-loader',
        {
        loader: 'image-webpack-loader',
        options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
        },
        },
    ],
}

module.exports = {
    module: {
        rules: [
            cssLoader,
            imageLoader,
        ]
    },
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
        header: './modules/header/header.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },
    performance: {
        maxAssetSize: 1000000,
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
    ],
}
