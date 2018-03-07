import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';                                                                           
import { Provider } from 'react-redux';                                                                        
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));                                                                         
window.store = store;
                                                                                                               
ReactDOM.render(                                                                                               
  <Provider store={store}>                                                                                     
    <App />                                                                                                    
  </Provider>,                                                                                                 
  document.getElementById('root')                                                                              
);

registerServiceWorker();
