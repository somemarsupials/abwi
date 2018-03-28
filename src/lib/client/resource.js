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

  index(params = {}) {
    if (!this._helper.hasIds(params.ids)) {
      this._idError();
    };
    return this._helper.fetch(params);
  };

  show(params = {}) {
    if (!this._helper.hasTrailingIds(params.ids)) {
      this._idError();
    };
    return this._helper.fetch(params);
  };

  create(params = {}) {
    if (!this._helper.hasIds(params.ids)) {
      this._idError();
    };

    Object.assign(params, {
      method: 'post',
      data: params.data,
    });

    return this._helper.fetch(params);
  };

  update(params = {}) {
    if (!this._helper.hasTrailingIds(params.ids)) {
      this._idError();
    };

    Object.assign(params, {
      method: 'patch',
      data: params.data,
    });

    return this._helper.fetch(params);
  };

  delete(params = {}) {
    if (!this._helper.hasTrailingIds(params.ids)) {
      this._idError();
    };

    Object.assign(params, {
      method: 'delete',
    });

    return this._helper.fetch(params);
  };

  _idError() {
    throw new Error('incorrect number of IDs');
  };
};

export function buildResource(path, api, helperBuilder = buildFetchHelper) {
  return new Resource(buildFetchHelper([path], api));
};
