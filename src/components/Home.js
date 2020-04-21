import React from "react";
import "../App.css";

function Home() {
  const sayhi = () => {
    console.log("hi");
  };
  return (
    <div id="container">
      <div className="home" id="title">
        CHORDi
      </div>
      <div id="buttonContainer">
        <button id="mainButton" onClick={sayhi}>
          What's That Chord?
        </button>
      </div>
      {/* <footer>about</footer> */}
    </div>
  );
}

export default Home;
