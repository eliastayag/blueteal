import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.scss';
import Login from './Login'
import Dashboard from './Dashboard'



function Main() {
    //Main.js is in App.js
    //Main handles all the Pages (Login & Dashboard) for the app
    //Main returns a page which is currently defaulted to Login.js
    //After logging in Main will return Dashboard.js (via props)
    //Dashboard controls all the /comps (Home.js, CLasses.js, etc...) that are being used
    var page = null;
    const [showpage, setShowpage] = useState('Dashboard'); 
    const [pop, showPop] = useState(''); 

    if(showpage == 'Login'){
        page = <Login 
                />;
    }
    if(showpage == 'Dashboard'){
        page = <Dashboard 
                />;
    } 



  return (
    <div style={{margin:0, padding:0}}>
    {page}
    </div>
  );
}

export default Main;
