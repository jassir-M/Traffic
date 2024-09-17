
import { useState,useEffect } from 'react';
import Green from './components/Green';
import Red from './components/Red';
import Yellow from './components/Yellow';
import TrafficContext from './context/TrafficContext';
import Pedestrain from './components/Pedestrain';

import walk from './images/crosswalk.png'

import './App.css';

let timerId
function App() {

  let [counter,setCounter]=useState(0)
  let[pedestrainRequested,setRequest]=useState(false)


  const pedestrain=()=>{
      console.log("pedestrain requested")
      setCounter(14)
      setRequest(!pedestrainRequested)

  }

  const reset=()=>{
    console.log('reset ')
    setTimeout(timerId)
    setCounter(0)
    if (pedestrainRequested){
         setRequest(!pedestrainRequested)
        
    }
  }


  const emergencyRequest=(colour)=>{
    if (colour==="Red"){
      setCounter(14)
    }else if(colour==="Yellow"){
      setCounter(11)
    }else if (colour==='Green'){
      setCounter(0)
    }
  }

  useEffect(()=>{
      timerId=setInterval(()=>{
         setCounter(prev=>prev+1)
     },1000)
  },[]

  
 
)

if (counter===20 && !pedestrainRequested){
    setCounter(0)
}else if (counter===26){
  setCounter(0)
  setRequest(!pedestrainRequested)
}


  console.log(counter)
  return (
    <TrafficContext.Provider value={{
      pedestrain:pedestrain,
      reset:reset,
      counter:counter,
      pedestrainRequested:pedestrainRequested,
      emergencyRequest:emergencyRequest
    }}>
      
      <div className="App">
      <h1>Traffic Light Controller</h1>
        <div className='align'>
       <div className='left'>
       <div className="traffic-light">
      <Red/>
      <Yellow/>
      <Green/>
      </div>
      {counter>13?<img src={walk} alt="crossing sign" />:<p></p>}
       </div>
     

      <div>
        <div>
        <Pedestrain/>
      </div>
      </div>
      
        </div>

      
      
      
    </div>
      

    </TrafficContext.Provider>
    
  );
}

export default App;

