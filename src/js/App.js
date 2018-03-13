import React, { Component } from 'react';
import { ItemList, ItemDetails } from './Item';
import FilterSearch from './Filter/FilterSearch';
import fetchData from './Utils';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groups: [],
      searchQuery: '',
      itemDetails: {
        isOpen: false,
        item: {},
      },
    };

    this.filterSearchState = this.filterSearchState.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onClickItemDetail = this.onClickItemDetail.bind(this);
    this.onCloseItemDetails = this.onCloseItemDetails.bind(this);
  }

  componentWillMount() {
    const uri = 'https://mfwkweb-api.clarovideo.net//services/content/list';
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
      HKS: '81oetujebaifa3frd7011k7926',
      quantity: '40',
      order_way: 'DESC',
      order_id: '200',
      level_id: 'GPS',
      from: '0',
      node_id: '9869',
    };

    fetchData(uri, params)
      .then(data => data.response.groups)
      .then(groups => this.setState({
        groups,
      }));
  }

  onChangeSearch(e) {
    this.setState({
      searchQuery: e.target.value,
    });
  }

  onClickItemDetail(id) {
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

    fetchData(uri, params)
      .then(data => data.response.group.common)
      .then(item => this.setState({
        itemDetails: {
          isOpen: true,
          item,
        },
      }));
  }

  onCloseItemDetails() {
    this.setState({
      itemDetails: {
        isOpen: false,
        item: {},
      },
    });
  }

  filterSearchState() {
    let query = this.state.searchQuery;

    if (query !== '') {
      query = query.toLowerCase();
      return this.state.groups.filter(group => {
        if (group.title.toLowerCase().indexOf(query) !== -1) {
          return group;
        }
        return false;
      });
    }
    return this.state.groups;
  }

  render() {
    return (
      <div>
        {this.state.itemDetails.isOpen ?
          <ItemDetails
            item={this.state.itemDetails.item}
            onCloseItemDetails={this.onCloseItemDetails}
          /> :
          <div className="container">
            <FilterSearch
              onFormSubmit={this.onFormSubmit}
              onChangeSearch={this.onChangeSearch}
            />
            <div className="mt-3">
              <ItemList
                groups={this.filterSearchState()}
                onClickItemDetail={this.onClickItemDetail}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
