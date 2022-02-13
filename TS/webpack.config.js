const path = require("path");

module.exports = {
    mode: 'development',
    entry: [
        "./src/main.ts",
    ],
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: "commonjs2",
        module: true,
    },
    resolve: {
        preferRelative: true,
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        csharp: "commonjs2 csharp",
        puerts: "commonjs2 puerts",
        path: "commonjs2 path",
        fs: "commonjs2 fs",
    }
}