import React, { useState } from "react";

function YesButton({ handleClick, size }) {
  const buttonStyle = {
    padding: `${size}px ${1.2 * size}px`,
    margin: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "padding 0.3s",
    backgroundColor: "#4caf50", // Green
    color: "white",
  };

  return (
    <div className="button-container">
      <button style={buttonStyle} onClick={handleClick}>
        Yes
      </button>
    </div>
  );
}

function NoButton({ handleNoClick, children }) {
  return (
    <div className="button-container">
      <button className="no-button" onClick={handleNoClick}>
        {children}
      </button>
    </div>
  );
}

function Gif({ image }) {
  return (
    <div>
      <img src={image} alt="Cute Love Bear" style={{ height: "250px" }} />
    </div>
  );
}

function App() {
  const [image, setImage] = useState(
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
  );
  const [text, setText] = useState("Will You Be My Valentine??");
  const [buttonSize, setButtonSize] = useState(13);
  const [index, setIndex] = useState(0); // State to track the current index
  const [noText, setNoText] = useState("No");
  const [yesClicked, setYesClicked] = useState(false);

  const handleYes = () => {
    setImage(
      "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
    );
    setButtonSize(10);
    setText("Yayyy, I knew it");
    setYesClicked(true);
  };

  const handleNo = () => {
    setButtonSize((prevSize) => prevSize * 1.3);
    setIndex((prevIndex) => (prevIndex + 1) % data.length); // Update index cyclically
    setNoText(data[index]); // Update text based on the new index
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <Gif image={image} />
      </div>
      <h1>{text}</h1>
      <div style={{display: "flex", flexDirection:"row"}}>
        {!yesClicked && (
          <div>
            <YesButton handleClick={handleYes} size={buttonSize} />
          </div>
        )}
        {!yesClicked && (
          <div>
            <NoButton handleNoClick={handleNo}>{noText}</NoButton>
          </div>
        )}
      </div>
    </div>
  );
}

const data = [
  // "No",
  "Are You sure?",
  "Are You really sure?",
  "Like really sure?",
  "Like very much sure?",
  "like sure kinda sure",
  "think about it",
  "take some more time",
  "Okay fine I give up",
  "just kidding, I won't give up on you",
  "never, say yes please",
  "I know how to cook",
  "I can share you my instagram",
  "please please please",
  "last try",
  "No?"
];

export default App;
