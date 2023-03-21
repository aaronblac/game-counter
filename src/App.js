import './App.css';
import Button from './components/button';
import { useState } from 'react';


function App() {

  const [countHome, setCountHome] = useState(0);
  const [countGuest, setCountGuest] = useState(0);
  
  
  const handleAddHome1 = () =>{
    setCountHome(countHome+1);
   }
  const handleAddHome2 = () =>{
    setCountHome(countHome+2);
   }
  const handleAddHome3 = () =>{
    setCountHome(countHome+3);
   }
  const handleAddGuest1 = () =>{
    setCountGuest(countGuest+1);
   }
  const handleAddGuest2 = () =>{
    setCountGuest(countGuest+2);
   }
  const handleAddGuest3 = () =>{
    setCountGuest(countGuest+3);
   }
  
  const handleReset = () =>{
    setCountHome(0);
    setCountGuest(0);
   }

  return (
    <div className="App">
      <div className="container">
        <div className="score-container">
            <div className="scores">
                <h3>HOME</h3>
                <div className="score-cont" style={{backgroundColor: countHome > countGuest ? '#b7e1b7':'#080001'}}>
                    <span id="home-score">{countHome}</span>
                </div>
                <div className="container-button">
                  <Button add={handleAddHome1} buttonText="+1"></Button>
                  <Button add={handleAddHome2} buttonText="+2"></Button>
                  <Button add={handleAddHome3} buttonText="+3"></Button>
                </div>
                {/* <Button classAdd="largeButton" add={handleResetHome} buttonText="Reset"></Button> */}
            </div>
            <div className="scores">
                <h3>GUEST</h3>
                <div className="score-cont" style={{backgroundColor: countHome < countGuest ? '#b7e1b7':'#080001'}}>
                    <span id="guest-score">{countGuest}</span>
                </div>
                <div className="container-button">
                  <Button add={handleAddGuest1} buttonText="+1"></Button>
                  <Button add={handleAddGuest2} buttonText="+2"></Button>
                  <Button add={handleAddGuest3} buttonText="+3"></Button>
                </div>
                  {/* <Button classAdd="largeButton" add={handleResetGuest} buttonText="Reset"></Button> */}
            </div>
        </div>
        <Button classAdd="redButton" add={handleReset} buttonText="New Game"></Button>
      </div>
    </div>
  );
}

export default App;
