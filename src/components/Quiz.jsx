import React, { useState } from "react";
import questions from "../resources/Question.json";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

function Quiz() {
  const [num, setnum] = useState(0);
  const [point, Totalpoint] = useState(0);
  const [attempt, Attempt] = useState([]);
  const redirect = useNavigate();

  const Next = () => setnum((prev) => (prev < 14 ? prev + 1 : prev));
  const Previous = () => setnum((prev) => (prev > 0 ? prev - 1 : prev));

  const Option = (e) => {
    const guess = e.target.innerText;
    const Final = guess === questions[num].answer;
    alert(Final ? "Correct" : "Incorrect");
    if (!attempt.includes(num)) {
      Attempt((prevs) => [...prevs, num]);
      Totalpoint((previous) => (Final ? previous + 1 : previous));
    }
  };

  const final = () => redirect("/Result", { state: { point, attempt } });

  const Quit = () => {
    if (window.confirm("Lose all progress?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="container" >
      <h1>Question</h1>
      <div>
        <span>{num + 1} of 15</span>
        <h3>{questions[num].question}</h3>
      </div>

      <div className="options">
        {["A", "B", "C", "D"].map((option, index) => (
          <p key={index} className="option" onClick={Option}>{questions[num][`option${option}`]}</p>
        ))}
      </div>

      <div>
        <button className="last" onClick={Previous}> Previous </button>
        <button className="next" onClick={Next}> Next </button>
        <button className="quit" onClick={Quit}> Exit </button>
        <button className="end" onClick={final}> Finish </button>
      </div>
    </div>
  );
}

export default Quiz;