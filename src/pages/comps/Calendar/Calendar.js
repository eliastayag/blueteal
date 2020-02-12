import React from 'react';



function Calendar({style}){
    return(
        <div style={style}>
            <p>this is a calendar</p>
        </div>
    )
}

Calendar.defaultProps = {
    style:{
        backgroundColor:"gainsboro"
    }
}

export default Calendar;