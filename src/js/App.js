import React, { Component } from 'react';
import { ItemList, ItemDetailsContainer } from './Item';
import FilterSearchContainer from './Filter/FilterSearchContainer';
import fetchData from './Utils';
import Loading from './Load';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.filterSearchState = this.filterSearchState.bind(this);
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
      .then(groups => this.props.fetchDataGroups(groups));
  }

  filterSearchState() {
    let query = this.props.filter.searchQuery;

    if (query !== '') {
      query = query.toLowerCase();
      return this.props.app.groups.filter(group => {
        if (group.title.toLowerCase().indexOf(query) !== -1) {
          return group;
        }
        return false;
      });
    }
    return this.props.app.groups;
  }

  render() {
    console.log('Redux:', this.props);
    return (
      <div>
        {(!this.props.app.isFetching && !this.props.itemDetails.isFetching) ?
          <div>
            {this.props.itemDetails.isOpen ?
              <ItemDetailsContainer
                item={this.props.itemDetails.item}
              /> :
              <div className="container">
                <FilterSearchContainer />
                <div className="mt-3">
                  <ItemList
                    groups={this.filterSearchState()}
                    onClickItemDetail={this.onClickItemDetail}
                  />
                </div>
              </div>
            }
          </div> :
          <Loading />
        }
      </div>
    );
  }
}

export default App;
