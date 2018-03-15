import { connect } from 'react-redux';
import { onClickItemDetail, requestPost } from './ItemAction';
import setFilterQuery from '../Filter/FilterSearchAction';
import Item from './Item';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickItemDetail: () => {
    dispatch(requestPost());
    dispatch(setFilterQuery(''));
    dispatch(onClickItemDetail(ownProps.id));
  },
});

const ItemContainer = connect(undefined, mapDispatchToProps)(Item);

export default ItemContainer;
