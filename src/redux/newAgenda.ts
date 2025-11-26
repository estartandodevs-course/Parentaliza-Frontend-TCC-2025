import type { AgendaItem, AgendaState } from "./types";

const initialState: AgendaState = { agendas: [] };

interface AddAgendaAction {
  type: "ADD_AGENDA";
  payload: AgendaItem;
}

type AgendaActions = AddAgendaAction;

export default function agendaReducer(
  state: AgendaState = initialState,
  action: AgendaActions
): AgendaState {
  switch (action.type) {
    case "ADD_AGENDA":
      return { ...state, agendas: [...state.agendas, action.payload] };
    default:
      return state;
  }
}
