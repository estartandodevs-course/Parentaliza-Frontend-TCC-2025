import React from "react";
import "./BabyCard.css";

interface BabyCardProps {
  babyImage: string;
  age: string;
  onViewMore: () => void; // 👈 ESTA PROP ESTAVA FALTANDO
}

const BabyCard: React.FC<BabyCardProps> = ({ babyImage, age, onViewMore }) => {
  return (
    <div className="baby-card">
      <div className="baby-image-container">
        <img src={babyImage} alt="Bebê" className="baby-image" />

        <div className="baby-age">
          <span>Seu bebê tem </span>
          <strong>{age}</strong>
        </div>

        <button className="baby-btn" onClick={onViewMore}>
          Ver mais
        </button>
      </div>
    </div>
  );
};

export default BabyCard;
