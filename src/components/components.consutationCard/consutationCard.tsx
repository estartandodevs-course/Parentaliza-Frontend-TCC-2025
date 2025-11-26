import "./consutationCard.css";

interface ConsultationCardProps {
  type: string;
  doctor: string;
  date: string;
  time: string;
  status: string;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({
  type,
  doctor,
  date,
  time,
  status,
}) => {
  return (
    <div className="consult-card">
      <div className="consult-header">
        <h3>{type}</h3>
        <span className="consult-status">{status}</span>
      </div>

      <p className="consult-doctor">{doctor}</p>

      <div className="consult-info">
        <div>
          <span className="label">Data</span>
          <p>{date}</p>
        </div>

        <div>
          <span className="label">Horário</span>
          <p>{time}</p>
        </div>
      </div>

      <div className="consult-actions">
        <button className="btn-secondary">Remarcar</button>
        <button className="btn-primary">Feito</button>
      </div>
    </div>
  );
};

export default ConsultationCard;
