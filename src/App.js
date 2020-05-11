//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./components/BottomRow";
import "./App.css";
import TopRow from "./components/TopRow";
import Buttons from "./components/Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const { timer, setTimer } = useState({
    minutes: 20,
    seconds: 0
  })

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow />
        {/* <Buttons homeScore={homeScore} awayScore={awayScore}/> */}
        <section className="buttons">
          <div className="homeButtons">

            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={() => setHomeScore(homeScore + 6)} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={() => setHomeScore(homeScore + 1)} className="homeButtons__extraPoint">Home Extra Point</button>
            <button onClick={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>

          </div>
          <div className="awayButtons">
            <button onClick={() => setAwayScore(awayScore + 6)} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={() => setAwayScore(awayScore + 1)} className="awayButtons__extraPoint">Away Extra Point</button>
            <button onClick={() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>

          </div>
        </section>
      </section>
    </div>
  );
}


export default App;
