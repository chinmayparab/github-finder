import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
