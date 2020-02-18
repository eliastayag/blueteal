import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './ClassDash.scss'

import Notes from '../comps/Notes/Notes';
import Calendar from '../comps/Calendar/Calendar'
import CreateLesson from '../comps/Lesson/CreateLesson';



function ClassDash(props) {

  return (
    <div >
    <Header title={"Monday, Feb 4th"}  />
    <div className="order">
    <CreateLesson />
    <Notes />

    <Calendar />
    </div>
    

    
    </div>

  );
}

export default ClassDash;
