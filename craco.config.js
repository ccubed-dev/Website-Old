/* eslint-disable no-undef */
const path = require("path");
module.exports =
{
    webpack:
    {
        minify: false,

        alias: {
            "@animations":
                path.resolve(
                    __dirname,
                    "src/components/animations/"
                ),
            "@atoms":
                path.resolve(
                    __dirname,
                    "src/components/atoms/"
                ),
            "@molecules":
                path.resolve(
                    __dirname,
                    "src/components/molecules/"
                ),
            "@organisms":
                path.resolve(
                    __dirname,
                    "src/components/organisms/"
                ),
            "@images":
                path.resolve(
                    __dirname,
                    "src/assets/images/"
                ),
            "@routes":
                path.resolve(
                    __dirname,
                    "src/routes/Router.jsx"
                ),
            "@pages":
                path.resolve(
                    __dirname,
                    "src/pages/"
                ),
            "@styles":
                path.resolve(
                    __dirname,
                    "src/styles/"
                ),
            "@constants":
                path.resolve(
                    __dirname,
                    "src/resources/constants/"
                ),
            "@resources":
                path.resolve(
                    __dirname,
                    "src/resources/"
                ),
        },
    },
};
