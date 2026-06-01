import "./Button.css";

interface MainButtonProps {
  text: string;
  // onClick: () => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "active" | "navbar" | "close";
  active?: boolean;
}

function MainButton({ text, onClick, variant, active }: MainButtonProps) {
  return (
    <div className="button-container">
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
