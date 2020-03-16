import React, {useState} from 'react';
import './UpgradeStyles.scss';
import Button from '../comps/Button/Button';


function UpgradePay(props) {
    var Content = null;

    if (props.upgrade == "Pro"){
        Content = (
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
            </div>
          </div>
        )
    }
    if (props.upgrade == "Premium"){
        Content = (
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
            </div>
          </div>
        )
    }


    
  return (
    <div className="UpgradeDiv">
            <div className="UpgradeTab1">
            <div className="UpgradeHeader-pay"></div>
            <div className="UpgradeTab-content-pay">

            </div>
          </div>
        {Content}
    </div>


  );
}

export default UpgradePay;
