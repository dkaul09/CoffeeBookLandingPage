import './App.css'
import React, {useState} from "react";
import {Login} from "./login";
import {Register} from "./register";
import Navbar from './navbar';

function App() {
  const [count, setCount] = useState(0)
  let component 
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <Navbar/>
   <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
   </>
  );
}

export default App;
