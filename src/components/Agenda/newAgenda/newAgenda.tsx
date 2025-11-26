import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./newAgenda.css";
import BottomNav from "../../components.bottomNav/bottomNav";

export default function NewAgenda() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    evento: "",
    especialidade: "",
    local: "",
    horario: "",
    anotacoes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch({
      type: "ADD_AGENDA",
      payload: {
        id: String(Date.now()),
        ...form,
      },
    });

    navigate("/agenda");
  }

  return (
    <div className="new-agenda-container">
      <h2 className="page-title">Nova Agenda</h2>

      <form className="agenda-form" onSubmit={handleSubmit}>
        <label>
          Evento
          <input
            name="evento"
            type="text"
            placeholder="Ex: Consulta Dr. Catarina"
            value={form.evento}
            onChange={handleChange}
          />
        </label>

        <label>
          Especialidade
          <input
            name="especialidade"
            type="text"
            placeholder="Ex: Cardiologia"
            value={form.especialidade}
            onChange={handleChange}
          />
        </label>

        <label>
          Localização
          <input
            name="local"
            type="text"
            placeholder="Ex: Hospital Pequeno Príncipe"
            value={form.local}
            onChange={handleChange}
          />
        </label>

        <label>
          Horário
          <input
            name="horario"
            type="time"
            value={form.horario}
            onChange={handleChange}
          />
        </label>

        <label>
          Anotações
          <textarea
            name="anotacoes"
            placeholder="Ex: Levar exames anteriores"
            value={form.anotacoes}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit" className="save-btn">
          Salvar
        </button>
      </form>

      <BottomNav />
    </div>
  );
}

export interface AgendaItem {
  id: string | number;
  evento: string;
  data?: string | Date;
  horario?: string;
  local?: string;
  especialidade?: string;
  anotacoes?: string;
}

export interface AgendaState {
  agendas: AgendaItem[];
}

export interface RootState {
  agenda: AgendaState;
}
