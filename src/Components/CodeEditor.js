import React from "react";
import "./CreateRoom.css";

function CodeEditor() {
  return (
    <div className="code-edit">
      <div className="code-editor">
          <h3>question:</h3>
         
        <h3>
          You are given an array representing a row of seats where seats[i] = 1
          represents a person sitting in the ith seat, and seats[i] = 0
          represents that the ith seat is empty (0-indexed). There is at least
          one empty seat, and at least one person sitting. Alex wants to sit in
          the seat such that the distance between him and the closest person to
          him is maximized. Return that maximum distance to the closest person.
        </h3>
        <div></div>
      </div>
      <div className="code-editor">
        <div className="code-background">
          <div>
            <input
              style={{
                display: "flex",
                flexDirection: "row",
                height: "800px",
                width: "350px",
              }}
              type="text"
              onChange={(event) => {
                console.log(event.target.value);
              }}
            ></input>
          </div>
          <button>+</button>
          <button>submit</button>
        </div>
      </div>
      <div className="code-editor">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "20px",
            width: "100px",
          }}
        >
          <form>
            <label>say hi!</label>
            <input type="text"></input>
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
