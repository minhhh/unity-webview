var path = require('path');

module.exports = {
    entry: "./unityschema.js",
    output: {
        path: __dirname,
        filename: "unityschema.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window'
            }
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, "vendor"),
            "node_modules"
        ],
        alias: {
            'jquery$': 'jquery-1.2.1.js'
        }
    }
};
