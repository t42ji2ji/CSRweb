module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('file')
      .test(/\.xlsx$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
}