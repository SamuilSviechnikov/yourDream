import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';
import configFb from './config/configFb';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(configFb, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(configFb) // redux bindings for firestore
  )
);
const app = <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(app, document.getElementById('root'));
  serviceWorker.unregister();
  
});