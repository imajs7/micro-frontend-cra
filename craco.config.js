const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp2",
          filename: "assets/remoteEntry.js",
          exposes: {
            "./Button": "./src/Button",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        })
      );
      return webpackConfig;
    },
  },
  devServer: {
    // Add devServer configuration
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
    hot: false,
    liveReload: false,
  },
};
