import "./daySelector.css";

interface DayItem {
  weekday: string;
  day: number;
  active?: boolean;
}

interface DaySelectorProps {
  days: DayItem[];
  onSelect?: (day: DayItem) => void;
}

export default function DaySelector({ days, onSelect }: DaySelectorProps) {
  return (
    <div className="day-selector">
      {days.map((d) => (
        <div
          key={d.day}
          className={d.active ? "day-item active" : "day-item"}
          onClick={() => onSelect && onSelect(d)}
        >
          <span>{d.weekday}</span>
          <strong>{d.day}</strong>
        </div>
      ))}
    </div>
  );
}
