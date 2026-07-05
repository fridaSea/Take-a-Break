import { useState } from "react";
import "./Home.css";
import MainButton from "../../components/Button/Button";
import HabitCheckbox from "../../components/HabitCheckbox/HabitCheckbox";

function Home() {
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  // const [habit, setHabit] = useState("");
  // const [submitedHabit, setSubmitedHabit] = useState([]);

  // const onClick = () => {
  //   alert("Button clicked");
  // };

  // const handleHabitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setHabit(event.target.value);
  // };

  // const handleHabitSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (habit === "") {
  //     alert("Bitte füllen Sie das Feld aus!");
  //     return false;
  //   } else {
  //     return (
  //       console.log("Submitted"),
  //       setSubmitedHabit([...submitedHabit, habit]),
  //       console.log("Habit", habit),
  //       console.log("submitedHabit", submitedHabit),
  //       // setSubmitedHabit(habit),
  //       setHabit("")
  //     );
  //   }
  // };

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
          <h1>How are you feeling today?</h1>
          <div className="emotion-buttons">
            <MainButton
              text="grateful"
              onClick={() => handleEmotionClick("grateful")}
              variant={
                selectedEmotions.includes("grateful") ? "active" : undefined
              }
            />
            <MainButton
              text="sad"
              onClick={() => handleEmotionClick("sad")}
              variant={selectedEmotions.includes("sad") ? "active" : undefined}
            />
            <MainButton
              text="stressed"
              onClick={() => handleEmotionClick("stressed")}
              variant={
                selectedEmotions.includes("stressed") ? "active" : undefined
              }
            />
            <MainButton
              text="happy"
              onClick={() => handleEmotionClick("happy")}
              variant={
                selectedEmotions.includes("happy") ? "active" : undefined
              }
            />
          </div>
        </div>

        {/* <div className="habit-tracker">
          <h2>Deine Gewohnheiten</h2>

          <HabitCheckbox habitName="Bewerbung" />
          <HabitCheckbox habitName="Programmieren" />
          <HabitCheckbox habitName="Kreuzstich" />

          {submitedHabit && <HabitCheckbox habitName={submitedHabit} />}
          {/* {habitArray.map((habit) => (
            <HabitCheckbox key={habit} habitName={habit} />
          ))} 
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
        </form> */}
      </section>
    </>
  );
}

export default Home;
