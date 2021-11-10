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

const javascriptRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-syntax-jsx"]
        }
    },
}

module.exports = {
    module: {
        rules: [
            cssLoader,
            imageLoader,
            javascriptRules
        ]
    },
    devServer: {
        static: {
          directory: path.join('dist'),
        },
        compress: true,
        port: 9000,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },
}
