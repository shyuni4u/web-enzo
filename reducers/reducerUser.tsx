import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { setUserRank, logout, userState } from '../modules/user';

const reducerUser = () => {
  const dispatch = useDispatch();

  const gUser = {
    get: useSelector((state: RootState) => state.userModule),
    set: useCallback((values: userState) => dispatch(setUserRank(values)), [dispatch]),
    logout: useCallback(() => dispatch(logout()), [dispatch])
  };

  return {
    gUser
  };
};

export default reducerUser;
