import { connect } from 'react-redux';
import ItemDetails from './ItemDetails';
import { onCloseItemDetail } from './ItemAction';

const mapDispatchToProps = dispatch => ({
  onCloseItemDetails: () => dispatch(onCloseItemDetail()),
});

const mapStateToProps = state => ({
  item: state.itemDetails.item,
});

const ItemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetails);

export default ItemDetailsContainer;
