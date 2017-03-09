import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// require('normalize.css/normalize.css');

// Render the main component into the dom
const render = (Component) => {
ReactDOM.render(<Component />, document.getElementById('app'));
}

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}