Package.describe({
  summary: "Fast n-dimensional filtering and grouping of records."
});


Package.on_use(function (api, where) {
  Npm.depends({
       'crossfilter': '1.3.7' // Where x.x.x is the version, e.g. 0.3.2
  });
  api.add_files('crossfilter.js', ['client', 'server']);
  api.export('crossfilter');
});