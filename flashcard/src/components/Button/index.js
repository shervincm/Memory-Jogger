import React from "react";

function Button({ handleSubmit }) {
  return (
    <div>
      <button onClick={handleSubmit}>Add Flashcard</button>
    </div>
  );
}

export default Button;
