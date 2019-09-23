import authReducer from './authReducer'
import projectReducer from './projectReducer'
import orderReducer from './orderReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  order: orderReducer
});

export default rootReducer