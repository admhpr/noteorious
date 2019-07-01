module.exports = {
  presets: ["@babel/preset-env"],
  plugins: ["@babel/transform-runtime"],
  env: {
    development: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
};
