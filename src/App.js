//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./components/BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

 

    const homeTD = e => {
      setHomeScore(homeScore + 6)
    }

    const homeXP = e => {
      setHomeScore(homeScore + 1)
    }

    const homeFG = e => {
      setHomeScore(homeScore + 3)
    }

    const awayTD = e => {
      setAwayScore(awayScore + 6)
    }

    const awayFG = e => {
      setAwayScore(awayScore + 3)
    }

    const awayXP = e => {
      setAwayScore(awayScore + 1)
    }

    const quarterBtn = e => {
      if(quarter < 4) {
        setQuarter(quarter + 1);
      } else {
          setQuarter(1);
        }
      
    }

  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>


        <BottomRow quarter={quarter} />


        
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTD} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={homeXP} className="homeButtons__extraPoint">Home Extra Point</button>
          <button onClick={homeFG} className="homeButtons__fieldGoal">Home Field Goal</button>

        </div>
        <div className="awayButtons">
          <button onClick={awayTD} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayXP} className="awayButtons__extraPoint">Away Extra Point</button>
          <button onClick={awayFG} className="awayButtons__fieldGoal">Away Field Goal</button>

        </div>
        <div className="quarterButton">
          <button onClick={quarterBtn} className="quarter_Button">Quarter</button>

        </div>
      </section>
    </div>
  );
}

export default App;