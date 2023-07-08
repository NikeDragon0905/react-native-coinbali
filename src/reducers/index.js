import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import authReducer from './authReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  notification: notificationReducer
});

export default rootReducer;
