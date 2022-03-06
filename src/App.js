import "./App.css";
import CreateRoom from "./Components/CreateRoom";
import React, { useState } from "react";
import CodeEditor from "./Components/CodeEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
     
      <Routes>
         <Route  exact path="/" element = {<PublicPage/>}/>
        <Route exact path="/goto" element={<CodeEditor />} />
      </Routes>
    </div>
  );
}

const PublicPage = () => {
  const [toggle,setToggle] = useState(false);
  const ontoggle =() =>{
    setToggle(!toggle);
  }
  return (
    <>
     <header className="App-header">
     {toggle && <CreateRoom toggle={ontoggle} />}
      <button onClick={ontoggle}>create room</button>
      </header>
      
    </>
  );
};
