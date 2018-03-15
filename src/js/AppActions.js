import fetchData from './Utils';

const fetchDataGroupsAPI = params => {
  const uri = 'https://mfwkweb-api.clarovideo.net//services/content/list';

  return fetchData(uri, params)
    .then(data => data.response.groups);
};

const requestData = () => ({
  type: 'REQUEST_POSTS',
});

const fetchDataGroups = params => ({
  type: 'RECEIVE_POSTS',
  payload: fetchDataGroupsAPI(params),
});

export {
  requestData,
  fetchDataGroups,
};
