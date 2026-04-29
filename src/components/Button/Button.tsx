import "./Button.css";

interface MainButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

function MainButton({ text, onClick, variant }: MainButtonProps) {
  return (
    <div>
      <button
        className={`main-button ${variant ? `main-button--${variant}` : ""}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default MainButton;
