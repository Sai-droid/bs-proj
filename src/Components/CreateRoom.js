import React from 'react'
import './CreateRoom.css';

function CreateRoom() {
  return (
    <div className="createRoom">
       Difficulty:
        <select>
            <option>easy</option>
            <option>hard</option>
            <option>medium</option>
        </select>
        duration:
        <select>
            <option>10m</option>
            <option>15m</option>
            <option>20m</option>
        </select>
        questionlink:
        <input type ="text" />
        <div>
            <button>cancel</button>
            <button>createroom</button>
        </div>
    </div>
  )
}

export default CreateRoom