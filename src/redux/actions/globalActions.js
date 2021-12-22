import {
  CHANGE_STORE_CLIENT,
  CHANGE_STORE_ADMIN,
  CHANGE_TYPE_STORE,
} from "../types/globalTypes";

export const changeTypeStoreAction = (typeStore) => (dispatch) => {
  dispatch({
    type: CHANGE_TYPE_STORE,
    payload: typeStore,
  });
};
