Package.describe({
  summary: "Fast n-dimensional filtering and grouping of records."
});

Npm.depends({
    'crossfilter': '1.3.7' // Where x.x.x is the version, e.g. 0.3.2
});

Package.on_use(function (api, where) {
  api.add_files('crossfilter.js', ['client', 'server']);
  api.export('crossfilter');
});