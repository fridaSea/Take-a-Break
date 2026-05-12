import { useState, useEffect } from "react";
import "./Home.css";
import MainButton from "../../components/Button/Button";
import HabitCheckbox from "../../components/HabitCheckbox/HabitCheckbox";

function Home() {
  // nur 1 Button kann aktiv sein
  //const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  // mehrere Buttons können aktiv sein
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  // State für aktuelle Eingabe
  // const [habit, setHabit] = useState<string[]>([]);
  const [habit, setHabit] = useState("");
  // State für submitteten Wert
  // const [submitedHabit, setSubmitedHabit] = useState("");
  const [submitedHabit, setSubmitedHabit] = useState([]);

  const handleHabitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHabit(event.target.value);
  };

  const handleHabitSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (habit === "") {
      alert("Bitte füllen Sie das Feld aus!");
      return false;
    } else {
      return (
        console.log("Submitted"),
        setSubmitedHabit([...submitedHabit, habit]),
        console.log("Habit", habit),
        console.log("submitedHabit", submitedHabit),
        // setSubmitedHabit(habit),
        setHabit("")
      ); //Eingabefeld leeren - optional
    }
  };

  //   function handleClick() {
  //     alert("You clicked me");
  //   }

  function handleEmotionClick(emotion: string) {
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    } else {
      // Wenn nicht im Array: hinzufügen
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  }

  return (
    <>
      <section id="center">
        <div id="center">
          <h1>Wie fühlst du dich heute?</h1>
          <div className="emotion-buttons">
            <MainButton
              text="dankbar"
              onClick={() => handleEmotionClick("dankbar")}
              variant={
                selectedEmotions.includes("dankbar") ? "active" : undefined
              }
            />
            <MainButton
              text="traurig"
              onClick={() => handleEmotionClick("traurig")}
              variant={
                selectedEmotions.includes("traurig") ? "active" : undefined
              }
            />
            <MainButton
              text="gestressed"
              onClick={() => handleEmotionClick("gestressed")}
              variant={
                selectedEmotions.includes("gestressed") ? "active" : undefined
              }
            />
            <MainButton
              text="glücklich"
              onClick={() => handleEmotionClick("glücklich")}
              variant={
                selectedEmotions.includes("glücklich") ? "active" : undefined
              }
            />
          </div>
        </div>

        <div className="habit-tracker">
          <h2>Deine Gewohnheiten</h2>

          <HabitCheckbox habitName="Bewerbung" />
          <HabitCheckbox habitName="Programmieren" />
          <HabitCheckbox habitName="Kreuzstich" />
          {/* Wert darstellen */}

          {submitedHabit && <HabitCheckbox habitName={submitedHabit} />}
          {/* {habitArray.map((habit) => (
            <HabitCheckbox key={habit} habitName={habit} />
          ))} */}
        </div>
        <form onSubmit={handleHabitSubmit}>
          <div>
            <label htmlFor="habitInput">Neue Gewohnheit:</label>
            <input
              id="habitInput"
              type="text"
              value={habit}
              onChange={handleHabitChange}
            />
          </div>
          <button type="submit">Gewohnheit hinzufügen</button>
        </form>
      </section>
    </>
  );
}

export default Home;
