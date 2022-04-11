export const convertQueryURLToObject = (queryString) => {
  try {
    var search = queryString;
    return JSON.parse(
      '{"' +
        decodeURI(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
  } catch (err) {
    return {};
  }
};

export const changeQueryURL = (data) => {
  return "?" + new URLSearchParams(data).toString();
};
