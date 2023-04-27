import "./App.css";
import React from "react";
import Input from "../Input";
import { useState } from "react";
import TestMe from "../Quiz";
import logo from "../../Images/logo-nobg.png";
let appId = "5f9b3b1c9b2c4d0001c3b0a9";

let dummyDataSet = [
  { usertitle: "useState", fact: "Allows you to manage state in a functional component. Makes it easier to manage and update state in response to user interactions or other events. Helps keep your component code organized by separating concerns", uniqueId: 0 },
  { usertitle: "useEffect", fact: "Is a React Hook that allows you to perform side effects in a functional component, such as fetching data from an API, updating the DOM, or subscribing to an event, after rendering has occurred.", uniqueId: 1 },
  { usertitle: "CSS", fact: "CSS, or Cascading Style Sheets, is a language used to describe the presentation of HTML and XML documents.", uniqueId: 2 },
];

function App() {
  // created state for input. Initally set as an empty string
  const [input, setInput] = useState("");
  const [quiz, setQuiz] = useState({ usertitle: "", fact: "" });

  // the key name links the file name of data to the appID so that the locally stored file is unique to our app and cant be manipulated by other apps using local storage
  let keyName = `data_${appId}`;

  const [data, setData] = useState(JSON.parse(localStorage.getItem(keyName)) || dummyDataSet);

  let randomInteger;

  function giveRandomInteger() {
    // this function will give a random number between 0 and the length of the array
    randomInteger = Math.floor(Math.random() * data.length);
  }

  function handleSubmit(title, fact) {
    const storedData = JSON.parse(localStorage.getItem(keyName)) || dummyDataSet;

    // Add the new data to the array
    const updatedData = [ ...storedData,{ usertitle: title, fact: fact, uniqueId: data.length }, ];

    localStorage.setItem(keyName, JSON.stringify(updatedData));

    setData(updatedData);
    console.log(updatedData);
  }

  function clearFacts() {
    // Clear the "facts" array and remove all stored items from local storage.
    localStorage.removeItem(keyName);

    setData(dummyDataSet);
  }

  function quizField() {
    giveRandomInteger();
    setQuiz({
      usertitle: data[randomInteger].usertitle,
      fact: data[randomInteger].fact,
    });
  }

  return (
    <div>
      <div className="App">
      <div className="header"> Scriptastic 4 Memory Jogger </div>
      <img src={logo}/>
        <Input handleSubmit={handleSubmit} data={data} setData={setData} />
        <TestMe data={data} randomInteger={randomInteger} />
        {quiz && quiz.usertitle && 
                  <p className="quizTitle">{quiz.usertitle}</p>}
          <br></br>
          {quiz && quiz.fact && <p className="blurry-text">{quiz.fact}</p>}
        
        <div className="riddler" /*src = "../../Images/Riddler-removebg.png" alt="riddler Photo"*/ ></div>
        <div className="testMeDiv">
        <button onClick={quizField} className="TestMeBtn">
          Test Me</button>
        </div>
        <button onClick={clearFacts} className="clearFactsButton">Clear Facts</button>
      </div>
      
    </div>
    
  );
}

export default App;
