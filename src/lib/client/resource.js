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

  index(...ids) {
    if (!this._helper.hasIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids);
  };

  show(...ids) {
    if (!this._helper.hasTrailingIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids);
  };

  create(params, ...ids) {
    if (!this._helper.hasIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids, {
      method: 'post',
      body: JSON.stringify(params),
    });
  };

  update(params, ...ids) {
    if (!this._helper.hasTrailingIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids, {
      method: 'patch',
      body: JSON.stringify(params),
    });
  };

  delete(...ids) {
    if (!this._helper.hasTrailingIds(ids)) {
      this.idError();
    };
    return this._helper.fetch(ids, {
      method: 'delete',
    });
  };

  _idError() {
    throw new Error('incorrect number of IDs');
  };
};

export function buildResource(path, api, helperBuilder = buildFetchHelper) {
  return new Resource(buildFetchHelper([path], api));
};
