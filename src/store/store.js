import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];
// if (window.navigator.userAgent.includes('Chrome')) {
//   var store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// } else {
//   var store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//     )
//   );
  
// }

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;