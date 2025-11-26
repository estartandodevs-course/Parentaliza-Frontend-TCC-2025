import { createSelector } from "@reduxjs/toolkit";
import type { RootState, AgendaItem } from "./types";

export const selectAgendas = (state: RootState) => state.agenda.agendas || [];

export const selectAgendasDoDia = createSelector(
  [selectAgendas, (_: RootState, date: Date) => date],
  (agendas, date): AgendaItem[] => {
    return agendas.filter((item) => {
      const itemDate = new Date(item.data);
      return (
        itemDate.getDate() === date.getDate() &&
        itemDate.getMonth() === date.getMonth() &&
        itemDate.getFullYear() === date.getFullYear()
      );
    });
  }
);
