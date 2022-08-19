import './App.css';
import axios from "axios";
import Greeting from './components/Greeting';
import { useEffect, useState } from 'react';
const API_URL="http://localhost:3000/api/v1/greetings";

function getAPIData(){
  return axios.get(API_URL).then((response)=> response.data)
}

function App() {
  const [greetings, setGreetings]=useState([]);
useEffect(()=>{
  let mounted=true;
  getAPIData().then((items)=>{
    console.log(items)
    if (mounted){
      setGreetings(items);
    }
  });
  return () => (mounted=false);
}, []);

  return (
    <div className="App">
    <h1>Greeting App</h1>
    <Greeting greetings={greetings}/>
    </div>
    
  );
}

export default App;

