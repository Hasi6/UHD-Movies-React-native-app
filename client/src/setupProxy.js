const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/*', { target: 'http://10.0.2.2:5000' }));
  app.use(proxy('/*/*', { target: 'http://10.0.2.2:5000' }));
  app.use(proxy('/*/*/*', { target: 'http://10.0.2.2:5000' }));
};