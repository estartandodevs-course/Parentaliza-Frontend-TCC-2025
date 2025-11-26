import { useState } from "react";
import "./Agenda.css";

import CalendarHeader from "../../components/Agenda/calendarHeader/components.CalendarHeader";
import DaySelector from "../../components/Agenda/daySelector/components.DaySelector";

import BottomNav from "../../components/components.bottomNav/bottomNav";
import AddButton from "../../components/Agenda/buttonAdd/buttonAdd";
import { useNavigate } from "react-router-dom";

// Lista dos meses
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

  // Estado do mês e ano atual
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth()); // 0–11
  const [year, setYear] = useState(today.getFullYear());

  // Função para gerar os dias do mês automaticamente
  const generateDays = () => {
    const date = new Date(year, month + 1, 0); // último dia do mês
    const totalDays = date.getDate();

    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    return Array.from({ length: totalDays }, (_, i) => {
      const dayNumber = i + 1;
      const weekday = weekdays[new Date(year, month, dayNumber).getDay()];

      return { weekday, day: dayNumber };
    });
  };

  const [days, setDays] = useState(generateDays());
  const [activeDay, setActiveDay] = useState(today.getDate());

  // Atualiza os dias sempre que o mês mudar
  const updateDays = () => {
    const newDays = generateDays();
    setDays(newDays);

    // se o dia ativo não existir no novo mês, define como 1
    if (activeDay > newDays.length) {
      setActiveDay(1);
    }
  };

  // Ir para mês anterior
  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
    setTimeout(updateDays, 0);
  };

  // Ir para próximo mês
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
    setTimeout(updateDays, 0);
  };

  // Quando clicar em um dia
  const handleSelectDay = (dayItem: { day: number }) => {
    setActiveDay(dayItem.day);
  };

  return (
    <div className="agenda-container">
      <CalendarHeader
        month={monthNames[month]}
        year={year}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />

      <DaySelector
        days={days.map((d) => ({ ...d, active: d.day === activeDay }))}
        onSelect={handleSelectDay}
      />

      <div className="agenda-list">
        <p>
          Dia selecionado: {activeDay}/{month + 1}/{year}
        </p>
      </div>

      <AddButton onClick={() => navigate("/agenda/criar")} />

      <BottomNav />
    </div>
  );
}
