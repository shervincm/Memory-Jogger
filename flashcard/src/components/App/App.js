import './App.css';
// imported useState from react
import { useState } from 'react';

// created state for input. Initally set as an empty string
const [input, setInput] = useState('')

// function for input value
function inputField(event){
  
  // set the state to the value of the input 
  setInput(event.target.value)
  // create a new array with the spread operator with the value of the input
  const quizArray = [...input] 
}

function quizField(){
  const [quiz, setQuiz] = useState({})
  setQuiz 
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
