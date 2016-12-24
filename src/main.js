import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const rootEl = document.getElementById('root');

const renderApp = (Component = App) => {
  ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app', () => renderApp());
}

renderApp();
