import "./appoitmentCard.css";

interface AppointmentCardProps {
  title: string;
  doctor: string;
  time: string;
}

export default function AppointmentCard({
  title,
  doctor,
  time,
}: AppointmentCardProps) {
  return (
    <div className="appointment-card">
      <h3>{title}</h3>
      <p>{doctor}</p>
      <span className="time">{time}</span>
    </div>
  );
}
