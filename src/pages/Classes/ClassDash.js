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
      <div className="dateheader">
        <img src={require("../../imgs/icons/png/chevron.left.black.png")} className="chevrons"/>
    <Header title={"Monday, Feb 4th"}  />
    <img src={require("../../imgs/icons/png/chevron.right.black.png")} className="chevrons"/>

    </div>

    <div className="order">
      <div className="left">
    <CreateLesson />
    </div>
    <div className="right">
      <div id="topright">
    <Notes />
    </div>
    <div id="bottomright">
    <Calendar />
    </div>
    </div>
    </div>
    

    
    </div>

  );
}

export default ClassDash;
