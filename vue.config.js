const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/agas-test/'
    : '/',
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
