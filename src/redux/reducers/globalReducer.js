import { CHANGE_TYPE_STORE } from "../types/globalTypes";

const INITIAL_STATE = {
  typeStore: "client",
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TYPE_STORE: {
      return {
        ...state,
        typeStore: action.payload,
        error: "",
      };
    }
    default:
      return state;
  }
};
