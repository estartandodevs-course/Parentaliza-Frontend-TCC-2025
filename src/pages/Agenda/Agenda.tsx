import "./Agenda.css";
import { useEffect, useMemo, useState } from "react";
import CalendarHeader from "../../components/Agenda/calendarHeader/components.CalendarHeader";
import DaySelector from "../../components/Agenda/daySelector/components.DaySelector";
import AppointmentCard from "../../components/Agenda/appointmentCard/components.AppointmentCard";
import BottomNav from "../../components/components.bottomNav/bottomNav";

type EventItem = {
  id: string;
  title: string;
  specialist?: string;
  location?: string;
  time?: string;
  notes?: string;
  reminder?: boolean;
};

function formatMonthName(d: Date) {
  return d.toLocaleString("pt-BR", { month: "long", year: "numeric" });
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export default function Agenda() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Record<string, EventItem[]>>(() => {
    try {
      const raw = localStorage.getItem("agenda_events");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("agenda_events", JSON.stringify(events));
  }, [events]);

  const monthName = useMemo(() => formatMonthName(currentMonth), [currentMonth]);

  const monthGrid = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const total = daysInMonth(year, month);
    // Monday-first index (0 = Mon)
    const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) - 6
    const leading = (firstDay + 6) % 7; // shift so Monday=0
    const cells: (number | null)[] = [];
    for (let i = 0; i < leading; i++) cells.push(null);
    for (let d = 1; d <= total; d++) cells.push(d);
    return { year, month, cells };
  }, [currentMonth]);

  const selectedKey = useMemo(() => {
    const y = selectedDate.getFullYear();
    const m = selectedDate.getMonth() + 1;
    const d = selectedDate.getDate();
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }, [selectedDate]);

  function handlePrevMonth() {
    setCurrentMonth((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setCurrentMonth((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1));
  }

  // event modal state
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    specialist: "",
    location: "",
    time: "",
    notes: "",
    reminder: false,
  });

  function openAddModal() {
    setForm({ title: "", specialist: "", location: "", time: "", notes: "", reminder: false });
    setShowModal(true);
  }

  function saveEvent() {
    const newEvent: EventItem = {
      id: String(Date.now()),
      title: form.title || "Evento",
      specialist: form.specialist,
      location: form.location,
      time: form.time,
      notes: form.notes,
      reminder: form.reminder,
    };
    setEvents((prev) => {
      const copy = { ...prev };
      const list = copy[selectedKey] ? [...copy[selectedKey], newEvent] : [newEvent];
      copy[selectedKey] = list;
      return copy;
    });
    setShowModal(false);
  }

  // week strip sample (keeps existing small day selector behaviour)
  const days = [
    { weekday: "Seg", day: selectedDate.getDate() },
    { weekday: "Ter", day: selectedDate.getDate() + 1 },
    { weekday: "Qua", day: selectedDate.getDate() + 2 },
    { weekday: "Qui", day: selectedDate.getDate() + 3 },
    { weekday: "Sex", day: selectedDate.getDate() + 4 },
  ];

  return (
    <div className="agenda-container">
      <CalendarHeader
        month={monthName}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
        onTitleClick={() => setIsCalendarOpen((v) => !v)}
      />

      {isCalendarOpen && (
        <div className="month-grid">
          <div className="week-days">
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sáb</div>
            <div>Dom</div>
          </div>

          <div className="days-grid">
            {monthGrid.cells.map((n, idx) => {
              if (n === null) return <div key={idx} className="day empty" />;
              const cellDate = new Date(monthGrid.year, monthGrid.month, n);
              const isToday =
                cellDate.toDateString() === new Date().toDateString();
              const isSelected = cellDate.toDateString() === selectedDate.toDateString();
              return (
                <div
                  key={idx}
                  className={"day" + (isToday ? " today" : "") + (isSelected ? " selected" : "")}
                  onClick={() => setSelectedDate(cellDate)}
                >
                  {n}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <DaySelector
        days={days}
        onSelect={(d) => setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d.day))}
      />

      <div className="agenda-list">
        <div className="agenda-list-header">
          <strong>Eventos de {selectedDate.toLocaleDateString("pt-BR")}</strong>
          <button className="add-event-btn" onClick={openAddModal}>
            +
          </button>
        </div>

        {(events[selectedKey] || []).length === 0 && (
          <div className="no-events">Nenhum evento para esta data.</div>
        )}

        {(events[selectedKey] || []).map((ev) => (
          <AppointmentCard key={ev.id} title={ev.title} doctor={ev.specialist || ev.location || ""} time={ev.time || ""} />
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Novo evento — {selectedDate.toLocaleDateString("pt-BR")}</h3>

            <label>
              Título
              <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </label>

            <label>
              Especialista
              <input value={form.specialist} onChange={(e) => setForm((f) => ({ ...f, specialist: e.target.value }))} />
            </label>

            <label>
              Local
              <input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
            </label>

            <label>
              Horário
              <input value={form.time} onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))} placeholder="ex: 09:00 - 10:00" />
            </label>

            <label>
              Observações
              <textarea value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
            </label>

            <label className="row">
              <input type="checkbox" checked={form.reminder} onChange={(e) => setForm((f) => ({ ...f, reminder: e.target.checked }))} />
              Lembrar
            </label>

            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancelar</button>
              <button className="btn-save" onClick={saveEvent}>Salvar</button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
