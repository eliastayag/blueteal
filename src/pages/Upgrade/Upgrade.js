import React, {useState} from 'react';
import './UpgradeStyles.scss';
import Button from '../comps/Button/Button';


function Upgrade() {
    
  return (
    <div className="UpgradeDiv">
      <div className="UpgradeTab">
        <div className="UpgradeHeader-1">
          Basic
        </div>
        <div className="UpgradeTab-content">
          <p className="UT-price">FREE</p>
          <p>&#8226; Print individual lessons</p>
          <p>&#8226; Default templates</p>
          <p>&#8226; Reuse up to 3 lessons per month</p>
          <Button title={"Current Version"}/>
        </div>
      </div>

      <div className="UpgradeTab">
        <div className="UpgradeHeader-2">
          Pro
        </div>
        <div className="UpgradeTab-content">
          <p className="UT-price2">$6</p>
          <p style={{marginBottom:"30px"}}>/month</p>
          <p>&#8226; Reuse up to 10 lessons per month</p>
          <p>&#8226; Behaviour log for lessons</p>
          <p>&#8226; 3 Custom Templates</p>
          <p>&#8226; Print and download individual lessons</p>
          <Button title={"Get Pro"}/>
        </div>
      </div>

      <div className="UpgradeTab">
        <div className="UpgradeHeader-3">
          Premium
        </div>
        <div className="UpgradeTab-content">
          <p className="UT-price2">$14</p>
          <p style={{marginBottom:"30px"}}>/month</p>
          <p>&#8226; Unlimited templates</p>
          <p>&#8226; Bulk printing and downloading lessons</p>
          <p>&#8226; Access to forums</p>
          <p>&#8226; Full collaboration capabilities with supervising teacher</p>
          <Button title={"Get Premium"}/>
        </div>
      </div>

    </div>


  );
}

export default Upgrade;
