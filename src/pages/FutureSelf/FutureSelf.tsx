import { useEffect, useState } from "react";
import "./FutureSelf.css";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import MainButton from "../../components/Button/Button";
import PersonalityModal from "../../components/PersonalityModal/PersonalityModal";
import type { Personality } from "../../types/customTypes";

function FutureSelf() {
  const [openModal, setOpenModal] = useState(false);
  const [showChosenButton, setshowChosenButton] = useState(false);

  const [editingPersonality, setEditingPersonality] =
    useState<Personality | null>(null);

  const [selectedPersonality, setSelectedPersonality] =
    useState<Personality | null>(null);

  const [displayPersonality, setDisplayPersonality] =
    useState<Personality | null>(null);

  const [personalityTextArray, setPersonalityTextArray] = useState<
    Personality[]
  >(() => {
    const savedPersonality = localStorage.getItem("personalityText");

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

      if (localStoragePersonality) {
        localStorage.removeItem("chosenPersonality");
      }

      updateDisplayedPersonality();

      setInputValue("");
      setTitle("");
    }
  };

  const deletePersonality = (id: number) => {
    // TODO: Add case, if personality is displayed and then deleted -> what happens then.
    const deleted = personalityTextArray.filter((_, i) => i !== id);
    console.log("deleted", deleted);

    const deletedPersonality = personalityTextArray[id];
    console.log("deletedPersonality", deletedPersonality);

    setPersonalityTextArray(deleted);

    localStorage.setItem("personalityText", JSON.stringify(deleted));

    if (deletedPersonality.id === selectedPersonality?.id) {
      localStorage.removeItem("chosenPersonality");
    }

    updateDisplayedPersonality();
  };

  const setChosenPersonality = (personality: Personality) => {
    localStorage.setItem("chosenPersonality", personality.id.toString());

    setSelectedPersonality(personality);
  };

  const getChosenPersonality = () => {
    const chosenPersonalityId = localStorage.getItem("chosenPersonality");

    if (chosenPersonalityId) {
      const selectedPersonality = personalityTextArray.find(
        (personality) => personality.id === parseInt(chosenPersonalityId, 10)
      );
      return selectedPersonality;
    }
    return null;
  };

  const handleChosenButton = () => {
    if (displayPersonality === localStoragePersonality) {
      setshowChosenButton(true);
    } else {
      setshowChosenButton(false);
    }
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

  function updateDisplayedPersonality() {
    let displayedPersonality: Personality | null;
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

    setDisplayPersonality(displayedPersonality);
    handleChosenButton();
  }

  const handleSave = (updatedPersonality: Personality) => {
    const updated = personalityTextArray.map((p) =>
      p.id === updatedPersonality.id ? updatedPersonality : p
    );
    setPersonalityTextArray(updated);
    localStorage.setItem("personalityText", JSON.stringify(updated));

    if (selectedPersonality?.id === updatedPersonality.id) {
      setSelectedPersonality(updatedPersonality);
    }

    setOpenModal(false);
  };

  useEffect(() => {
    updateDisplayedPersonality();
  });

  return (
    <>
      <div className="future-self-container">
        <h2>Step into your future self</h2>
        <div className="personality-card-single">
          <div className="personality-card-single-border">
            {displayPersonality !== null
              ? displayPersonality.personalityText
              : defaultText}
            {showChosenButton ? (
              <MainButton
                text="Deactivate choosen personality"
                variant={"primary"}
                onClick={() => setshowChosenButton(!showChosenButton)}
              />
            ) : null}
          </div>
        </div>

        <div className="personality">
          <form className="personality-form">
            <h3>Which version of yourself do you want to embody today?</h3>
            <label htmlFor="title">
              <input
                name="title"
                value={title}
                placeholder="Title of your personality"
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
                placeholder="Today I choose ease ..."
              ></textarea>
            </label>

            <MainButton
              text="Unlock todays personality"
              variant={"primary"}
              onClick={addPersonalityText}
            />
          </form>
        </div>

        <div className="personality">
          {personalityTextArray !== null && personalityTextArray.length > 0 ? (
            <div className="personality-list">
              <h2>Your previously saved versions</h2>
              {personalityTextArray.map((personality, index) => (
                <div
                  key={personality.id}
                  className={`personality-card ${
                    localStoragePersonality !== null &&
                    personality.id === localStoragePersonality.id
                      ? "personality-card-active"
                      : ""
                  }`}
                >
                  <div className="personality-card-header">
                    <h3>{personality.title}</h3>
                    <p>
                      {new Date(personality.createdAt).toLocaleDateString(
                        "de-DE"
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
                    text="Edit"
                    variant={"secondary"}
                    onClick={() => {
                      setEditingPersonality(personality);
                      setOpenModal(true);
                    }}

                    // onClick={() => editPersonality(index)}
                  />

                  <PersonalityModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    personality={editingPersonality}
                    onSave={handleSave}
                  />

                  {localStoragePersonality !== null &&
                  personality.id === localStoragePersonality.id ? null : (
                    <MainButton
                      text="Choose Personality"
                      variant={"secondary"}
                      onClick={() => setChosenPersonality(personality)}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>You haven`t saved any personalites yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FutureSelf;
