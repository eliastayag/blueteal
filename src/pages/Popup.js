import React, {useState} from 'react';
import './PopupStyles.scss'
import Header from "./comps/Header/Header"
import Button from "./comps/Button/Button";
import './comps/UpgradePopUp/UpgradePopUpStyles.scss';


function Popup(props) {

    var poptitle = "";
    var content = null;


    if (props.pop == "NewClass"){
        poptitle = "Add a New Class"
    
    content = (
        <div className="NewClass-popup">
            Class Name
            <input className="popup-input" />

            {/* <div className="popup-buttons">
            <Button onClick={() => { props.showPop("")}} title={"Cancel"} />
            <Button title={"OK"}/>
            </div> */}

        </div>
    )
    }

    if (props.pop == "NewLesson"){
        poptitle = "Select a Template"

        content = (
            <div className="NewClass-popup">
                <div className="template-pics">
                    <div className="singular-pic" onClick={()=> {props.setCont("ClassTemplate"); props.showPop("");}}>
                    <img src={require('../imgs/Pages/page.1.png')}/>
                    </div>
                    <div className="singular-pic">
                    <img src={require('../imgs/Pages/page.2.png')}/>
                    </div>
                    <div className="singular-pic">
                    <img src={require('../imgs/Pages/page.3.png')}/>

                    </div>


                </div>
            

            {/* <div className="popup-buttons">
            <Button onClick={() => { props.showPop("")}} title={"Cancel"} />
            <Button title={"OK"}/>
            </div> */}

        </div>
            
        )
    }

    if (props.pop == "UpgradePrompt"){
        content=(
            <div className="PopUpCont">
            <div className="closeBut">
            <img  onClick={()=> {props.showPop("")}} src={require('../imgs/icons/png/close.png')}/>
            </div>
            <div className="PUContent">
                <div className="PUDecor">
                <img src={require('../imgs/popupfeature-1.png')}/>
                </div>
                <div className="PUList">
                <p className="PUHeader">Ready to Upgrade?</p>
                <ul className="features">
                    <li>Access to forums for help and resources</li>
                    <li>More templates</li>
                    <li>Full collaboration capabilities with supervising teacher</li>
                    <li>Bulk printing & downloading lessons</li>
                </ul>
                <Button title={"Upgrade Now"} style={{backgroundColor:"#68B2A0", padding: "10px", width: "165px"}}onClick={()=> {props.setCont("Upgrade"); props.showPop("");}}/>
                </div>
            </div>
        </div>
        )
    }

    if (props.pop == "UpgradePrompt2"){
        content=(
            <div className="PopUp2Cont">
            <div className="closeBut">
            <img onClick={()=> {props.showPop("")}} src={require('../imgs/icons/png/close-white.png')}/>
            </div>
            <div className="PUContent">
                <div className="PU2List">
                <p className="PU2Header">Did you know you can upgrade to get these features?</p>
                <ul className="features">
                    <li>Access to forums for help and resources</li>
                    <li>Unlimited templates</li>
                    <li>Full collaboration capabilities with supervising teacher</li>
                    <li>Bulk printing & downloading lessons</li>
                </ul>
                <Button title={"Upgrade Now"} style={{backgroundColor:"#68B2A0", padding: "10px", width: "165px"}}onClick={()=> {props.setCont("Upgrade"); props.showPop("");}}/>
                </div>
                <div className="PUDecor">
                <img src={require('../imgs/popupfeature-2.png')}/>
                </div>
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
        <div className="popup-buttons"> 
        <Button onClick={() => { props.showPop("")}} style={{border:"white solid 1px", borderRadius:"100px", margin: "5px"}}title={"Cancel"} />
            <Button style={{backgroundColor: "white", color: "#529A89", border: "white 1px solid",borderRadius:"100px", margin: "5px"}}title={"OK"}/>
        </div>

        
    </div>
    </div>

  );
}

export default Popup;
