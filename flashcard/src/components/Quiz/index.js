import React, { useState, useEffect } from 'react';

//Quiz component should take in the array which is data and the random integer which is randomInteger
//Quiz component should return a div with the title and fact of the object in the array at the index of the random integer
function TestMe(data, setQuiz, quiz){
const [randomInteger, setRandomInteger] = useState(null);

useEffect(() => {
    giveRandomInteger();
}, []);

//added again
function giveRandomInteger() {
    // this function will give a random number between 0 and the length of the array
    randomInteger = Math.floor(Math.random() * data.length);
    setRandomInteger(randomInteger);
  }

//handleClick function 
function handleClick(){
giveRandomInteger()
setQuiz({title: data[randomInteger].title, fact: data[randomInteger].fact})
    }


    return (
//display title and fact of the object in the array at the index of the random integer
<div>
    <p>{quiz.title}</p>
    <p>{quiz.fact}</p>
    <button onClick={handleClick}>Test Me</button>
</div>
    );
}

export default TestMe;