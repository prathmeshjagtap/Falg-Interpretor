import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag",
  "🎸": "Guitar",
  "❤️": "Red Heart",
  "⌛": "Hourglass",
};

function App() {
  const [userInput, setuserInput] = useState("");
  const emojisKey = Object.keys(emojiDictionary);

  const handleChange = (e) => {
    if (emojiDictionary[e.target.value] === undefined) {
      setuserInput("Emoji You Searched Not found in our database!");
    } else {
      setuserInput(emojiDictionary[e.target.value]);
    }
  };
  const handleClick = (emoji) => {
    setuserInput(emojiDictionary[emoji]);
  };
  return (
    <div>
      <header className="header">
        <h1>Flag Interpretor</h1>
      </header>
      <div className="content">
        <input
          className="input"
          placeholder="Add emojis here to search its Meaning"
          type="text"
          onChange={handleChange}
        />
        <h2>{userInput}</h2>
        <h2>"Search/click on emojis to see their meanings"</h2>
        <div className="emojiView">
          {emojisKey.map((emoji, index) => (
            <span
              key={index}
              onClick={() => handleClick(emoji)}
              className="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <div className="footer">
        <h1>About Flag Interpretor</h1>
        <p>Flag Interpretor is a place to search emojis meaning.</p>
      </div>
    </div>
  );
}

export default App;
