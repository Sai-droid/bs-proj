import React from "react";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";
import "./CreateRoom.css";
import CodeEditor from "./CodeEditor";

function CreateRoom(props) {
  let navigate = useNavigate();
  const createContest = () => {
    navigate("/goto");
  };

  return (
    <div className="create">
      
  
        
          <button  onClick={props.toggle} style={{ borderRadius: "100px",float:'right' }}>
            X
          </button>
        
    
      Difficulty:
      <select>
        <option>easy</option>
        <option>hard</option>
        <option>medium</option>
      </select>
     <span>duration:<i class="far fa-clock"></i></span> 

      <select>
        <option>10m</option>
        <option>15m</option>
        <option>20m</option>
      </select>
      questionlink:
      <input type="text" />
      <div className="cancel-button">
        <button onClick={createContest}>startRoom</button>
      </div>
    </div>
  );
}

export default CreateRoom;
