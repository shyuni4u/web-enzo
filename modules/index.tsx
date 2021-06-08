import { combineReducers } from 'redux';
import countModule from './count';
import dashboardInfoModule from './dashboardInfo';

const rootReducer = combineReducers({
  countModule,
  dashboardInfoModule
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
