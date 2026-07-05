// import { useEffect, useState } from "react";
import "./HabitCheckbox.css";

interface HabitCheckboxProps {
  habitName: string;
}
function HabitCheckbox({ habitName }: HabitCheckboxProps) {
  // const [checkbox, setCheckbox] = useState<boolean>(false);

  // const [habitArray, setHabitArray] = useState(() => {
  //   const savedHabit = localStorage.getItem(habitName);
  //   return savedHabit ? JSON.parse(savedHabit) : [];
  // });

  // //   console.log("habitArray", habitArray);

  // useEffect(() => {
  //   localStorage.setItem("habitName", JSON.stringify(habitArray));
  // }, [habitArray]);

  // function handleCheckboxClick() {
  //   const newValue = !checkbox; // "Nimm den aktuellen Status der Checkbox (checkbox) und kehre ihn um (!). Speichere das Ergebnis in newValue."
  //   setCheckbox(newValue);
  //   localStorage.setItem(habitName, newValue.toString());
  // }

  // function loadFromLocalStorage() {
  //   const savedHabit = localStorage.getItem(habitName);
  //   if (savedHabit !== null) {
  //     //ungleich zu null
  //     if (savedHabit === "true") {
  //       setCheckbox(true);
  //     } else {
  //       setCheckbox(false);
  //     }
  //   }
  // }

  // // const addHabit = (newHabit) => {
  // //   setHabitArray((prevArray) => [...prevArray, newHabit]);
  // // };

  // useEffect(() => {
  //   loadFromLocalStorage();
  // }, []);

  return (
    // NEXT NEUE GEWOHNHEIT HINZUFÜGEN
    // NEXT ICON FÜR GEWOHNHEIT AUSWÄHLEN
    // NEXT VERLSUF ANZEIGEN
    <div className="habit-container">
      {/* <div className="habit-item">
        <span className="habit-name">{habitName}</span>
        <input
          type="checkbox"
          checked={checkbox}
          className="habit-checkbox"
          onChange={handleCheckboxClick}
        />
      </div> */}
    </div>
  );
}

export default HabitCheckbox;
