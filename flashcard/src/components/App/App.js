import "./App.css";
import React from "react";
import Input from "../Input";
import { useState } from 'react';
import TestMe from "../Quiz";

function App() {

// created state for input. Initally set as an empty string
const [input, setInput] = useState('')
const [quiz, setQuiz] = useState({usertitle: '', fact: ''})

// const data = [];
const [data, setData] = useState([{usertitle: 'first title', fact: 'first fact', uniqueId: 0}, {usertitle: 'second title', fact: 'second fact', uniqueId: 1}, {usertitle: 'third title', fact: 'third fact', uniqueId: 2}])

let randomInteger;


function giveRandomInteger() {
  // this function will give a random number between 0 and the length of the array
  randomInteger = Math.floor(Math.random() * data.length);
}

function handleSubmit(title, fact) {
  // this function, when called, will add the value of Title and Fact to the end of the data array inside one object
  console.log('handleSubmit called by Input component');
  setData([...data, {usertitle: title, fact: fact, uniqueId: data.length}])
  // we may need to rename uniqueID to key/Key
  console.log(data);
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
  giveRandomInteger()
  setQuiz({usertitle: data[randomInteger].usertitle, fact: data[randomInteger].fact})
}

return (
  <body>
  <div className="App">
    <Input handleSubmit={handleSubmit} data={data} setData={setData} />
    <TestMe data={data} randomInteger={randomInteger} />
    {quiz && quiz.usertitle && <p>{quiz.usertitle}</p>}
    {quiz && quiz.fact && <p className='blurry-text'>{quiz.fact}</p>}
    <button onClick={quizField} className="TestMeBtn">Test Me</button>
  </div>
  </body>
);
}

export default App;
