import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FilterSearch = ({ onChangeSearch }) => (
  <form className="form__container">
    <input type="search" className="input__search" placeholder="Buscar" onChange={onChangeSearch} />
  </form>
);

FilterSearch.propTypes = {
  onChangeSearch: PropTypes.func.isRequired,
};

export default FilterSearch;
