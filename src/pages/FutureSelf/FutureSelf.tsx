import { useState } from "react";
import "./FutureSelf.css";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import MainButton from "../../components/Button/Button";

interface Personality {
  id: number;
  title: string;
  personalityText: string;
  createdAt: string;
  // mood: string;
}

function FutureSelf() {
  const [selectedPersonality, setSelectedPersonality] =
    useState<Personality | null>(null);

  const [personalityTextArray, setPersonalityTextArray] = useState<
    Personality[]
  >(() => {
    const savedPersonality = localStorage.getItem("personalityText");
    console.log("savedPersonality", savedPersonality);

    return savedPersonality ? JSON.parse(savedPersonality) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");

  const addPersonalityText = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "" && title.trim() !== "") {
      const newPersonality: Personality = {
        id: Date.now(),
        title: title,
        personalityText: inputValue,
        createdAt: new Date().toISOString(),
      };
      const update = [...personalityTextArray, newPersonality];
      setPersonalityTextArray(update);
      localStorage.setItem("personalityText", JSON.stringify(update));
      setSelectedPersonality(newPersonality);

      setInputValue("");
      setTitle("");
    }
  };

  const deletePersonality = (index: number) => {
    // TODO: Add case, if personality is displayed and then deleted -> what happens then.
    const updated = personalityTextArray.filter((_, i) => i !== index);

    setPersonalityTextArray(updated);

    localStorage.setItem("personalityText", JSON.stringify(updated));
  };

  const setChosenPersonality = (personality: Personality) => {
    localStorage.setItem("chosenPersonality", personality.id.toString());

    setSelectedPersonality(personality);
  };

  const getChosenPersonality = () => {
    const chosenPersonalityId = localStorage.getItem("chosenPersonality");

    if (chosenPersonalityId) {
      const selectedPersonality = personalityTextArray.find(
        (personality) => personality.id === parseInt(chosenPersonalityId, 10),
      );
      return selectedPersonality;
    }
    return null;
  };

  const defaultText = `Ich gehe mit Leichtigkeit durch meinen Tag und wähle Freude.

              Ich lebe im Hier und Jetzt.

              Ich erkenne meine wahre Größe.

              Meine Welt entsteht aus der Kraft meiner Entscheidungen.`;

  const localStoragePersonality = getChosenPersonality();

  // const displayedPersonality =
  //   selectedPersonality ??
  //   personalityTextArray[personalityTextArray.length - 1];
  // ?? -> gibt Fallback Wert. Dient dazu, einen Standardwert zuzuweisen, wenn eine Variable null oder undefined ist.

  let displayedPersonality;
  if (personalityTextArray.length === 0) {
    displayedPersonality = null;
  } else if (selectedPersonality) {
    displayedPersonality = selectedPersonality;
  } else if (localStoragePersonality) {
    displayedPersonality = localStoragePersonality;
  } else {
    displayedPersonality =
      personalityTextArray[personalityTextArray.length - 1];
  }

  return (
    <>
      <div className="future-self-container">
        <h2>Step into your future self</h2>
        <div className="personality-card-single">
          <div className="personality-card-single-border">
            {displayedPersonality !== null
              ? displayedPersonality.personalityText
              : defaultText}
          </div>
        </div>

        <div className="personality">
          <form className="personality-form">
            <h3>
              In welcher Version möchtest du heute durch deinen Tag gehen?
            </h3>
            <label htmlFor="title">
              <input
                name="title"
                value={title}
                placeholder="Titel deiner Persönlichkeit"
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </label>

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
              onClick={addPersonalityText}
            />
          </form>

          <div className="personality-list">
            <h2>Deine bisherigen Versionen</h2>
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

                <MainButton
                  text="Delete"
                  variant={"secondary"}
                  // type="button"
                  onClick={() => deletePersonality(index)}
                />

                <MainButton
                  text="Choose Personality"
                  variant={"secondary"}
                  onClick={() => setChosenPersonality(personality)}
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
