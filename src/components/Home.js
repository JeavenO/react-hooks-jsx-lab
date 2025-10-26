import React from "react";
// Note: The prompt showed 'name' and 'city' from '../data/data.js'
import { name, city } from "../data/data.js"; 

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {/* Use JSX expression syntax {} for variables */}
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
