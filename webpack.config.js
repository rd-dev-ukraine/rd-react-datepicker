module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader?importLoaders=1"
                ]
            },
        ],

        preLoaders: [{ test: /\.js$/, loader: "source-map-loader" }]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};