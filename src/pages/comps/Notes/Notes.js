import React from 'react';
import './Notes.scss'



function Notes(){
    return(
        <div className='notes'>
            <p>Notes</p>
        </div>
    )
}

Notes.defaultProps = {
    style:{
        backgroundColor:"#FFF8C9",
        height:"50vh",
        width:"50vh",
        padding:"5px",
    // deprecated
    }
}

export default Notes;