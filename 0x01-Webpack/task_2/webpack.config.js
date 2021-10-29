const path = require('path');

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
    mode: "production", 
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
}
