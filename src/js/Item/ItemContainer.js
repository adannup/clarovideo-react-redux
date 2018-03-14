import { connect } from 'react-redux';
import { onClickItemDetail, requestPost } from './ItemAction';
import Item from './Item';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickItemDetail: () => {
    dispatch(requestPost());
    dispatch(onClickItemDetail(ownProps.id));
  },
});

const ItemContainer = connect(undefined, mapDispatchToProps)(Item);

export default ItemContainer;
