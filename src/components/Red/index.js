import './index.css';
import TrafficContext from '../../context/TrafficContext';
const Red=()=>(
  
    <TrafficContext.Consumer>
        {(value)=>{
          const  {counter,pedestrainRequested}=value
          console.log(pedestrainRequested)
          let c = pedestrainRequested?counter>13 && counter <26?'red':'light' : counter>13 && counter <21?'red':'light'
          return (
        <div className={`${c}`}>
            </div>
          );
        }}


    </TrafficContext.Consumer>
)

export default Red;
