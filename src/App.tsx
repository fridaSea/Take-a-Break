import { useState, useEffect } from "react";
import "./App.css";
import MainButton from "./components/Button/Button";
import HabitCheckbox from "./components/HabitCheckbox/HabitCheckbox";

function App() {
  // nur 1 Button kann aktiv sein
  //const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  // mehrere Buttons können aktiv sein
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  //const [checkbox, setCheckbox] = useState<boolean>(false);

  const [checkboxBewerbung, setCheckboxBewerbung] = useState<boolean>(false);
  const [checkboxProgrammieren, setCheckboxProgrammieren] =
    useState<boolean>(false);
  const [checkboxKreuzstich, setCheckboxKreuzstich] = useState<boolean>(false);

  function handleClick() {
    alert("You clicked me");
  }

  function handleEmotionClick(emotion: string) {
    if (selectedEmotions.includes(emotion)) {
      setSelectedEmotions(selectedEmotions.filter((e) => e !== emotion));
    } else {
      // Wenn nicht im Array: hinzufügen
      setSelectedEmotions([...selectedEmotions, emotion]);
    }
  }

  // function handleCheckboxClick() {
  //   const newValue = !checkbox;
  //   setCheckbox(newValue);
  //   localStorage.setItem("checkbox", newValue.toString());
  // }

  function handleCheckboxBewerbungClick() {
    const newValue = !checkboxBewerbung;
    setCheckboxBewerbung(newValue);
    localStorage.setItem("checkboxBewerbung", newValue.toString());
  }

  function handleCheckboxProgrammierenClick() {
    const newValue = !checkboxProgrammieren;
    setCheckboxProgrammieren(newValue);
    localStorage.setItem("checkboxProgrammieren", newValue.toString());
  }

  function handleCheckboxKreuzstichClick() {
    const newValue = !checkboxKreuzstich;
    setCheckboxKreuzstich(newValue);
    localStorage.setItem("checkboxKreuzstich", newValue.toString());
  }

  function loadFromLocalStorage() {
    const savedBewerbung = localStorage.getItem("checkboxBewerbung");
    if (savedBewerbung !== null) {
      //ungleich zu null
      if (savedBewerbung === "true") {
        setCheckboxBewerbung(true);
      } else {
        setCheckboxBewerbung(false);
      }
    }

    const savedProgrammieren = localStorage.getItem("checkboxProgrammieren");
    if (savedProgrammieren !== null) {
      setCheckboxProgrammieren(savedProgrammieren === "true");
    }

    const savedKreuzstich = localStorage.getItem("checkboxKreuzstich");
    if (savedKreuzstich !== null) {
      setCheckboxKreuzstich(savedKreuzstich === "true");
    }
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

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

          <HabitCheckbox
            habitName="Bewerbung"
            checked={checkboxBewerbung}
            onChange={handleCheckboxBewerbungClick}
          />

          <HabitCheckbox
            habitName="Programmieren"
            checked={checkboxProgrammieren}
            onChange={handleCheckboxProgrammierenClick}
          />

          <HabitCheckbox
            habitName="Kreuzstich"
            checked={checkboxKreuzstich}
            onChange={handleCheckboxKreuzstichClick}
          />
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <MainButton
          text="Click me again"
          onClick={handleClick}
          variant="secondary"
        />
        <div id="social">
          {/* <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg> */}
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          {/* <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </>
  );
}

export default App;
