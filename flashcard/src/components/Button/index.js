import React from 'react';

function Button({ handleSubmit }) {
  return (
    <div>
      <button onClick={handleSubmit}>Click me</button>
    </div>
  );
}

export default Button;