module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
                  // Or array of paths
          resources: ['./src/sass/_variables.scss', './src/sass/_global.scss']
        })
        .end()
    })
  }
}