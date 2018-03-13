import React from 'react';
import PropTypes from 'prop-types';

const FilterSearch = ({ onChangeSearch }) => (
  <form>
    <input type="search" placeholder="Buscar" onChange={onChangeSearch} />
  </form>
);

FilterSearch.propTypes = {
  onChangeSearch: PropTypes.func.isRequired,
};

export default FilterSearch;
