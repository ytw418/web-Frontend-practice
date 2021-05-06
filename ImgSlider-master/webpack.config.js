const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './imgSlider.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'imgSlider.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'imgSlider',
        libraryTarget: 'this',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]',
                                exportLocalsConvention: 'camelCase',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
        ],
    },
};
