// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// waiting for storybook to work with webpack 2
// https://github.com/storybooks/react-storybook/pull/637
const baseConfig = require('../webpack.config')('production');

module.exports = storybookBaseConfig => Object.assign({}, storybookBaseConfig, {
  resolve: baseConfig.resolve,
  module: Object.assign({}, storybookBaseConfig.module, {
    rules: storybookBaseConfig.module.loaders.concat(
      // { test: /\.js$/, excludes: /node_modules/, loader: 'babel-loader' },
      baseConfig.module.rules
    )
  })
});
