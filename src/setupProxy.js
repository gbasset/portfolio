// const proxy = require('http-proxy-middleware');
// module.exports = function (app) {
//     app.use(proxy('/.netlify/functions',
//         { target: 'http://localhost:9000/' },

//     ));
// }
const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/.netlify/functions', {
        target: 'http://localhost:9000/', pathRewrite: {
            '^/\\.netlify/functions': '',
        },
    }));
};