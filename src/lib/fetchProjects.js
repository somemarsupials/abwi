export default async function(api, success, fail, fetcher) {
  fetcher = fetcher || fetch;

  try {
    let response = await fetcher(`${api}/project`);
    return response.ok
      ? success(await response.json())
      : fail(`Got status ${response.status}`);
  } 
  catch (error) {
    return fail(error.message);
  }
};

