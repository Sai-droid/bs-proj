import React from "react";
import "./CreateRoom.css";
import {NavLink} from 'react-router-dom'
function CodeEditor() {
  return (
      
    <div className="code-edit">
        
      <div className="code-editor">
          <h3>question:</h3>
         
        <h3>
          you are given two integers x and y .add them
        </h3>
        <div>
          <h3>output format</h3>
          <h4>z</h4>
        </div>
        <div></div>
      </div>
      <div className="code-editor">
        <span><h2>codeEditor</h2></span>
        <div className="code-background">
          <div>
            <textarea
            placeholder=" // public class MyClass {
              public static void main(String args[]) {
                int x=10;
                int y=25;
                int z=x+y;
          
                System.out.println(z);
              }
          } "
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
            />
          </div>
          <button>run</button>
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
            <NavLink exact to ="/" > <button><i class="fas fa-home"></i>

home</button></NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
