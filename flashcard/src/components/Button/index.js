import React from 'react';

function Button({ handleSubmit }) {
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Button;