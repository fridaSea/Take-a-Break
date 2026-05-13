import "./AnimatedButton.css";

interface AnimatedButtonProps {
  text: string;
  onClick: () => void;
}

function AnimatedButton({ text, onClick }: AnimatedButtonProps) {
  return (
    <div className="button-body">
      <div className="button-wrapper">
        <button className="nebula-btn" onClick={onClick}>
          <span className="glass-reflection"></span>
          <span className="btn-text">{text}</span>
        </button>
      </div>
    </div>
  );
}

export default AnimatedButton;
