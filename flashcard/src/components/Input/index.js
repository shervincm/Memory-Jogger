import React from "react";
import Button from "../Button";
import { useState } from "react";

function Input({ titleValue, factValue, handleSubmit }) {
  const [title, setTitle] = useState(titleValue);
  const [fact, setFact] = useState(factValue);

  return (
    <div>
      <form>
        <input required placeholder="Add Title" htmlFor="Title" type="text" value={titleValue} onChange={(e)=> {setTitle(e.target.value)}}></input>
        <br></br>
        <textarea required placeholder="Add Fact" htmlFor="Fact" type="textarea" value={factValue} onChange={(e)=> {setFact(e.target.value)}}></textarea>
        <br></br>
        <Button handleSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default Input;
