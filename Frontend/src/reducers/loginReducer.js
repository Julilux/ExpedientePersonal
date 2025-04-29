import { types } from "../types/types";

const initialState = {
  usuario: null,
  error: null,
  isAuthenticated: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginSuccess:
      return {
        ...state,
        usuario: action.payload,
        error: null,
        isAuthenticated: true,
      };

    case types.loginFailure:
      return {
        ...state,
        usuario: null,
        error: action.payload,
        isAuthenticated: false,
      };

    case types.logout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};