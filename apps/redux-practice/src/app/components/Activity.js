import { useEffect, useState } from "react";
import{useHistory} from "react-router-dom";
import { io } from "socket.io-client";

export function Activity() {
  const history = useHistory();
  const [activities, setActivities] = useState([]);
  useEffect(()=>{
    const socket = io('http://localhost:3333/', { transports : ['websocket']});
    socket.on('connect', function() {
      console.log('Connected');
    });
    socket.on('activity',(newActivity)=>{
      setActivities((prevActivities)=>[...prevActivities,newActivity]);
    })
    socket.on("disconnect", () => {
      console.log('Disonnected');
    });
    return ()=>{socket.disconnect()}
  },[])
    return (
      <div>
        Bored???
        Try New Activity : -
        <div>
        {activities.length !== 0 ?
        activities.map((activ,i)=> (<div key={i}>{activ?.activity}</div>)) :
        'Loading ...'}
        </div>
        <button
          aria-label="backTohome"
          onClick={()=>{history.push('/')}}
        >
          gotohome
        </button>
      </div>
    );
  }

  export default Activity;
