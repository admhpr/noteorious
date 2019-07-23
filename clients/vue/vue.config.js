const path = require("path");
const baseDir = "src";
module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./src/main.js")
      .end();
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, `${baseDir}/components/`),
        "@core": path.resolve(__dirname, `${baseDir}/core/`),
        "@directives": path.resolve(__dirname, `${baseDir}/directives/`),
        "@elements": path.resolve(__dirname, `${baseDir}/elements/`),
        "@pages": path.resolve(__dirname, `${baseDir}/pages/`),
        "@src": path.resolve(__dirname, `${baseDir}/`),
        "@store": path.resolve(__dirname, `${baseDir}/store`),
        "@styles": path.resolve(__dirname, `${baseDir}/assets/styles/`),
        "@services": path.resolve(__dirname, `${baseDir}/services/`),
        "@utils": path.resolve(__dirname, `${baseDir}/utils/`)
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, `./${baseDir}/assets/styles/global.scss`)
      ]
    }
  }
};
