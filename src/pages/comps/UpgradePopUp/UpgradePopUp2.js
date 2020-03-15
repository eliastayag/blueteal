import React from 'react';
import './UpgradePopUpStyles.scss';
import Button from '../Button/Button';

function UpgradePopUp2(){
    return(
        <div className="PopUp2Cont">
            <div className="closeBut">
            <img src={require('../../../imgs/icons/png/close-white.png')}/>
            </div>
            <div className="PUContent">
                <div className="PU2List">
                <p className="PU2Header">Did you know you can upgrade to get these features?</p>
                <ul className="features">
                    <li>Access to forums</li>
                    <li>Unlimited templates</li>
                    <li>Full collaboration capabilities with supervising teacher</li>
                    <li>Bulk printing & downloading lessons</li>
                </ul>
                <Button title={"Upgrade Now"}/>
                </div>
                <div className="PUDecor">
                <img src={require('../../../imgs/popupfeature-2.png')}/>
                </div>
            </div>
        </div>
    )
}

export default UpgradePopUp2;