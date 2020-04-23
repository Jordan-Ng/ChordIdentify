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

      <div id="clickMe">Let's Get You Started!</div>

      <div id="mainButton" onClick={sayhi}>
        <div className="buttonText">What's That Chord?</div>
      </div>
      {/* <footer>about</footer> */}
    </div>
  );
}

export default Home;
