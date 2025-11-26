import "./calendarHeader.css";

interface CalendarHeaderProps {
  month: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function CalendarHeader({
  month,
  onPrev,
  onNext,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header">
      <button onClick={onPrev}>‹</button>
      <h2>{month}</h2>
      <button onClick={onNext}>›</button>
    </div>
  );
}
