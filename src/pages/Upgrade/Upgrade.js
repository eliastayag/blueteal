import React, {useState} from 'react';
import './UpgradeStyles.scss';
import Button from '../comps/Button/Button';


function Upgrade(props) {
    
  return (
    <div className="UpgradeDiv">
      <div className="UpgradeTab">
        <div className="UpgradeHeader-1">
          Basic
        </div>
        <div className="UpgradeTab-content">
        <p className="UT-price">FREE</p>
        <ul className="featureListFree">
          <li>Print individual lessons</li>
          <li>Default templates</li>
          <li>Reuse up to 3 lessons per month</li>
        </ul>
          <Button style={{background:"#ADADAD"}} title={"Current Version"}/>
        </div>
      </div>

      <div className="UpgradeTab">
        <div className="UpgradeHeader-2">
          Pro
        </div>
        <div className="UpgradeTab-content">
          <p className="UT-price2">$6</p>
          <p className="UT-pricemonth">/month</p>
          <ul className="featureList">
            <li>Reuse up to 10 lessons per month</li>
            <li>Behaviour log for lessons</li>
            <li>3 Custom Templates</li>
            <li>Print and download individual lessons</li>
          </ul>
          <Button style={{background:"#F06666"}} title={"Get Pro"} onClick={()=>{ props.setCont("UpgradePay"); props.setUpgrade("Pro"); props.setName("")}}/>
        </div>
      </div>

      <div className="UpgradeTab">
        <div className="UpgradeHeader-3">
          Premium
        </div>
        <div className="UpgradeTab-content">
          <p className="UT-price2">$14</p>
          <p className="UT-pricemonth">/month</p>
          <ul className="featureList">
            <li>Unlimited templates</li>
            <li>Bulk printing and downloading lessons</li>
            <li>Access to forums</li>
            <li>Full collaboration capabilities with supervising teacher</li>
          </ul>
          <Button style={{background:"#7A4BFF"}} title={"Get Premium"} onClick={()=>{ props.setCont("UpgradePay"); props.setUpgrade("Premium"); props.setName("")}}/>
        </div>
      </div>

    </div>


  );
}

export default Upgrade;
