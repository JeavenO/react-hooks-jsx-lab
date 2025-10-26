import React from "react";
// Note: The prompt showed 'image' from '../data/data'
import { image } from "../data/data"; 

function About() {
  // update the JSX being returned!
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am building a portfolio website with React and JSX!</p> 
      {/* The src must be the imported image variable */}
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;