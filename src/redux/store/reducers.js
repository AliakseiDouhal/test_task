import { combineReducers } from 'redux';

import teams from '../modules/teams';
import teamInfo from '../modules/teamInfo';

const rootReducer = combineReducers({
  teams,
  teamInfo,
});

export default rootReducer;
