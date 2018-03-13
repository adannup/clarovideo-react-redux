import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReduxApp from './ReduxApp';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(ReduxApp);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./ReduxApp', () => render(ReduxApp));
}
