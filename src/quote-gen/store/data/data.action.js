import { DATA_ACTION_TYPES } from "./data.types";

export function setCurrentUser(payload) {
  return { type: DATA_ACTION_TYPES.SET_USER, payload };
}
export function setLoading(payload) {
  return { type: DATA_ACTION_TYPES.TOGGLE_LOADING, payload };
}
