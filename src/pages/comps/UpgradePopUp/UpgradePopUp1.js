import React from 'react';
import './UpgradePopUpStyles.scss';
import Button from '../Button/Button';

function UpgradePopUp1(){
    return(
        <div className="PopUpCont">
            <div className="closeBut">
            <img src={require('../../../imgs/icons/png/close.png')}/>
            </div>
            <div className="PUContent">
                <div className="PUDecor">
                <img src={require('../../../imgs/popupfeature-1.png')}/>
                </div>
                <div className="PUList">
                <p className="PUHeader">Ready to Upgrade?</p>
                <ul className="features">
                    <li>Access to forums</li>
                    <li>More templates</li>
                    <li>Full collaboration capabilities with supervising teacher</li>
                    <li>Bulk printing & downloading lessons</li>
                </ul>
                <Button title={"Upgrade Now"}/>
                </div>
            </div>
        </div>
    )
}

export default UpgradePopUp1;