import "./App.css";
import React from "react";
import Input from "../Input";
import { useState } from "react";
import TestMe from "../Quiz";
let appId = "5f9b3b1c9b2c4d0001c3b0a9";

let dummyDataSet = [
  { usertitle: "first title", fact: "first fact", uniqueId: 0 },
  { usertitle: "second title", fact: "second fact", uniqueId: 1 },
  { usertitle: "third title", fact: "third fact", uniqueId: 2 },
];

function App() {
  // created state for input. Initally set as an empty string
  const [input, setInput] = useState("");
  const [quiz, setQuiz] = useState({ usertitle: "", fact: "" });

  // const data = [];
  const [data, setData] = useState(dummyDataSet);

  let randomInteger;

  function giveRandomInteger() {
    // this function will give a random number between 0 and the length of the array
    randomInteger = Math.floor(Math.random() * data.length);
  }

  function handleSubmit(title, fact) {
    const storedData = JSON.parse(localStorage.getItem("data")) || dummyDataSet;

    // Add the new data to the array
    const updatedData = [
      ...storedData,
      { usertitle: title, fact: fact, uniqueId: data.length },
    ];

    localStorage.setItem("data", JSON.stringify(updatedData));

    setData(updatedData);
    console.log(updatedData);
  }

  function clearFacts() {
    // Clear the "facts" array and remove all stored items from local storage.
    localStorage.removeItem("data");

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
    <body>
      <div className="App">
        <Input handleSubmit={handleSubmit} data={data} setData={setData} />
        <TestMe data={data} randomInteger={randomInteger} />
        {quiz && quiz.usertitle && <p className="quizTitle">{quiz.usertitle}</p>}
        <br></br>
        {quiz && quiz.fact && <p className="blurry-text">{quiz.fact}</p>}

        <img className="riddler" src = "./Images/Riddler-removebg.png" alt="riddler Photo" ></img>
        <div className="testMeDiv">
        <button onClick={quizField} className="TestMeBtn">
          Test Me</button>
        </div>
        <button onClick={clearFacts} className="clearFactsButton">Clear Facts</button>
        <div className="logo"></div>
      </div>
    </body>
  );
}

export default App;
