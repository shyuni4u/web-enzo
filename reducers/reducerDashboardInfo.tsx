import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { dashboardInfoState, setDashboardIfno } from '../modules/dashboardInfo';

const reducerDashboardInfo = () => {
  const dispatch = useDispatch();

  const dashboardInfo = {
    get: useSelector((state: RootState) => state.dashboardInfoModule),
    set: useCallback(
      (value: dashboardInfoState) => dispatch(setDashboardIfno(value)),
      [dispatch]
    )
  };

  return {
    dashboardInfo
  };
};

export default reducerDashboardInfo;
