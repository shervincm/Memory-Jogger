import './App.css';
// imported useState from react
import { useState } from 'react';

// created state for input. Initally set as an empty string
const [input, setInput] = useState('')
const [quiz, setQuiz] = useState({})

// function for input value
function inputField(event){
  
  // set the state to the value of the input 
  setInput(event.target.value)
  // create a new array with the spread operator with the value of the input
  const quizArray = [...input] 
}
//create random number generator
function randomNumberGenerator(quizArray){
  // create a variable for the random number
  //goes through array quizArray and pick a random number
  const randomNum = Math.floor(Math.random() * quizArray.length)
  // return the random number
  return randomNum
}

function quizField(){
  setQuiz()
}

function App() {
  return (
    <div>
    <Form/>
    <Quiz/>
    <Display/>
    </div>
  );
}

export default App;
