var resource = require('resource');

module['exports'] = resource.define('http', {
  controller: require('./lib/'),
  schema: require('./http.mschema')
});