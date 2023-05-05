const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
    }
})

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];

module.exports = {
    configureWebpack: config => {
        config.plugins.push(new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        }));
        config.devtool = false;
    },
    chainWebpack: config => {
        config.plugins.delete("prefetch");
        // 移除 preload 插件
        config.plugins.delete('preload');
        // 压缩代码
        config.optimization.minimize(true)
    },
}

