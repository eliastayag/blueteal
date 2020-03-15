import React, {useState} from 'react';
import Notes from '../comps/Notes/Notes';

function NotesPage() {
    
  return (
    <div >
      <Notes />
      <Notes />
    


      <img className="new-class" src={require('../../imgs/icons/png/plusicon.red.png')}/>
    </div>

  );
}

export default NotesPage;
