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
        backgroundColor:"yellow"
    }
}

export default Notes;