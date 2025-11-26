import "./buttonAdd.css";

interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button className="add-btn" onClick={onClick}>
      +
    </button>
  );
}
