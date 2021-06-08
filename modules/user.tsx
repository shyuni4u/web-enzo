import { User } from '@auth0/auth0-spa-js';

export const USER_SET = 'USER_SET';
export const USER_LOGOUT = 'USER_LOGOUT';
export const RANK_GUEST = 9999;

export type userState = User & {
  rank?: number;
  rankname?: string;
};

export const initialState: userState = {
  name: undefined,
  given_name: undefined,
  family_name: undefined,
  middle_name: undefined,
  nickname: undefined,
  preferred_username: undefined,
  profile: undefined,
  picture: undefined,
  website: undefined,
  email: undefined,
  email_verified: undefined,
  gender: undefined,
  birthdate: undefined,
  zoneinfo: undefined,
  locale: undefined,
  phone_number: undefined,
  phone_number_verified: undefined,
  address: undefined,
  updated_at: undefined,
  sub: undefined,
  rank: undefined,
  rankname: undefined
};

export const setUserRank = (recentState: userState) => ({
  type: USER_SET,
  name: recentState.name,
  nickname: recentState.nickname,
  rank: recentState.rank,
  rankname: recentState.rankname
});

export const logout = () => ({
  type: USER_LOGOUT,
  name: undefined,
  nickname: undefined,
  rank: undefined,
  rankname: undefined
});

type actions = {
  type: string;
} & userState;

const reducer = (state: userState = initialState, action: actions): userState | undefined => {
  switch (action.type) {
    case USER_SET: {
      const { name, nickname, rank, rankname } = action;
      return {
        ...state,
        name: name,
        nickname: nickname,
        rank: rank,
        rankname: rankname
      };
    }
    case USER_LOGOUT: {
      const { name, nickname, rank, rankname } = action;
      return {
        ...state,
        name: name,
        nickname: nickname,
        rank: rank,
        rankname: rankname
      };
    }
    default:
      return state;
  }
};

export default reducer;
