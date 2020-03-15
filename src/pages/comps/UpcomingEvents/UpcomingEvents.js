import React, {useState} from 'react';
import './UpcomingEvents.scss';



function UEventsComp({date1,date2,event1,event2,style}){
  return(
    <div className="UEventsComp-rec" style={style}>
      <div className="UEC-recgray">
        <p>{date1}</p>
        <p>{date2}</p>
      </div>
      {/* <p >Sports Day</p>
      <p className="UECp1">School Hall</p> */}
    </div>
  )
}



function UEvents({date,event}) {
    
  return (
    <div className="UEvents-tab">
      <p className="UEvents-header">Upcoming Events</p>

      <div className="UEventsDiv">
        <UEventsComp date1={'12'} date2={'Mar'} style={{marginRight:"1vw"}}/>
        <UEventsComp date1={'20'} date2={'Mar'}/>

      </div>




      

    
    </div>

  );
}

export default UEvents;
