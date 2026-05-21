import { useState } from "react";
import "./FutureSelf.css";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import MainButton from "../../components/Button/Button";

interface FutureSelf {
  id: number;
  title: string;
  personalityText: string;
  // createdAt: Date;
  // mood: string;
}

function FutureSelf() {
  //   const [personalityText, setPersonalityText] = useState("");

  const [personalityTextArray, setPersonalityTextArray] = useState<
    FutureSelf[]
  >(() => {
    // debugger;

    const savedPersonality = localStorage.getItem("personalityText");
    return savedPersonality ? JSON.parse(savedPersonality) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");

  const addPersonalityText = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "" && title.trim() !== "") {
      const newPersonality: FutureSelf = {
        id: Date.now(),
        title: title,
        personalityText: inputValue,
      };
      const update = [...personalityTextArray, newPersonality];
      setPersonalityTextArray(update);
      localStorage.setItem("personalityText", JSON.stringify(update));
      setInputValue("");
      setTitle("");
    }
  };

  // RESET  - localStorage.clear();

  return (
    <>
      <div className="future-self-container">
        <h2>Your Future Self</h2>

        <div className="personality">
          <h2>Step into your future self</h2>
          <form className="personality-form">
            <p>
              <label htmlFor="title">Title:</label>
              <input
                name="title"
                value={title}
                placeholder="Titel deiner Persönlichkeit"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </p>
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

            <MainButton
              text="Aktivate todays Personality"
              variant={"primary"}
              type="submit"
              onClick={addPersonalityText}
            />
            {/* <button type="submit" onClick={addPersonalityText}>
              Aktivate todays Personality
            </button> */}
          </form>

          <div>
            <p>{personalityTextArray.toReversed()[0]?.personalityText}</p>
          </div>

          <div className="personality-list">
            <h2>All deine bisherigen Versionen</h2>
            {/* {personalityTextArray.map((personalityText, index) => (
              <p key={index}>{personalityText}</p>
            ))} */}
            {personalityTextArray.map((personality) => (
              <div className="personality-card" key={personality.id}>
                <h3>{personality.title}</h3>
                <p>{personality.personalityText}</p>
              </div>
            ))}
          </div>
        </div>

        <AnimatedButton text="click" onClick={() => {}}></AnimatedButton>

        {/* NEXT: Objeckt im Array */}
      </div>
    </>
  );
}

export default FutureSelf;
