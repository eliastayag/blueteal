import React, {useState} from 'react';

import './Schedule.scss'



function Schedule() {
    
  return (
    <div className="sched-comp">
      <div style={{display:"flex", flexDirection:"column"}}>
        <p>8:00</p>
        <p>8:00</p>
        <p>8:00</p>
        <p>8:00</p>
        <p>8:00</p>
      </div>
      <div className="sched-days">
        <p className="sched-days-box sd1">Mon</p>
        <p className="sched-days-box sd2">Tues</p>
        <p className="sched-days-box sd3">Wed</p>
        <p className="sched-days-box sd4">Thu</p>
        <p className="sched-days-box sd5">Fri</p>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div className="sched-box1"></div>
        <div className="sched-box2"></div>
        <div className="sched-box3"></div>
        <div className="sched-box4"></div>
        <div className="sched-box5"></div>
        <div className="sched-box6"></div>
      </div>    
    </div>

  );
}

export default Schedule;
