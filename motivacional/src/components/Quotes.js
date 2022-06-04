import {useState, useEffect} from "react";

import twitterIcon from "../twitter.svg";

const Quotes = () => {

 



  return (
    <div id="quote-box">
      <div id="text">
        <p>Frase</p>
      </div>
      <div id="author">
        <p>Jonas</p>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twet-quote">
            <img src={twitterIcon} alt="" />
          </a>
        </div>
        <button id="new-quote">Nova Frase</button>
      </div>
    </div>
  )
}

export default Quotes
