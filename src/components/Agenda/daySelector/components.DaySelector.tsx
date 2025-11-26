import { useState } from "react";
import "./daySelector.css";

// 🔹 Exporta a interface DayItem para usar em outros arquivos
export interface DayItem {
  date: Date;
  active?: boolean;
}

interface DaySelectorProps {
  days: DayItem[];
  onSelect: (day: DayItem) => void;
}

export default function DaySelector({ days, onSelect }: DaySelectorProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="day-selector-container">
      <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "▲ Recolher" : "▼ Mostrar mês"}
      </button>

      <div className={`day-selector ${expanded ? "expanded" : "collapsed"}`}>
        {days.map((d, index) => {
          if (!d?.date) return null;

          const safeDate = new Date(d.date);
          const weekday = safeDate.toLocaleDateString("pt-BR", {
            weekday: "short",
          });
          const dayNum = safeDate.getDate();

          return (
            <div
              key={index}
              className={`day-item ${d.active ? "active" : ""}`}
              onClick={() => onSelect(d)}
            >
              {!expanded && <span className="weekday">{weekday}</span>}
              <strong className="daynum">{dayNum}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}
