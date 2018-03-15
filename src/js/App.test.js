import React from 'react';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './AppContainer';

it('render without crashing', () => {
  render(<Provider store={store}><AppContainer /></Provider>);
});

// Issue: Falta agregar jest para request API [Test FAIL]
