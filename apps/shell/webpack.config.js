const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['home', 'http://localhost:4201/remoteEntry.mjs'],
    ['contact', 'http://localhost:4202/remoteEntry.mjs'],
    ['about', 'http://localhost:4203/remoteEntry.js'],
    ['support', 'http://localhost:4204/remoteEntry.js'],
  ]
});
