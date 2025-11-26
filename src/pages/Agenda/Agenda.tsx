import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAgendasDoDia } from "../../redux/agendaSelector";
import type { AgendaItem, RootState } from "../../redux/types";

import "./Agenda.css";

import CalendarHeader from "../../components/Agenda/calendarHeader/components.CalendarHeader";
import DaySelector, {
  type DayItem,
} from "../../components/Agenda/daySelector/components.DaySelector";
import BottomNav from "../../components/components.bottomNav/bottomNav";
import AddButton from "../../components/Agenda/buttonAdd/buttonAdd";
import AgendaCard from "../../components/Agenda/agendaCards/agendaCard";
import { useNavigate } from "react-router-dom";

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function Agenda() {
  const navigate = useNavigate();
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [activeDay, setActiveDay] = useState(today.getDate());

  const generateDays = (): DayItem[] => {
    const date = new Date(year, month + 1, 0);
    const totalDays = date.getDate();
    return Array.from({ length: totalDays }, (_, i) => {
      const dayNumber = i + 1;
      const fullDate = new Date(year, month, dayNumber);
      return { date: fullDate, active: dayNumber === activeDay };
    });
  };

  const [days, setDays] = useState<DayItem[]>(generateDays());

  const updateDays = () => {
    const newDays = generateDays();
    setDays(newDays);
    if (activeDay > newDays.length) setActiveDay(1);
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear((y) => y - 1);
      setMonth(11);
    } else setMonth((m) => m - 1);
    setTimeout(updateDays, 0);
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear((y) => y + 1);
      setMonth(0);
    } else setMonth((m) => m + 1);
    setTimeout(updateDays, 0);
  };

  const handleSelectDay = (dayItem: DayItem) => {
    setActiveDay(dayItem.date.getDate());
    setDays((prevDays) =>
      prevDays.map((d) => ({
        ...d,
        active: d.date.getTime() === dayItem.date.getTime(),
      }))
    );
  };

  const todayDate = new Date(year, month, activeDay);

  const agendasDoDia: AgendaItem[] = useSelector((state: RootState) =>
    selectAgendasDoDia(state, todayDate)
  );

  return (
    <div className="agenda-container">
      <CalendarHeader
        month={monthNames[month]}
        year={year}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />

      <DaySelector days={days} onSelect={handleSelectDay} />

      <div className="agenda-list">
        <h3>
          Compromissos do dia {activeDay}/{month + 1}/{year}
        </h3>

        {agendasDoDia.length === 0 ? (
          <p className="sem-agenda">Nenhum compromisso neste dia.</p>
        ) : (
          agendasDoDia.map((item, index) => (
            <AgendaCard
              key={item.id}
              item={item}
              pinned={index === 0} // opcional: primeiro item do dia destacado
            />
          ))
        )}
      </div>

      <AddButton onClick={() => navigate("/agenda/novo")} />
      <BottomNav />
    </div>
  );
}
