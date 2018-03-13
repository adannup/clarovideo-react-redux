import buildAPIUri from './buildAPIUri';

const toJSON = data => data.json();

const fetchData = (uri, params) => fetch(buildAPIUri(uri, params))
  .then(toJSON);

// const fetchData = (url, params) => {
//   const uri = buildAPIUri(url, params);
//   return fetch(uri).then(toJSON);
// };

export default fetchData;
