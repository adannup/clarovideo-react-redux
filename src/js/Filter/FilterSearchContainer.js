import { connect } from 'react-redux';
import setFilterQuery from './FilterSearchAction';
import FilterSearch from './FilterSearch';

const mapDispatchToProps = dispatch => ({
  onFilterSearch: query => dispatch(setFilterQuery(query)),
});

const FilterSearchContainer = connect(undefined, mapDispatchToProps)(FilterSearch);

export default FilterSearchContainer;
