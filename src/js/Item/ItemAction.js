import fetchData from '../Utils';

const fetchItemDetail = id => {
  const uri = 'https://mfwkweb-api.clarovideo.net/services/content/data';
  const params = {
    api_version: 'v5.8',
    authpn: 'webclient',
    authpt: 'tfg1h3j4k6fd7',
    format: 'json',
    region: 'mexico',
    device_id: 'web',
    device_category: 'web',
    device_model: 'web',
    device_type: 'web',
    device_manufacturer: 'generic',
    HKS: 'rd1krvbh4b86eajtjargfvj4k3',
    group_id: id,
  };

  return fetchData(uri, params)
    .then(data => data.response.group.common);
};

const onCloseItemDetail = () => ({
  type: 'CLOSE_ITEM_DETAILS',
});

const onClickItemDetail = itemId => ({
  type: 'TOGGLE_ITEM_DETAILS',
  payload: fetchItemDetail(itemId),
});

export {
  onCloseItemDetail,
  onClickItemDetail,
};
