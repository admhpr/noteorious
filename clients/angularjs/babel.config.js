module.exports = {
  presets: ["@babel/preset-env"],
  env: {
    development: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
};
