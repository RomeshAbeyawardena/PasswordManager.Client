module.exports = {
    transpileDependencies: ["vuetify"],
    devServer: {
        proxy: {
            "^/api": {
                target: "http://localhost:5500",
                ws: true,
                changeOrigin: true
            }
        }
    }
};
