import React, {useState} from 'react';
import './UpgradeStyles.scss';
import Button from '../comps/Button/Button';
import Wrapper from '../Stripe/stripe'



function UpgradePay(props) {
    var Content = null;
    var But = null;

    if (props.upgrade == "Pro"){
        // But = (
        //     <Button title="Confirm" onClick={()=>{ props.setCont('ConfirmationPro'); props.setName("Plans")}} />
        // )
        Content = (
            <div className="UpgradeTabp">
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
        // But = (
        //     <Button title="Confirm" onClick={()=>{ props.setCont('ConfirmationPremium'); props.setName("Plans")}} />
        // )
        Content = (
            <div className="UpgradeTabp">
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
                <Wrapper setCont={props.setCont} setName={props.setName} upgrade={props.upgrade} setUpgrade={props.setUpgrade} setStatus={props.setStatus} status={props.status}/>
                 <Button title="Back to Options" onClick={()=>{ props.setCont('Upgrade'); props.setName("Plans")}}  style={{background: '#68B2A0'}}/>

            {But}
            </div>
          </div>
        {Content}

    </div>


  );
}

export default UpgradePay;
