import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';



function Home() {
    
  return (
    <div className="body" style={{backgroundColor:theme.background}}>

      <div className="heading">
      <Header title={"Home"}/>
      </div>

    
    </div>

  );
}

export default Home;
