import React from 'react';



function Notes({style}){
    return(
        <div style={style}>
            <p>notes!</p>
        </div>
    )
}

Notes.defaultProps = {
    style:{
        backgroundColor:"#FFF8C9",
        height:"50vh",
        width:"50vh",
        padding:"5px",
    }
}

export default Notes;