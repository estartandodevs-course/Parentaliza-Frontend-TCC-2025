import React from "react";
import "./ContentCard.css";

interface ContentCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="content-card">
      <img src={image} alt={title} className="content-image" />

      <div className="content-info">
        <h3 className="content-title">{title}</h3>
        <p className="content-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default ContentCard;
