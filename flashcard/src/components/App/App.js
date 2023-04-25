import "./App.css";
import React from "react";
import Input from "../Input";

const data = [];
let randomInteger;
let titleValue;
let factValue;


function giveRandomInteger() {
  // this function will give a random number between 0 and the length of the array
  randomInteger = Math.floor(Math.random() * data.length);
}

function handleSubmit() {
  // this function, when called, will add the value of Title and Fact to the end of the data array inside one object
}

function handleTitleChange() {
  // this function will update the value of titleValue
}

function handleFactChange() {
  // this function will update the value of factValue
}

function App() {
  return (
    <div className="App">
      <Input
        titleValue={titleValue}
        factValue={factValue}
        handleSubmit={handleSubmit}
      />
      <Output />
    </div>
  );
}

export default App;
