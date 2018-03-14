import { connect } from 'react-redux';
import { onClickItemDetail } from './ItemAction';
import Item from './Item';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickItemDetail: () => dispatch(onClickItemDetail(ownProps.id)),
});

const ItemContainer = connect(undefined, mapDispatchToProps)(Item);

export default ItemContainer;
