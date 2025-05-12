import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };
  
  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };

  const handleClearClick = () => {
    console.log("Clearcase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyClick = () => {
    console.log("Copycase was clicked");
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (Event) => {
    console.log("On change");
    setText(Event.target.value);
  };

  const [text, setText] = useState(" Enter text here");
  // setText("new text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopyClick}>
          Copy text
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          onClick={handleExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black"}}
      >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word.trim() !== "").length} words and {text.length} Characters</p>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the texbox above to preview it here"}</p>
        {/* <p>{text}</p> */}
      </div>
    </>
  );
}
