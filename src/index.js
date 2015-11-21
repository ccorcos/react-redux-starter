// Create a global redux store
import React from 'react';
import { devTools, persistState } from 'redux-devtools';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from 'src/redux/reducer.js';
import R from 'ramda'

import createLogger from 'redux-logger';

const store = R.compose(
  applyMiddleware(createLogger(), thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)(reducer);

// debugger tools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';
import {TestMonitor} from 'redux-devtools-gentest-plugin';

const monitor = (
  <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
  </DebugPanel>
)

// const monitor = (
//   <DebugPanel left right bottom>
//     <DevTools store={store} monitor={SliderMonitor} />
//   </DebugPanel>
// )

// const monitor = (
//   <DebugPanel top left bottom>
//     <DevTools store={store} monitor={TestMonitor}/>
//   </DebugPanel>
// )

// we'll need this at some point: https://github.com/gajus/redux-immutable
// another routing option: https://github.com/callum/redux-routing
// use the chrome extension! https://github.com/zalmoxisus/redux-devtools-extension

import 'src/styles/main.scss'

// define the routes and the top-level pages
import {Router, IndexRoute, Route} from 'react-router';
import Todos from 'src/views/todos.js'
import Giphy from 'src/views/giphy.js'
import Layout from 'src/views/layout.js'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <Route path="/" component={Layout}>
          <IndexRoute component={Todos}/>
          <Route path="giphy" component={Giphy}/>
        </Route>
      </Router>
    </Provider>
    {monitor}
  </div>,
  document.getElementById('app')
);


// https://github.com/gaearon/redux-devtools
// import { devTools, persistState } from 'redux-devtools';
// // React components for Redux DevTools
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// https://www.npmjs.com/package/redux-logger
// https://github.com/gaearon/redux-thunk
