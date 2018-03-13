import React, { Component } from 'react';
import { ItemList } from './Item';
import fetchData from './Utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groups: [],
    };

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
      .then(groups => this.setState({
        groups,
      }));
  }

  filterSearchState(query = '') {
    if (query !== '') {
      const queryLower = query.toLowerCase();
      return this.state.groups.filter(group => {
        if (group.title.toLowerCase().indexOf(queryLower) !== -1) {
          return group;
        }
        return false;
      });
    }
    return this.state.groups;
  }

  render() {
    return (
      <div className="App">
        <ItemList
          groups={this.filterSearchState()}
        />
      </div>
    );
  }
}

export default App;
