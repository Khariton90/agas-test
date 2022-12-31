const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/agas-cloud/',
  transpileDependencies: true, 
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import '@/assets/variables.scss';
        @import '@/assets/mixins.scss';
        `
      } 
    }
  }
})
