const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        historyApiFallback: true,
        allowedHosts: 'all',
    },
    runtimeCompiler: true,
    configureWebpack: {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/](vue|vue-router|vuex|axios|echarts|element-ui|element-plus)[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
    },
})
