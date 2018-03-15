import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class FilterSearch extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.timeWait = 0;
  }

  onChangeSearch(e) {
    clearTimeout(this.timeWait);
    const { value } = e.target;

    this.timeWait = setTimeout(() => {
      this.props.onFilterSearch(value);
    }, 800);
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
