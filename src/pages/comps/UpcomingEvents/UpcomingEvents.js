import React, {useState} from 'react';
import './UpcomingEvents.scss';



function UEventsComp({date1,date2,event1,event2,style}){
  return(
    <div className="UEventsComp-rec" style={style}>

      <div className="UEC-recgray">
        <p>{date1}</p>
        <p>{date2}</p>
      </div>
      <div className="UECCONTENT">
        <p >{event1}</p>
        <p className="UECp1">{event2}</p>
      </div>

    </div>
  )
}



function UEvents({date,event}) {
    
  return (
    <div className="UEvents-tab">
      <p className="UEvents-header">Upcoming Events</p>

      <div className="UEventsDiv">
        <UEventsComp date1={'12'} date2={'Mar'} style={{marginRight:"1vw"}} event1={'Sports Day'} event2={'School Yard'}/>
        <UEventsComp date1={'20'} date2={'Mar'} event1={'Assembly'} event2={'School Hall'}/>

      </div>




      

    
    </div>

  );
}

export default UEvents;
