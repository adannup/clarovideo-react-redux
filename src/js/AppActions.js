const requestData = () => ({
  type: 'REQUEST_POSTS',
});

const fetchDataGroups = groups => ({
  type: 'RECEIVE_POSTS',
  payload: new Promise(resolve => resolve(groups)),
});

export {
  requestData,
  fetchDataGroups,
};
