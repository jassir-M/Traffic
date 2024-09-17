import './index.css'
import TrafficContext from '../../context/TrafficContext'
import walk from '../../images/sign.png'



const Pedestrain=()=>(
<TrafficContext.Consumer>
    {(value)=>{
        const {pedestrain,reset,emergencyRequest}=value
     
     const   PassTheRequest=()=>{
            pedestrain()
        }

      const ResetTheCounter=()=>{
           reset()
      }  

      const EmergencyRequest=(event)=>{
        emergencyRequest(event.target.value)
        console.log(event.target.value)
      }
     return (
        <div className='btn-container'>
            <div>
            <button className='button' onClick={PassTheRequest}><img className='icon' src={walk} alt="sign"/></button>
            </div>
          <div>
           <button className='button' onClick={ResetTheCounter}>Reset</button>
        </div>
        <div>
        <button className='button' value={'Red'} onClick={EmergencyRequest}>Red</button>
        <button className='button' value={'Yellow'}onClick={EmergencyRequest}>Yellow</button>
        <button className='button' value={'Green'}onClick={EmergencyRequest}>Green</button>


        </div>
        </div>
    )
}
}
</TrafficContext.Consumer>

   
)


export default Pedestrain