module.exports = {
  publicPath: '/',
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: ['node_modules'],
        aggregateTimeout: 300,
      },
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/css/_variables.scss";
          @import "@/assets/css/_mixins.scss";
        `,
      },
    }
  },
  chainWebpack: config => {
    // safari caching issue
    if (process.env.NODE_ENV === 'development') {
      config
        .output
        .filename('[name].[hash].js') 
        .end() 
    }
    
    config.module.rules.delete('eslint');    // @TODO configure esLint properly -- disabling for now
    const svgRule = config.module.rule('svg')

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear()

    // add replacement loader(s)
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            {"cleanupIDs": false},
            // {"convertShapeToPath": false},
            // {"convertStyleToAttrs": false},
          ]
        }
      })
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });
  }
};