import React from 'react';

import './Calendar.scss'


function Calendar(){
    return(
        <div className="calendar">
            {/* TITLE */}
            {/* <p>Calendar</p> */}
            {/* YEAR */}
            {/* <p>Feburary 2020</p> */}
            {/* DAYS
            <div className="days">
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>T</p>
            <p>F</p>
            <p>S</p>
            </div> */}
            {/* DAYS NUMBERS */}
            <img src={require('../../../imgs/Calendar.png')}  id="calendar"/>
        </div>
    )
}



export default Calendar;