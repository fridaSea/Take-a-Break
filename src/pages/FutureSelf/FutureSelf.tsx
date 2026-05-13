import { useState } from "react";
import "./FutureSelf.css";

interface FutureSelf {
  id: number;
  personalityText: string;
}

function FutureSelf() {
  //   const [personalityText, setPersonalityText] = useState("");

  const [personalityTextArray, setPersonalityTextArray] = useState(() => {
    // debugger;
    const savedPersonality = localStorage.getItem("personalityText");
    return savedPersonality ? JSON.parse(savedPersonality) : [];
  });

  const [inputValue, setInputValue] = useState("");

  const addPersonalityText = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      const update = [...personalityTextArray, inputValue];
      setPersonalityTextArray(update);
      localStorage.setItem("personalityText", JSON.stringify(update));
      setInputValue("");
    }
  };

  // RESET  - localStorage.clear();

  return (
    <>
      <div>
        <h2>Your Future Self</h2>

        <div className="personality">
          <h2>Step into your future self</h2>
          <form>
            <label htmlFor="personalityVersion">
              In welcher Version möchtest du heute durch deinen Tag gehen?
              <textarea
                id="personalityVersion"
                name="personalityVersion"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={5}
                cols={50}
                placeholder="Heute gehe ich mit Leichtigkeit durch meinen Tag ..."
              ></textarea>
            </label>

            <button type="submit" onClick={addPersonalityText}>
              Aktivate todays Personality
            </button>
            {/* <button type="reset">Change Personality</button> */}
          </form>

          <div>
            <p>{personalityTextArray.toReversed()[0]}</p>
          </div>

          <div>
            <h2>All deine bisherigen Versionen</h2>
            {personalityTextArray.map((personalityText, index) => (
              <p key={index}>{personalityText}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FutureSelf;
