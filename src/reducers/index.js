import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';


const appReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
});

const rootReducer = (state, action) => {
  const newState = action.type === 'USER_LOGOUT' ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
