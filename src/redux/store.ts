import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "./userReduce";
import agendaReducer from "./newAgenda";

const rootReducer = combineReducers({
  user: userReducer,
  agenda: agendaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
