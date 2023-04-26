import "./App.css";
import React from "react";
import Input from "../Input";
import { useState } from 'react';

// created state for input. Initally set as an empty string
const [input, setInput] = useState('')
const [quiz, setQuiz] = useState({})

// const data = [];
const [data, setData] = useState([])

let randomInteger;
let titleValue;
let factValue;


function giveRandomInteger() {
  // this function will give a random number between 0 and the length of the array
  randomInteger = Math.floor(Math.random() * data.length);
}

function handleSubmit() {
  // this function, when called, will add the value of Title and Fact to the end of the data array inside one object
  setData([...data, {title: titleValue, fact: factValue, uniqueId: data.length}])
  // we may need to rename uniqueID to key/Key
}

function handleTitleChange() {
  // this function will update the value of titleValue
}

function handleFactChange() {
  // this function will update the value of factValue
}
// function for input value
function inputField(event){
 
// SAVING IN CASE IT IS NEEDED
  // set the state to the value of the input 
  setInput(event.target.value)
  // create a new array with the spread operator with the value of the input
  const quizArray = [...input] 
}


function quizField(){
  setQuiz()
}

function App() {
  return (
<div className="App">
      <Input
        titleValue={titleValue}
        factValue={factValue}
        handleSubmit={handleSubmit}
      />
      <Form/>
      <Quiz/>
      <Display/>
    </div>
  );
}

export default App;
