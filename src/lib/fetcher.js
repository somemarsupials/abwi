export default async function(route, success, fail, fetcher) {
  fetcher = fetcher || fetch;

  try {
    let response = await fetcher(route);
    return response.ok
      ? success(await response.json())
      : fail(`Got status ${response.status}`);
  } 
  catch (error) {
    return fail(error.message);
  }
};

