import { buildFetchHelper } from './fetchHelper';

export class Resource {
  constructor(fetchHelper) {
    this._helper = fetchHelper;
  };

  // paths and nesting

  setPath(path) {
    this._helper.setPath(path);
  };

  getPath(path) {
    return this._helper.getPath(path);
  };

  nest(child, nestAs) {
    child.setPath(this.getPath().concat(child.getPath()));
    this[nestAs] = child;
  };

  // requests

  index(ids, query, params) {
    if (!this._helper.hasIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids, query, params);
  };

  show(ids, query, params) {
    if (!this._helper.hasTrailingIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids, query, params);
  };

  create(ids, query, params) {
    if (!this._helper.hasIds(ids)) {
      this.idError();
    };

    Object.assign(params, {
      method: 'post',
      body: JSON.stringify(params.body),
    });

    return this._helper.fetch(ids, query, params);
  };

  update(ids, query, params) {
    if (!this._helper.hasTrailingIds(ids)) {
      this.idError();
    };

    Object.assign(params, {
      method: 'patch',
      body: JSON.stringify(params.body),
    });

    return this._helper.fetch(ids, query, params);
  };

  delete(ids, query, params) {
    if (!this._helper.hasTrailingIds(ids)) {
      this.idError();
    };

    Object.assign(params, {
      method: 'delete',
    });

    return this._helper.fetch(ids, query, params);
  };

  _idError() {
    throw new Error('incorrect number of IDs');
  };
};

export function buildResource(path, api, helperBuilder = buildFetchHelper) {
  return new Resource(buildFetchHelper([path], api));
};
