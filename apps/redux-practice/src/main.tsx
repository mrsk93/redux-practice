import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import store from './redux/store';
// import store from '@redux-practice/shared';
import { Provider } from 'react-redux';

import App from './app/app';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
