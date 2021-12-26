module.exports = {
    lintOnSave: false,	//关闭校验
    devServer: {
        proxy: {
            '/*': {
                target: 'http://localhost:8088',	//代理目标的基础路径
                // changeOrigin: true,
            }
        }
    },
    runtimeCompiler: true,
    productionSourceMap: false,

    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}