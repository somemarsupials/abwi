import { buildApiClient } from '../../../lib';

describe('buildApiClient', () => {
  let client, builder, nest;

  beforeEach(() => {
    nest = jest.fn();
    builder = (name, api) => ({ name: name, api: api, nest: nest });
    client = buildApiClient('api', builder);
  });

  it('generates projects', () => {
    expect(client.projects)
      .toEqual({ name: 'projects', api: 'api', nest: nest });
  });

  it('generates clients', () => {
    expect(client.clients)
      .toEqual({ name: 'clients', api: 'api', nest: nest });
  });

  it('nests items', () => {
    expect(client.projects.nest).toHaveBeenCalledWith(
      { name: 'items', api: 'api', nest: nest }, 
      'items'
    );
  });
});
