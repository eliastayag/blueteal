import React from 'react';
import './Notes.scss'



function Notes({style}){
    return(
        <div className='notes' style={style}>
            <input className="notesTitle" placeholder="Insert Title"></input>
            <textarea className="box1-input notes-text" placeholder="Type something here..."></textarea>
        </div>
    )
}

Notes.defaultProps = {

}



export default Notes;