// In the development environment, i.e. Node.js, the fetch API is
// not defined. Import a polyfill to make up for it.

let fetch = fetch || require('node-fetch').fetch;

export class FetchHelper {
  constructor(path, api, fetcher = fetch) {
    this._path = path;
    this._api = api;
    this._fetcher = fetcher;
  };

  setPath(path) {
    this._path = path;
  };

  getPath(path) {
    return this._path;
  };

  hasIds(ids) {
    return ids.length === this._path.length - 1;
  };

  hasTrailingIds(ids) {
    return ids.length === this._path.length;
  };

  buildRoute(ids) {
    let components = [this._api];

    this._path.forEach(function(path, index) {
      components.push(path);
      if (ids[index]) {
        components.push(ids[index]);
      };
    });

    return components.join('/');
  };

  fetch(ids, params = {}) {
    return this._fetcher(this.buildRoute(ids), params);
  };
};

export function buildFetchHelper(path, api) {
  return new FetchHelper(path, api);
};
