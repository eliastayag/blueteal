import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';



function Notes() {
    
  return (
    <div className="body" style={{backgroundColor:theme.background}}>

      <div className="heading">
      <Header title={"Notes"}/>
      </div>

    
    </div>

  );
}

export default Notes;
