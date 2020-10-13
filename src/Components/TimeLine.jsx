import React, { useState, useEffect, useRef } from 'react';
import Wave from './Wave';

/*
* STYLES
*/
const mainStyle = {
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-end',
  padding: '2em'
}
const pathStyle = {
  width: '100 %',
  fill: 'none',
  stroke: '#000',
  strokeLinecap: 'round',
  strokeMiterlimit: '10',
  strokeWidth: '16px',
  strokeDashoffset: '0',
  strokeDasharray: '100',
}
const svgStyle = {
  marginBottom: '2em',
  width: '100%',
  overflow: 'hidden',
  flexGrow: '1'
}
const buttonStyle = {
  display: 'inline-block',
  margin: '10px auto',
  marginRight: '10px',
  border: 'none',
  color: 'white',
  backgroundColor: '#647DFF',
  borderRadius: '2px',
  fontSize: '15px',
  padding: '20px 40px',
  margin: '40px'
};

/**
 * 
 */
const TimeLine = (props) => {
  const [currentPosition, setCurrentPosition] = useState(parseFloat(localStorage.getItem('position')) || 0);
  const inputRef = useRef(null);
  const now = useRef(parseFloat(localStorage.getItem('position')) || 0);
  const timeIntervalRef = useRef(null);


  const events = {
    eventA: 18,
    eventB: 63
  }

  //get position from localstorage on reload (or set to 0)
  useEffect(() => {
    
    return () => {
      //cleanup
    }
  }, []);//loaded only once on pageload

  //set (update) localstorage 
  useEffect(() => {
    localStorage.setItem('position', now.current.toFixed(2));
    if (now.current < 100 && (timeIntervalRef.current === null)) startTimer();
    return () => {
      //cleanup
    }
  }, [now.current]);//when current pos changes

  //sense of time here
  const startTimer = () => {
    timeIntervalRef.current = setInterval(() => {
      if (now.current >= 100) {
        clearInterval(timeIntervalRef.current);
        timeIntervalRef.current = null;
      }
      else {
        setCurrentPosition(() => {
          now.current += 0.3;
          return now.current;
        });
      }
    }, 1000);
  }

  //move 10 increment forward/backwards
  const step = (key) => {
    let move = now.current + ({
      forwards: 10,
      backwards: -10
    }[key]);

    if (move > 100) move = 100;//higher cap
    if (move < 0) move = 0;//lower cap
    setCurrentPosition(() => parseInt(move));
    now.current = parseInt(move);
  }

  //jumping to given location on the timeline
  const jumpTo = (newPos) => {
    if (0 > newPos || newPos > 100) return;
    setCurrentPosition(() => parseInt(newPos));
    now.current = parseInt(newPos);
  }

  //TODO - does not seem to work
  const disabledButtonStyle = { backgroundColor: "grey !important" };


  return (
    <div style={mainStyle}>
      <Wave
        endingPos={currentPosition || 0}
        style={svgStyle}
        defaultPathStyle={pathStyle} />
      <h2 style={{color: "white"}}>Completed: {parseInt(now.current)} %</h2>
      <div style={{ flexGrow: '0' }}>
        <button
          style={buttonStyle}
          onClick={() => step('backwards')}
          disabled={(currentPosition <= 0)}
        >
          Go back (-10)
        </button>
        <button
          style={buttonStyle}
          onClick={() => step('forwards')}
          disabled={(now.current >= 100)}
        >
          Go Forward (+10)
        </button>
        <br />
        {/*
        <input type="number"
          min="0" max="100" size="3"
          placeholder="0"
          style={buttonStyle}
          ref={inputRef}
        />
        <button
          style={buttonStyle}
          onClick={(e) => jumpTo(inputRef.current.value || 0)}
        >
          Jump
        </button>
        */}
        <button
          style={buttonStyle}
          onClick={(e) => jumpTo(events["eventA"])}
        >
          Go to event A
        </button>
        <button
          style={buttonStyle}
          onClick={(e) => jumpTo(events["eventB"])}
        >
          Go to event B
        </button>
        {/*
        <button
          style={buttonStyle}
          onClick={startTimer}
        >
          Start timer
        </button>
        */}
      </div>
    </div>
  )
}

export default TimeLine

/* BIN

  function mousedown(event) {
    if (mouseIDRef.current == -1)  //Prevent multimple loops!
      mouseIDRef.current = setInterval(whilemousedown, 100 );
  }
  function mouseup(event) {
    if (mouseIDRef.current != -1) {  //Only stop if exists
      clearInterval(mouseIDRef.current);
      mouseIDRef.current = -1;
    }
  }
  function whilemousedown() {

    if(currentPosition<=0) {
      clearInterval(mouseIDRef.current);
      mouseIDRef.current = -1;
    }
    console.log("do stuff",mouseIDRef.current);
    setCurrentPosition(currentPosition=>currentPosition-1);
  }
  */