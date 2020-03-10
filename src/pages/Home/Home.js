import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import Notes from '../comps/Notes/Notes';
import PerformanceTab from '../comps/PerformanceTab/PerformanceTab';
import UEvents from '../comps/UpcomingEvents/UpcomingEvents';
import ClassesTab from '../comps/ClassesTab/ClassesTab';





function Home() {
    
  return (
    <div>

      <img  src={require('../../imgs/home-calendar.png')}/>

      <Notes/>
      <PerformanceTab />
      <UEvents/>
      <ClassesTab />



      

    
    </div>

  );
}

export default Home;
