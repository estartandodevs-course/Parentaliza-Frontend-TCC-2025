import "./Agenda.css";
import CalendarHeader from "../../components/Agenda/calendarHeader/components.CalendarHeader";
import DaySelector from "../../components/Agenda/daySelector/components.DaySelector";
import AppointmentCard from "../../components/Agenda/appointmentCard/components.AppointmentCard";
import BottomNav from "../../components/components.bottomNav/bottomNav";

export default function Agenda() {
  const days = [
    { weekday: "Seg", day: 27 },
    { weekday: "Ter", day: 28, active: true },
    { weekday: "Qua", day: 29 },
    { weekday: "Qui", day: 30 },
    { weekday: "Sex", day: 31 },
  ];

  return (
    <div className="agenda-container">
      <CalendarHeader month="Novembro 2024" />

      <DaySelector days={days} />

      <div className="agenda-list">
        <AppointmentCard
          title="Pediatra"
          doctor="Dra. Amanda"
          time="14:00 - 14:30"
        />

        <AppointmentCard
          title="Exame de Rotina"
          doctor="Laboratório Santa Vita"
          time="09:00 - 10:00"
        />
      </div>

      <BottomNav />
    </div>
  );
}
