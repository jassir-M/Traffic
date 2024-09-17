import React from "react";


const TrafficContext = React.createContext({

pedestrain:()=>{},
reset:()=>{},
counter:0,
pedestrainRequested:false,
emergencyRequest:()=>{
    
}
})


export default TrafficContext
