import React from 'react';
import { NavLink, useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const points = state.points;
  console.log(state);
  const attempts = state.attempt.length;
  const percent = Math.round((points / 15) * 100);

  const result = () => {
    if (points < 6) return "Need Improvement!";
    if (points < 11) return "Good!";
    return "Great!";
  };

  return (
    <>
      <div className="contain">
      <h1>Result</h1>
      <div className="result">
        <h3>{result()}</h3>
        <h1>Your score is {percent}%</h1>
        <div style={{display: "flex",justifyContent: "space-between"}}>
          <div>
            {["Total question", "Attempted questions", "Correct answers", "Wrong answers"].map((label, index) => (
              <h4 key={index}>{label}</h4>
            ))}
          </div>
          <div>
            {[15, attempts, points, attempts - points].map((value, index) => (
              <h5 key={index}>{value}</h5>
            ))}
          </div>
        </div>
      </div>
      <br/>
      <div className='click'>
        <NavLink to="/Quiz">
          <button className='again'>Play Again</button></NavLink>
        <NavLink to="/">
          <button className='back'>Back</button></NavLink>
      </div>
      </div>
    </>
  );
}

export default Result;