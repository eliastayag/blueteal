import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './ClassDash.scss'

import Notes from '../comps/Notes/Notes';
import Calendar from '../comps/Calendar/Calendar'
import CreateLesson from '../comps/Lesson/CreateLesson';



function ClassTemplate(props) {

  

  return (
    <div className="classdash-body">
      <div className="classdash-back" onClick={()=>{ props.setCont("ClassDash"); props.setName("Classes"); }}>
      &larr; Back to Lesson Plans

      </div>
            <CreateLesson lesson={props.lesson} lessonCount={props.lessonCount} setCont={props.setCont} cont={props.cont}
            classesname={props.classesname} setClassesName={props.setClassesName} showPop={props.showPop}/>

    </div>

  );
}

export default ClassTemplate;
