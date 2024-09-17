import TrafficContext from '../../context/TrafficContext';
import './index.css';

const Green=()=> (


    <TrafficContext.Consumer>
        {(value)=>{
          const  {counter}=value
          let c =   counter<=10?'green':'light'
          return (
        <div className={`${c}`}>
            </div>
          );
        }}


    </TrafficContext.Consumer>
 
)

export default Green;
