import { useEffect, useState } from "react";

function FutureSelf() {
  //   const [personalityText, setPersonalityText] = useState("");

  const [personalityTextArray, setPersonalityTextArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addPersonalityText = () => {
    if (inputValue.trim() !== "") {
      setPersonalityTextArray([...personalityTextArray, inputValue]);
      setInputValue("");
    }
  };

  const handlepersonalityTextSubmit = (e) => {
    e.preventDefault();
    addPersonalityText();
  };

  //   const handlePersonalityTextChange = (event) => {
  //     setPersonalityText(event.target.value);
  //     // console.log("personalityText", personalityText);
  //   };

  //   const handlePersonalityTextSubmit = (event) => {
  //     event.preventDefault();
  //     console.log("personalityText", personalityText);
  //   };

  // ANDERER VERSUCH
  // function handlePersonalitySubmit(e) {
  //   // Prevent the browser from reloading the page
  //   e.preventDefault();

  //   console.log("e.target", e);
  //   // const formData = new FormData(form);
  // }

  //   function handleCheckboxClick() {
  //   const newValue = !checkbox; // "Nimm den aktuellen Status der Checkbox (checkbox) und kehre ihn um (!). Speichere das Ergebnis in newValue."
  //   setCheckbox(newValue);
  //   localStorage.setItem(habitName, newValue.toString());
  // }

  return (
    <>
      <div>
        <h2>Your Future Self</h2>

        <div className="personality">
          <h2>Step into your future self</h2>
          <form
            // onSubmit={handlePersonalitySubmit}
            onSubmit={handlepersonalityTextSubmit}
          >
            <label htmlFor="personalityVersion">
              In welcher Version möchtest du heute durch deinen Tag gehen?
              <textarea
                id="personalityVersion"
                name="personalityVersion"
                value={inputValue}
                // value={personalityText}
                onChange={(e) => setInputValue(e.target.value)}
                // onChange={handlePersonalityTextChange}
                rows={5}
                cols={50}
                placeholder="Heute gehe ich mit Leichtigkeit durch meinen Tag ..."
              ></textarea>
            </label>

            <button
              type="submit"
              //   onClick={addPersonalityText}
              // onClick={handlePersonalityTextSubmit}
            >
              Aktivate todays Personality
            </button>
            {/* <button type="reset">Change Personality</button> */}
          </form>

          {/* <p>{personalityText}</p> */}
          <div>
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
