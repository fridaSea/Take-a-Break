import { useEffect, useState } from "react";
import "./HabitCheckbox.css";

interface HabitCheckboxProps {
  habitName: string;
}
function HabitCheckbox({ habitName }: HabitCheckboxProps) {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  function handleCheckboxClick() {
    const newValue = !checkbox;
    setCheckbox(newValue);
    localStorage.setItem(habitName, newValue.toString());
  }

  function loadFromLocalStorage() {
    const savedHabit = localStorage.getItem(habitName);
    if (savedHabit !== null) {
      //ungleich zu null
      if (savedHabit === "true") {
        setCheckbox(true);
      } else {
        setCheckbox(false);
      }
    }
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  return (
    // NEXT NEUE GEWOHNHEIT HINZUFÜGEN
    // NEXT ICON FÜR GEWOHNHEIT AUSWÄHLEN
    // NEXT VERLSUF ANZEIGEN
    <div>
      <div className="habit-item">
        <span className="habit-name">{habitName}</span>
        <input
          type="checkbox"
          checked={checkbox}
          className="habit-checkbox"
          onChange={handleCheckboxClick}
        />
      </div>
    </div>
  );
}

export default HabitCheckbox;
