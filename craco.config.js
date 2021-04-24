const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@atoms': path.resolve(__dirname, "src/components/atoms/"),
            '@images': path.resolve(__dirname, "src/assets/images/"),
            '@routes': path.resolve(__dirname, "src/routes/Router.jsx"),
            '@scenes': path.resolve(__dirname, "src/scenes/"),
            '@styles': path.resolve(__dirname, "src/styles/App.css")
        }
    }
}