import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';



function Schedule() {
    
  return (
    <div className="body" style={{backgroundColor:theme.background}}>

      <div className="heading">
      <Header title={"Schedule"}/>
      </div>

    
    </div>

  );
}

export default Schedule;
