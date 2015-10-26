require('babel/register');
require('./axios-interceptor');
(function init() {
  const run = require('./run');
  run();
})();
