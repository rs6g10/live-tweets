const path = require("path");
const commonLoaders = [{test: /\.js$/, loader: "jsx-loader"}];
const assetsPath = path.join(__dirname, 'public', 'assets');
const publicPath = 'assets/';

module.exports = [
    {
        name: 'browser',
        entry: './src/client/app/app.js',
        output: {
            path: assetsPath,
            filename: 'bundle.js',
            publicPath: publicPath
        },
        module: {
            loaders: commonLoaders.concat(
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|eot|ttf|woff||gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader?publicPath=../&name=./assets/[hash].[ext]'
                        },
                        'image-webpack-loader'
                    ]

                }
            ),
        },

    }
];
