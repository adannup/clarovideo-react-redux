import { connect } from 'react-redux';
import ItemDetails from './ItemDetails';
import { onCloseItemDetail } from './ItemAction';

const mapDispatchToProps = dispatch => ({
  onCloseItemDetails: () => dispatch(onCloseItemDetail()),
});

const ItemDetailsContainer = connect(undefined, mapDispatchToProps)(ItemDetails);

export default ItemDetailsContainer;
