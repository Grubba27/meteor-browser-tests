Package.describe({
  name: 'grubba:browser-tests',
  summary:
    'A helper package for Meteor test driver packages. Runs client tests in a headless browser.',
  git: 'https://github.com/meteortesting/meteor-browser-tests.git',
  version: '1.5.2-alpha300.11',
  testOnly: true,
});

Package.onUse((api) => {
  api.use('ecmascript@0.16.8-alpha300.11');

  api.mainModule('server.js', 'server');
  api.addAssets(
    ['browser/phantomjs_script.js', 'browser/playwright_worker.mjs'],
    'server'
  );
});
