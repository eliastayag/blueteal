import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import Classes from './Classes'
import ClassCard from '../comps/ClassCard/ClassCard';
import '../comps/ClassCard/ClassCard.scss'
import ClassDash from './ClassDash';

function SelectClass(props) {



    var items = [
        {
          itemTitle:'English 4',
          style:"classcard-red",
          onClick:()=>{props.setClassesName('English 4');
          // props.setComp("ClassDash");
          props.setCont("ClassDash");
          props.setName("Monday, Feb 24th");
          props.lessonCount(null);
          }
        },
        {
          itemTitle:'English 5',
          style:"classcard-blue",
          onClick:()=>{props.setClassesName('English 5');
          // props.setComp("ClassDash");
          props.setCont("ClassDash");
          props.setName("Monday, Feb 24th");
          props.lessonCount(1);
        }
          
        },
        {
          itemTitle:'English 6',
          style:"classcard-purple",
          onClick:()=>{props.setClassesName('English 6');
          // props.setComp("ClassDash");
          props.setCont("ClassDash");
          props.setName("Monday, Feb 24th");
          props.lessonCount(null);
        }
        },
      ]

  // if (classesname == "English 4"){
  //   <ClassDash 
  //   classesname={classesname}
  //   setClassesName={setClassesName}

    
  //   />;
  // }



  return (

       <div className="selectClass-body">

      <div className="select-cards">
      {items.map((o,i)=>{
                    return <ClassCard  setCont={props.setCont}  {...o} />
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
