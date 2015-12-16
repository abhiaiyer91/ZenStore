Package.describe({
  name: 'zenflux:store',
  version: '0.0.3',
  summary: 'A Class for Managing State on the Client',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'underscore',
    'check',
    'mongo'
  ]);
  api.addFiles([
    'src/client/procedure.js',
    'src/client/store.js'
  ], ['client']);

  api.export('ZenStore', 'ZenProcess');
});
