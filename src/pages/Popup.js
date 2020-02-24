import React, {useState} from 'react';
import './PopupStyles.scss'
import Header from "./comps/Header/Header"
import Button from "./comps/Button/Button";


function Popup(props) {

    var poptitle = "";
    var content = null;


    if (props.pop == "NewClass"){
        poptitle = "Add a New Class"
    
    content = (
        <div className="NewClass-popup">
            Class Name
            <input className="popup-input" />

            <div className="popup-buttons">
            <Button onClick={() => { props.showPop("")}} title={"Cancel"} />
            <Button title={"OK"}/>
            </div>

        </div>
    )
    }

    if (props.pop == "NewLesson"){
        poptitle = "Select a Template"

        content = (
            <div className="NewClass-popup">
                <div>
                <img src={require('../imgs/Pages/page.1.png')}/>
                <img src={require('../imgs/Pages/page.2.png')}/>
                <img src={require('../imgs/Pages/page.3.png')}/>

                </div>
            

            <div className="popup-buttons">
            <Button onClick={() => { props.showPop("")}} title={"Cancel"} />
            <Button title={"OK"}/>
            </div>

        </div>
            
        )
    }

  return (

    <div className="popup-background">
    <div className="popup-box">
        <div className="popup-header">
            <Header title={poptitle}/>
        </div>
        <div className="popupbox-content">
            {content}
        </div>
        
    </div>
    </div>

  );
}

export default Popup;
