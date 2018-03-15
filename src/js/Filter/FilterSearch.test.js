import React from 'react';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import FilterSearchContainer from './FilterSearchContainer';

it('render without crashing', () => {
  render(<Provider store={store}><FilterSearchContainer /></Provider>);
});
