import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'


function Classes() {

    var items = [
        {
          itemTitle:'Home',
          // onClick:()=>{alert('home')}
        },
        {
          itemTitle:'Classes',
          // onClick:()=>{alert('classes')}
        },
        {
          itemTitle:'Schedule',
          // onClick:()=>{alert('schedule')}
        },
        {
          itemTitle:'Performance',
          // onClick:()=>{alert('performance')}
        },
        {
          itemTitle:'Forums',
          // onClick:()=>{alert('forums')}
        },
      ]
      

  return (
    <div className="body" style={{backgroundColor:theme.background}}>

      <div className="heading">
      <Header title={"Classes"}/>
      </div>

      <div className="button">
        <Button />
      </div>
    
    </div>

  );
}

export default Classes;
