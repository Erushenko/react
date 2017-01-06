import { render } from 'react-dom';
import React from 'react';

// Import css
import  './styles/app.css';

// Import Components
import App from './components/App';

// import react router deps
import { Provider } from 'react-redux';
import store from './store';


render(
  <Provider store={store}>
    <App>
    </App>
  </Provider>,
  document.getElementById('root')
);
