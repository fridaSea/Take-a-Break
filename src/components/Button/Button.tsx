import "./Button.css";

interface MainButtonProps {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "active" | "navbar";
  active?: boolean;
}

function MainButton({ text, onClick, variant, active }: MainButtonProps) {
  return (
    <div>
      <button
        className={`main-button ${variant ? `main-button--${variant}` : ""} ${active ? "active" : ""}`}
        onClick={onClick}
      >
        {text}
        {/* {text} {active ? "YES" : "NO"} */}
      </button>
    </div>
  );
}

export default MainButton;
