import "./CalendarHeader.css";

interface CalendarHeaderProps {
  month: string;
  year: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function CalendarHeader({
  month,
  year,
  onPrev,
  onNext,
}: CalendarHeaderProps) {
  return (
    <div className="calendar-header">
      <button onClick={onPrev}>{"<"}</button>

      <h3>
        {month} {year}
      </h3>

      <button onClick={onNext}>{">"}</button>
    </div>
  );
}
