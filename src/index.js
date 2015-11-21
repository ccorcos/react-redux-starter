// Create a global redux store
import {createStore} from 'redux';
import reducer from 'src/redux/reducer.js';
const store = createStore(reducer);

// define the routes and the top-level pages
import React from 'react';
import {Router, IndexRoute, Route} from 'react-router';
import App from 'src/views/app.js'
import Layout from 'src/views/layout.js'

// Provide the state and the dispatch method as props
// to the top level component route components.
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={Layout}>
        <IndexRoute component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);


// https://github.com/gaearon/redux-devtools
// import { devTools, persistState } from 'redux-devtools';
// // React components for Redux DevTools
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// https://www.npmjs.com/package/redux-logger
// https://github.com/gaearon/redux-thunk
