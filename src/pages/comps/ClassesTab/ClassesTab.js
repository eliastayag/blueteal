import React, {useState} from 'react';
import './ClassesTab.scss';
import ClassCard from '../ClassCard/ClassCard';


function ClassesTab(props) {

  var items = [
    {
      itemTitle:'English 4',
      style:"classcard-red",
      style1:"classcard-2",
      style2:'classcard-book1',

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
      style1:"classcard-2",
      style2:'classcard-book1',

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
      style1:"classcard-2",
      style2:'classcard-book1',

      onClick:()=>{props.setClassesName('English 6');
      // props.setComp("ClassDash");
      props.setCont("ClassDash");
      props.setName("Monday, Feb 24th");
      props.lessonCount(null);
    }
    },
  ]
    
  return (
    <div className="ClassesTab">
        <p className="ClassesTab-header">Classes</p>
        
        <div className='ClassesTabCards'>
        {items.map((o,i)=>{
                    return <ClassCard  setCont={props.setCont}  {...o} />
                })}

        </div>





      

    
    </div>

  );
}

export default ClassesTab;
