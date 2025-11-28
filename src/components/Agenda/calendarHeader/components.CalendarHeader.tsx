import "./calendarHeader.css";

interface CalendarHeaderProps {
  month: string;
  onPrev?: () => void;
  onNext?: () => void;
  onTitleClick?: () => void;
}

export default function CalendarHeader({
  month,
  onPrev,
  onNext,
  onTitleClick,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header">
      <button onClick={onPrev} aria-label="Anterior">‹</button>
      <h2 onClick={onTitleClick} role="button" tabIndex={0}>
        {month}
      </h2>
      <button onClick={onNext} aria-label="Próximo">›</button>
    </div>
  );
}
