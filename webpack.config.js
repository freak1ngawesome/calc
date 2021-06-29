const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    //webpack-dev-server settings
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
				open: true,
				hot: true,
    },
    module: {
        rules: [
            {
                test: /\.bundle\.ts$/,
                use: {
                    loader: 'bundle-loader',
                    options: {
                        name: '[name]'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                exclude: /fonts/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            }

        ],
    },
    /* Attempt to resolve these extensions in order.
       If multiple files share the same name but have
       different extensions, webpack will resolve the
       one with the extension listed first in the
       array and skip the rest.
     */
    resolve: {
				modules: [__dirname, "src", "node_modules"],
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
};