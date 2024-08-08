import React, { useState } from 'react';
import './random.css'; // Import external stylesheet

const RandomNumberTask = () => {
  // State to hold the random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Function to generate random number between 1 and 100
  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
  };

  return (
    <div className="container">
      <h1 className="heading">Random Number Generator</h1>
      <div className="number-display">
        {randomNumber !== null ? randomNumber : '0'}
      </div>
      <button className="generate-btn" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
};

export default RandomNumberTask;
