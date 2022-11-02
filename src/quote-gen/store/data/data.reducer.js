import { DATA_ACTION_TYPES } from "./data.types";

const initialState = {
  user: null,
  loading: true,
  color: "",
};
export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DATA_ACTION_TYPES.SET_USER:
      return { ...state, ...payload };
    case DATA_ACTION_TYPES.TOGGLE_LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
}
