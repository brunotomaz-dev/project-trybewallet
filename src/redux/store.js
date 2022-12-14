import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

// configure aqui sua store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

if (window.Cypress) {
  window.store = store;
} // para uso dos testes

export default store;
