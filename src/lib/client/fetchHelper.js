import axios from 'axios';

export class FetchHelper {
  constructor(path, api, fetcher = axios) {
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

  hasIds(ids = []) {
    return ids.length === this._path.length - 1;
  };

  hasTrailingIds(ids = []) {
    return ids && ids.length === this._path.length;
  };

  buildRoute(ids, query) {
    let components = [this._api];

    this._path.forEach(function(path, index) {
      components.push(path);
      if (ids[index]) {
        components.push(ids[index]);
      };
    });

    return components.join('/') + this._buildQuery(query);
  };

  fetch(ids = [], query = {}, params = {}) {
    let url = this.buildRoute(ids, query);

    Object.assign(params, {
      url: url
    });

    return this._fetcher(params);
  };

  _buildQuery(query) {
    if (!query || Object.keys(query).length === 0) {
      return ''
    };

    let parameters = Object.keys(query).map(function(key) {
      return `${key}=${query[key]}`;
    });

    return '?' + parameters.join('&');
  };
};

export function buildFetchHelper(path, api) {
  return new FetchHelper(path, api);
};
