import { connect } from 'react-redux';
import { fetchDataGroups, requestData } from './AppActions';
import App from './App';

const mapStateToProps = state => ({
  app: state.app,
  itemDetails: state.itemDetails,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetchDataGroups: groups => {
    dispatch(requestData());
    dispatch(fetchDataGroups(groups));
  },
  requestData: () => dispatch(requestData()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
