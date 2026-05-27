import { useState } from "react";
import "./FutureSelf.css";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import MainButton from "../../components/Button/Button";

interface FutureSelf {
  id: number;
  title: string;
  personalityText: string;
  createdAt: string;
  // mood: string;
}

function FutureSelf() {
  //   const [personalityText, setPersonalityText] = useState("");

  const [personalityTextArray, setPersonalityTextArray] = useState<
    FutureSelf[]
  >(() => {
    // debugger;

    const savedPersonality = localStorage.getItem("personalityText");
    console.log("savedPersonality", savedPersonality);
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
        createdAt: new Date().toISOString(),
      };
      const update = [...personalityTextArray, newPersonality];
      setPersonalityTextArray(update);
      localStorage.setItem("personalityText", JSON.stringify(update));
      setInputValue("");
      setTitle("");
    }
  };

  // const deletePersonalty = (event: React.MouseEvent, index: number) => {
  //   event.preventDefault();

  //   personalityTextArray.splice(index, 1);
  //   setPersonalityTextArray([...personalityTextArray]);
  //   localStorage.setItem(
  //     "personalityText",
  //     JSON.stringify(personalityTextArray),
  //   );

  //   // localStorage.clear();
  //   // -> Löscht ALLE gespeicherten personalitys
  // };

  const deletePersonalty = (index: number) => {
    const updated = personalityTextArray.filter((_, i) => i !== index);

    setPersonalityTextArray(updated);

    localStorage.setItem("personalityText", JSON.stringify(updated));
  };

  return (
    <>
      <div className="future-self-container">
        <h2>Step into your future self</h2>
        <div className="personality-card-single">
          <div className="personality-card-single-border">
            {personalityTextArray.length === 0
              ? // (
                //   <>
                //     Ich gehe mit Leichtigkeit durch meinen Tag und wähle Freude. Ich
                //     lebe im Hier und Jetzt. Ich erkenne meine wahre Größe. Meine Welt
                //     entsteht aus der Kraft meiner Entscheidungen.
                //   </>
                // )
                `Ich gehe mit Leichtigkeit durch meinen Tag und wähle Freude.

              Ich lebe im Hier und Jetzt.

              Ich erkenne meine wahre Größe.

              Meine Welt entsteht aus der Kraft meiner Entscheidungen.`
              : personalityTextArray.toReversed()[0]?.personalityText}
            {/* <p>{personalityTextArray.toReversed()[0]?.personalityText}</p> */}
          </div>
        </div>

        <div className="personality">
          <form className="personality-form">
            <h3>
              In welcher Version möchtest du heute durch deinen Tag gehen?
            </h3>
            <p>
              <label htmlFor="title">{/* Title: */}</label>
              <input
                name="title"
                value={title}
                placeholder="Titel deiner Persönlichkeit"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </p>
            <label htmlFor="personalityVersion">
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

          <div className="personality-list">
            <h2>Deine bisherigen Versionen</h2>
            {/* {personalityTextArray.map((personalityText, index) => (
              <p key={index}>{personalityText}</p>
            ))} */}
            {personalityTextArray.map((personality, index) => (
              <div className="personality-card" key={personality.id}>
                <div className="personality-card-header">
                  <h3>{personality.title}</h3>
                  <p>
                    {new Date(personality.createdAt).toLocaleDateString(
                      "de-DE",
                    )}
                  </p>
                </div>

                <p>{personality.personalityText}</p>
                {/* <p>{personality.createdAt}</p> */}
                {/* <p>{new Date(personality.createdAt).toLocaleString("de-DE")}</p> -> WITH TIME */}

                {/* <button type="reset" onClick={deletePersonalty}>
                  Change Personality
                </button> */}
                <MainButton
                  text="Delete"
                  variant={"secondary"}
                  // type="button"
                  // onClick={deletePersonalty}
                  onClick={() => deletePersonalty(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <AnimatedButton text="click" onClick={() => {}}></AnimatedButton>
      </div>
    </>
  );
}

export default FutureSelf;
