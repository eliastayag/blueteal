import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import Classes from './Classes'
import ClassCard from '../comps/ClassCard/ClassCard';
import '../comps/ClassCard/ClassCard.scss'

function SelectClass(props) {


    var items = [
        {
          itemTitle:'English 4',
          style:"classcard-red",
          // onClick:()=>{props.showPage('ClassDash')}
        },
        {
          itemTitle:'English 5',
          style:"classcard-blue",
          // onClick:()=>{props.showPage('ClassDash')}
        },
        {
          itemTitle:'English 6',
          style:"classcard-purple",
          // onClick:()=>{props.showPage('ClassDash')}
        },
      ]



  return (

       <div className="selectClass-body">

      <div className="select-cards">
      {items.map((o,i)=>{
                    return <ClassCard  setCont={props.setCont} onClick={() => { props.setComp("ClassDash"); props.setCont("Classes1"); props.setName("Monday, Feb 24th")}} {...o} />
                })}

      </div>
      <img onClick={()=>{ props.showPop("NewClass");}} className="new-class" src={require('../../imgs/icons/png/plusicon.red.png')}/>    
      </div>

  );
}


SelectClass.defaultProps = {
    items:[{
        itemTitle:"English "
        
    }, {
        itemTitle:"English "
    }, {
        itemTitle:"English "
    }],
    menuTitle:"Default Menu"
};

export default SelectClass;
