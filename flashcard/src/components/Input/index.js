import React from "react";
import Button from "../Button";
import { useState } from "react";

function Input({ handleSubmit, data, setData }) {
  const [title, setTitle] = useState("");
  const [fact, setFact] = useState("");


  function handleClick(e) {
    e.preventDefault();
    if (fact.trim() !== "" || title.trim() !== "") {
    handleSubmit(title, fact);
    console.log(`called the handleSubmit function with title of ${title} and fact of ${fact}`);
    setTitle("");
    setFact("");
  }
}

  return (
    <div>
      <form onSubmit={handleClick}>
        <input required placeholder="Add Title" htmlFor="Title" type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}}></input>
        <br></br>
        <textarea required placeholder="Add Fact" htmlFor="Fact" type="textarea" value={fact} onChange={(e)=> {setFact(e.target.value)}}></textarea>
        <br></br>
        <Button  />
      </form>
    </div>
  );
}

export default Input;
