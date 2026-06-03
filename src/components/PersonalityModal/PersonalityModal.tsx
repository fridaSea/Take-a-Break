import "./PersonalityModal.css";
import MainButton from "../Button/Button";
import type { PersonalityModalProps } from "../../types/customTypes";
import { useEffect, useState } from "react";

function PersonalityModal({
  open,
  onClose,
  personality,
  onSave,
}: PersonalityModalProps) {
  if (!open) return null;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (personality) {
      setTitle(personality.title);
      setText(personality.personalityText);
    }
  }, [personality]);

  const handleSaveClick = () => {
    if (!personality) return;
    onSave({
      ...personality,
      title,
      personalityText: text,
    });
  };

  return (
    <div onClick={onClose} className="overlay">
      <div
        className="personality-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-btn">
          <MainButton text="X" variant={"close"} onClick={onClose} />
        </div>

        <div className="personality-modal-content">
          <form className="personality-form">
            <h2>Passe deine Personality an:</h2>
            <label htmlFor="title">
              <input
                name="title"
                placeholder="Titel deiner Persönlichkeit"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </label>

            <label htmlFor="personalityVersion">
              <textarea
                id="personalityVersion"
                name="personalityVersion"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                cols={50}
                placeholder="Heute gehe ich mit Leichtigkeit durch meinen Tag ..."
              ></textarea>
            </label>
            <MainButton
              text="Save"
              variant={"primary"}
              onClick={handleSaveClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalityModal;
