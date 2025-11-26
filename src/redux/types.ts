export interface AgendaItem {
  id: string;
  evento: string;
  especialidade: string;
  local: string;
  horario: string;
  anotacoes: string;
  data: Date; // data do evento
}

export interface AgendaState {
  agendas: AgendaItem[];
}

export interface RootState {
  agenda: AgendaState;
}
