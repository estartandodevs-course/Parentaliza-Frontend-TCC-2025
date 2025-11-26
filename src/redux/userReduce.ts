import type { UnknownAction } from "redux";

const initialState = {
  name: "Cecília",
  avatarUrl: "",
};

export default function userReducer(
  state = initialState,
  action: UnknownAction
) {
  switch (action.type) {
    default:
      return state;
  }
}
