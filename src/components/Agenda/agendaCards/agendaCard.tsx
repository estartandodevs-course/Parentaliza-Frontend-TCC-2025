import "./AgendaCard.css";
import type { AgendaItem } from "../../../redux/types";

interface AgendaCardProps {
  item: AgendaItem;
  pinned?: boolean; // para fixar no topo, opcional
}

export default function AgendaCard({ item, pinned = false }: AgendaCardProps) {
  return (
    <div className={`agenda-card ${pinned ? "pinned" : ""}`}>
      <h3>{item.evento}</h3>
      {item.especialidade && <p>{item.especialidade}</p>}
      {item.local && <p>{item.local}</p>}
      {item.horario && <span className="time">{item.horario}</span>}
      {item.anotacoes && <p className="notes">{item.anotacoes}</p>}
    </div>
  );
}
