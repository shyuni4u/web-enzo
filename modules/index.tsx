import { combineReducers } from 'redux';
import countModule from './count';
import dashboardInfoModule from './dashboardInfo';
import userModule from './user';

const rootReducer = combineReducers({
  userModule,
  countModule,
  dashboardInfoModule
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
