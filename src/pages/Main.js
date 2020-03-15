import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.scss';
import Login from './Login'
import Dashboard from './Dashboard'
import Popup from './Popup';



function Main(props) {
    //Main.js is in App.js
    //Main handles all the Pages (Login & Dashboard) for the app
    //Main returns a page which is currently defaulted to Login.js
    //After logging in Main will return Dashboard.js (via props)
    //Dashboard controls all the /comps (Home.js, CLasses.js, etc...) that are being used
    var page = null;
    var mpopup = null;
    const [showpage, setShowpage] = useState('Dashboard'); 
    const [pop, showPop] = useState(""); 
    const [cont, setCont] = useState("Home");



    if(showpage == 'Dashboard'){
        page = <Dashboard 
        pop={pop}
        showPop={showPop}
        cont={cont}
        setCont={setCont}
                />;
    } 

    if(showpage == 'Login'){
      page = <Login 
              />;
  }

    if (pop == ''){
      mpopup = null;
   } else {
       mpopup = 
       
       <Popup 
                   // popup
                   pop={pop}
                   showPop={showPop}
                   cont={cont}
                   setCont={setCont}


                   />;                 
           }



  return (
    <div style={{margin:0, padding:0, }}>
      {mpopup}
      {page}
    </div>
  );
}

export default Main;
