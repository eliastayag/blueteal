import React from 'react';
import './Notes.scss'



function Notes(){
    return(
        <div className='notes'>
            <p className='notes-text'>Notes</p>
            <input type="text" className="notesInput"/>
        </div>
    )
}



export default Notes;