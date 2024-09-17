import './index.css';
import TrafficContext from '../../context/TrafficContext';
const Yellow=()=> (
 
    <TrafficContext.Consumer>
        {(value)=>{
          const  {counter}=value
          let c =  counter>10 && counter<14?'yellow':'light'
          return (
        <div className={`${c}`}>
            </div>
          );
        }}


    </TrafficContext.Consumer>
)

export default Yellow;
