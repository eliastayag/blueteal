import React, {useState} from 'react';
import Classes from './comps/Classes';
import Forums from './comps/Forums';
import Home from './comps/Home';
import Performance from './comps/Performance';
import Schedule from './comps/Schedule';

function Dashboard() {

    //cont is default to Home.js
    var Content = null;
    const [cont, setCont] = useState ('Home');


    if(cont == 'Home'){
        Content = <Home 
                    
                    />
      }
    if(cont == 'Classes'){
        Content = <Classes 
                    
                    />
      }
    if(cont == 'Schedule'){
        Content = <Schedule 
                    
                    />
      }
    if(cont == 'Performance'){
        Content = <Performance 
                    
                    />
      }
    if(cont == 'Forums'){
        Content = <Forums 
                    
                    />
      }


  return (
    [Content]
  );
}

export default Dashboard;
