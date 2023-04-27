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
      console.log(
        `called the handleSubmit function with title of ${title} and fact of ${fact}`
      );
      setTitle("");
      setFact("");
    }
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleClick} className="justForm">
        <input
          required
          placeholder="Add Title"
          htmlFor="Title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br></br>
        <textarea className = "textarea"
          required
          placeholder="Add Fact"
          htmlFor="Fact"
          type="textarea"
          value={fact}
          onChange={(e) => {
            setFact(e.target.value);
          }}
        ></textarea>
        <br></br>
        <Button />
      </form>
    </div>
  );
}

export default Input;
