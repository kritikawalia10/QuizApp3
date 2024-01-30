import React from "react";
import {NavLink } from "react-router-dom";

function Home() {
    return (
      <div className="home">
        <h2>Quiz</h2>
        <NavLink to="/Quiz">
         <button className="start">
          Start
          </button>
        </NavLink>
      </div>
    );
  }

export default Home;