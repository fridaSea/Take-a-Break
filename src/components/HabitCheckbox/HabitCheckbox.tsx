import "./HabitCheckbox.css";

interface HabitCheckboxProps {
  habitName: string;
  checked: boolean;
  onChange: () => void;
}

function HabitCheckbox({ habitName, checked, onChange }: HabitCheckboxProps) {
  return (
    <div className="habit-item">
      <span className="habit-name">{habitName}</span>
      <input
        type="checkbox"
        checked={checked}
        className="habit-checkbox"
        // onChange={handleCheckboxClick}
        onChange={onChange}
      />
    </div>
  );
}

export default HabitCheckbox;
