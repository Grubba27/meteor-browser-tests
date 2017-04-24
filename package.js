Package.describe({
  name: "aldeed:browser-tests",
  summary: "A helper package for Meteor test driver packages. Runs client tests in a headless browser.",
  git: "https://github.com/aldeed/meteor-browser-tests.git",
  version: '0.1.1',
  testOnly: true,
});

Package.onUse(function (api) {
  api.use('ecmascript@0.3.0');

  api.addAssets('browser/phantomjs_script.js', 'server');

  api.mainModule('server.js', 'server');
});
