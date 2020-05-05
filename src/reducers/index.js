import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';


const mainReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

export default mainReducer;
