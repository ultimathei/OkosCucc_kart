import React from 'react';
import './reset.css';
// import TimeLine from './Components/TimeLine';
import Kart from './Components/Kart';

const style = {
  textAlign: 'center',
  backgroundColor: 'white',
  padding: '2em',
  height: '100vh',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center'
}

function App() {

  return (
    <div style={style}>
      {/* <TimeLine/> */}
      <Kart />
    </div>
  );
}

export default App;
