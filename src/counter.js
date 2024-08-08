import React, { useState } from 'react';
import './counter.css'; // Import external CSS file

const IncrementDecrement = () => {
    // Initialize state with useState hook
    const [count, setCount] = useState(0);

    // Function to increment the count
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to decrement the count
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="container">
            <h1>Increment / Decrement Counter</h1>
            <div className="count-display">
                {count}
            </div>
            <div className="button-group">
                <button className="btn increment-btn" onClick={incrementCount}>
                    Increment
                </button>
                <button className="btn decrement-btn" onClick={decrementCount}>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default IncrementDecrement;
