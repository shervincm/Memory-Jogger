/*import React, { useState, useEffect } from 'react';

//Quiz component should take in the array which is data and the random integer which is randomInteger
//Quiz component should return a div with the title and fact of the object in the array at the index of the random integer
function TestMe({data, setQuiz, quiz}){
    const [randomInteger, setRandomInteger] = useState(null);

    useEffect(() => {
        giveRandomInteger();
    }, []);

    function giveRandomInteger() {
        // this function will give a random number between 0 and the length of the array
        let randomInteger = Math.floor(Math.random() * data.length);
        setRandomInteger(randomInteger);
    }

    function handleClick(){
        giveRandomInteger()
        setQuiz({usertitle: data[randomInteger].usertitle, fact: data[randomInteger].fact})
    }

    return (
        <div>
            {quiz && quiz.usertitle && <p>{quiz.usertitle}</p>}
            {quiz && quiz.fact && <p>{quiz.fact}</p>}
            <button onClick={handleClick}>Test Me</button>
        </div>
    );
}

export default TestMe; */

import React, { useState, useEffect } from 'react';
function TestMe({data, randomInteger}){
  function handleClick(){
    giveRandomInteger()
  }
  function giveRandomInteger() {
    let randomInteger = Math.floor(Math.random() * data.length);
    console.log(`randomInteger: ${randomInteger}`)
  }
  useEffect(() => {
    giveRandomInteger();
  }, []);
  return (
    <div>
      
    </div>
  );
}
export default TestMe;