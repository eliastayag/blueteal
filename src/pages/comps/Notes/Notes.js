import React from 'react';
import './Notes.scss'



function Notes({style}){
    return(
        <div className='notes' style={style}>
            <p className='notes-text'>Notes</p>
            <textarea className="box1-input notes-text"></textarea>
        </div>
    )
}

Notes.defaultProps = {

}



export default Notes;