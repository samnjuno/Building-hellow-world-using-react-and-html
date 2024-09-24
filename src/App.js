import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //javascript logic
  //create a state
  const[message ,setMessage] = useState('Hello World');

  const handleclick = ()=> {
    setMessage('Clicked')
  };

//render jsx (html and css)
return(
  <div>
    <h1>{message}</h1>
    <button onclick={handleclick}>Press me</button>
  </div>
);




}
  

export default App;
