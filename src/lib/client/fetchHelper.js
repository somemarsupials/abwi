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

  _isOk(response) {
    return response.ok === true || response.statusText === 'OK';
  };

  buildRoute(params) {
    let components = [this._api];
    let ids = params.ids || [];

    this._path.forEach(function(path, index) {
      components.push(path);
      if (ids[index]) {
        components.push(ids[index]);
      };
    });

    return components.join('/');
  };

  async fetch(params) {
    let url = this.buildRoute(params);

    Object.assign(params, {
      url: url
    });

    let response, error;

    try {
      response = await this._fetcher(params);
    }
    catch (e) {
      error = e.message;
      response = {};
    };

    return {
      error: error || (!this._isOk(response) && response.status),
      data: response.data || response.status,
    };
  };
};

export function buildFetchHelper(path, api) {
  return new FetchHelper(path, api);
};
