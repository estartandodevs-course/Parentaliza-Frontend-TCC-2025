// src/components/Agenda/buttonAdd/buttonAdd.tsx
import React from "react";
import "./buttonAdd.css";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <button className="add-btn" onClick={onClick}>
      +
    </button>
  );
};

export default AddButton;
