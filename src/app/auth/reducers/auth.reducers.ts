import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export interface State {
  isAuthed?: boolean;
  access_token?: string;
}

export function auth(state: State = {}, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return {
        ...state,
        isAuthed: true,
        access_token: action.payload.access_token,
      };
    }

    case AuthActionTypes.Logout: {
      return {
        ...state,
        isAuthed: false,
        access_token: null,
      };
    }

    default: {
      return state;
    }
  }
}

export const getAuth = (s: any) => s.auth;
export const getIsAuthed = (s: State) => getAuth(s).isAuthed;
export const getAccessToken = (s: State) => getAuth(s).access_token;
