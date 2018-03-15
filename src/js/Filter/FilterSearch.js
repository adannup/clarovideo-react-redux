import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class FilterSearch extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(e) {
    this.props.onFilterSearch(e.target.value);
  }

  render() {
    return (
      <form className="form__container">
        <input type="search" className="input__search" placeholder="Buscar" onChange={this.onChangeSearch} />
      </form>
    );
  }
}

FilterSearch.propTypes = {
  onFilterSearch: PropTypes.func.isRequired,
};

export default FilterSearch;
