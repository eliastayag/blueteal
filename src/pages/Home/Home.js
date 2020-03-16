import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import Notes from '../comps/Notes/Notes';
import PerformanceTab from '../comps/PerformanceTab/PerformanceTab';
import UEvents from '../comps/UpcomingEvents/UpcomingEvents';
import ClassesTab from '../comps/ClassesTab/ClassesTab';
import './Home.scss'; 





function Home(props) {
    
  return (
    <div className="homeCont">
      <div className="cont1">
        <div className="subCont1">
          <UEvents/>
          <ClassesTab cont={props.cont} setCont={props.setCont} setName={props.setName}          setClassesName={props.setClassesName}
              showPop={props.showPop} lessonCount={props.lessonCount}
              />
        </div>
        <Notes style={{height:"380px"}} />
      <img style={{borderRadius:'10px'}} src={require('../../imgs/home-calendar.png')}/>

     
 

      </div>
      <div className="cont2">
      <PerformanceTab cont={props.cont} setCont={props.setCont} showPop={props.showPop}/>
      </div>



      

    
    </div>

  );
}

export default Home;
