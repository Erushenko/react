import { combineReducers } from 'redux';

import weekHours from './weekHours';
import selectAllDay from './selectAllDay';

const rootReducer = combineReducers({weekHours, selectAllDay});

export default rootReducer;
