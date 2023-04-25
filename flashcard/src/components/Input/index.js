import React from 'react';
import Button from '../Button';

function Input({ titleValue, factValue, handleSubmit}) {
  return (
    <div>
      <form>
        <label htmlFor="Title">Title</label>
        <label htmlFor="Fact">Fact</label>
      </form>
      <Button handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Input;