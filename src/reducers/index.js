import { combineReducers } from "redux";

import readingsReducer from './readings_reducer';
import countReducer from './count_reducer';

const rootReducer = combineReducers({
  readings: readingsReducer,
  countOfActive: countReducer
});

export default rootReducer;