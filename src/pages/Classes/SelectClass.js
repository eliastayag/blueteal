import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import SelectItem from './SelectItem';
import Classes from './Classes'


function SelectClass({items,props}) {


    var items = [
        {
          itemTitle:'English 4',
          onClick:()=>{props.showPage('ClassDash')}
        },
        {
          itemTitle:'English 5',
          onClick:()=>{props.setCont('Classes')}
        },
        {
          itemTitle:'English 6',
          onClick:()=>{props.setCont('Schedule')}
        },
      ]



  return (
    <div className="body" style={{backgroundColor:theme.background}} onClick={() => props.showPage("ClassDash")}>

      <div className="heading">
      <Header title={"Classes"} />
      </div>

      <div className="cards">

      {items.map((o,i)=>{
                    return <SelectItem  {...o} />
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
