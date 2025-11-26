import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "./userReduce";

const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
