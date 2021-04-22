const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@atoms': path.resolve(__dirname, "src/components/atoms/"),
            '@images': path.resolve(__dirname, "src/assets/images/")
        }
    }
}