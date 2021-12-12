export const buildQuery = (url, config) => {
  Object.entries(config).map((entry, index, entries) => {
    const [param, value] = entry;
    if (index === 0) {
      url += '?';
    }
    if (param !== 'symbol') {
      let str = `${param}=${value}`;
      if (entries.length - 1 !== index) {
        str += '&';
      }
      url += str;
    }
  });
  return url;
};
