const esc = component => encodeURIComponent(component);

// Join every param from array with &
const paramsToqs = params =>
  Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');

// Join the url with qs
const joinUrlToqs = (uri, qs) => {
  if (qs.length > 0) {
    return `${uri}?${qs}`;
  }
  return uri;
};

const buildAPIUri = (uri, params = {}) => {
  const qs = paramsToqs(params);
  return joinUrlToqs(uri, qs);
};

export default buildAPIUri;
