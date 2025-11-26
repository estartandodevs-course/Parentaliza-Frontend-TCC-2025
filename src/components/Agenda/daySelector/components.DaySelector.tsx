import "./daySelector.css";

interface DayItem {
  date: Date;
  active?: boolean;
}

interface DaySelectorProps {
  days: DayItem[];
  expanded: boolean;
  onSelect: (day: DayItem) => void;
  onToggleExpand: () => void;
}

export default function DaySelector({
  days,
  expanded,
  onSelect,
  onToggleExpand,
}: DaySelectorProps) {
  return (
    <div className="day-selector-container">
      {/* Botão Expandir/Recolher */}
      <button className="toggle-btn" onClick={onToggleExpand}>
        {expanded ? "▲ Recolher" : "▼ Mostrar mês"}
      </button>

      <div className={`day-selector ${expanded ? "expanded" : "collapsed"}`}>
        {days.map((d, index) => {
          // 🔒 Proteção caso algum item venha com `date` undefined
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
