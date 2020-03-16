import React, {useState} from 'react';

import './Schedule.scss'



function Schedule() {
    
  return (
    <div className="sched-comp">
      <div className="sched-days">
        <p className="sched-days-box sd1"></p>
        <p className="sched-days-box sd2">Mon</p>
        <p className="sched-days-box sd3">Tues</p>
        <p className="sched-days-box sd4">Wed</p>
        <p className="sched-days-box sd5">Thu</p>
        <p className="sched-days-box sd6">Fri</p>

      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div className="sched-box1">
        <p>8:00</p>
        <p>9:00</p>
        <p>10:00</p>
        <p>11:00</p>
        <p>12:00</p>
        <p>13:00</p>
        <p>14:00</p>
        <p>15:00</p>
        <p>16:00</p>
        <p>17:00</p>
        </div>
        <div className="sched-box2">
          <div className="time time-green">
            <p>10:00 - 11:30</p>
            <p>English 4 <br /> BCIT <br /> Henry Leung <br /> Pronouns + Verbs</p>
          </div>
        </div>
        <div className="sched-box3"></div>
        <div className="sched-box4"></div>
        <div className="sched-box5"></div>
        <div className="sched-box6"></div>
      </div>    
    </div>

  );
}

export default Schedule;
