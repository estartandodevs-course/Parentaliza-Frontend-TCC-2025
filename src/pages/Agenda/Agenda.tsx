import { useState } from "react";
import "./Agenda.css";

import CalendarHeader from "../../components/Agenda/calendarHeader/components.CalendarHeader";
import DaySelector from "../../components/Agenda/daySelector/components.DaySelector";
import AppointmentCard from "../../components/Agenda/appointmentCard/components.AppointmentCard";
import BottomNav from "../../components/components.bottomNav/bottomNav";

type Appointment = {
  title: string;
  doctor: string;
  time: string;
};

export default function Agenda() {
  // Lista de dias
  const [days, setDays] = useState([
    { weekday: "Seg", day: 27 },
    { weekday: "Ter", day: 28, active: true },
    { weekday: "Qua", day: 29 },
    { weekday: "Qui", day: 30 },
    { weekday: "Sex", day: 31 },
  ]);

  // Consultas agrupadas por dia
  const appointmentsByDay: Record<number, Appointment[]> = {
    27: [
      {
        title: "Nutricionista",
        doctor: "Dra. Helena",
        time: "10:00 - 10:30",
      },
    ],
    28: [
      {
        title: "Pediatra",
        doctor: "Dra. Amanda",
        time: "14:00 - 14:30",
      },
      {
        title: "Exame de Rotina",
        doctor: "Laboratório Santa Vita",
        time: "09:00 - 10:00",
      },
    ],
    29: [],
    30: [
      {
        title: "Cardiologista",
        doctor: "Dra. Catarina",
        time: "08:00 - 08:30",
      },
    ],
    31: [],
  };

  // Pega o dia ativo
  const activeDay = days.find((d) => d.active)?.day || 28;

  // Consultas do dia atual
  const appointments = appointmentsByDay[activeDay] || [];

  // Quando clicar em um dia
  const handleSelectDay = (dayNumber: number) => {
    const newDays = days.map((d) => ({
      ...d,
      active: d.day === dayNumber,
    }));
    setDays(newDays);
  };

  return (
    <div className="agenda-container">
      <CalendarHeader month="Novembro 2024" />

      <DaySelector days={days} onSelect={handleSelectDay} />

      <div className="agenda-list">
        {appointments.length > 0 ? (
          appointments.map((appt, index) => (
            <AppointmentCard
              key={index}
              title={appt.title}
              doctor={appt.doctor}
              time={appt.time}
            />
          ))
        ) : (
          <p className="no-appointments">Nenhuma consulta neste dia.</p>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
