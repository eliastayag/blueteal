import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import Classes from './Classes'
import ClassCard from '../comps/ClassCard/ClassCard';


function SelectClass({items,props,style}) {


    var items = [
        {
          itemTitle:'English 4',
          style:"classcard-red",
          onClick:()=>{props.showPage('ClassDash')}
        },
        {
          itemTitle:'English 5',
          style:"classcard-blue",
          onClick:()=>{props.showPage('ClassDash')}
        },
        {
          itemTitle:'English 6',
          style:"classcard-purple",
          onClick:()=>{props.showPage('ClassDash')}
        },
      ]



  return (
    <div className="body"  onClick={() => props.showPage("ClassDash")}>

      <div className="heading">
      <Header title={"Classes"} />
      </div>

      <div className="cards">



      {items.map((o,i)=>{
                    return <ClassCard  className={style} {...o} />
                })}
          
      </div>

      {/* <div className="button">
        <Button />
      </div> */}
    
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
