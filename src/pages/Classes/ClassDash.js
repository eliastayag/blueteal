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
    <div className="classdash-body">
      <div className="classdash-back" onClick={()=>{ props.setCont("SelectClass"); props.setName("Classes")}}>
        Back To Classes

      </div>
            <CreateLesson classesname={props.classesname} setClassesName={props.setClassesName} showPop={props.showPop}/>
      <div className="notes-calendar-div">
      <Notes />
      <img className="classdash-calendar" src={require('../../imgs/Calendar.png')}/>

      </div>  
    </div>

  );
}

export default ClassDash;
