import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Wath = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStep = steps + 1;
        setSteps(newStep);
    }

    useEffect(() => {
        // console.log(steps)
    }, [steps])
    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h1>I have many watches</h1>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Go fast</button>
            <Display name='maisa' steps={steps}></Display>
        </div>
    );
};

export default Wath;