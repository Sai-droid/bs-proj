import './App.css';
import CreateRoom from './Components/CreateRoom';
import React,{useState} from 'react';

function App() {
  const [toggle,setToggle] = useState(false);

  const ontoggle = () =>{
    setToggle(!toggle);
  }
  return (
    <div className="App">
      <header className="App-header">
        {toggle && <CreateRoom />}
       <button  onClick ={ontoggle}>create room</button>
      </header>
    </div>
  );
}

export default App;
