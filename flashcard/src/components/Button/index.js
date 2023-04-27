import React from "react";

function Button({ handleSubmit }) {
  return (
    <div>
      <button className="addMeButton" onClick={handleSubmit}>
        Add Flashcard
      </button>
    </div>
  );
}

export default Button;
