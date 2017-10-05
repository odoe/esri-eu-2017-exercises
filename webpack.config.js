const webpack = require("webpack");
const path = require("path");

module.exports = env => {
  return {
    entry: [
      "webpack-dev-server/client?http://localhost:8080/", // WebpackDevServer host and port
      "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
      "./src/main.js",
    ],
    output: {
      path: path.join(__dirname, "/dist"),
      publicPath: "/dist/",
      filename: "app/main.js",
      chunkFilename: "[id].main.js",
      library: "app/main",
      libraryTarget: "amd"
    },
    devtool: "#inline-source-map",
    devServer: {
      inline: true,
      open: true
    },

    resolve: {
      modules: [path.resolve(__dirname, "/src"), "node_modules/"],
      extensions: [".js"]
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["env"]
            }
          }
        }
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],

    externals: [
      (context, request, callback) => {
        if (
          /^esri/.test(request)
        ) {
          return callback(null, "amd " + request);
        }
        callback();
      }
    ]
  };
};
