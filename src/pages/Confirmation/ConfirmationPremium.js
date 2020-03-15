import React from 'react';
import './ConfirmationStyles.scss';
import Button from '../comps/Button/Button';

function ConfirmationPremium(){
    return (
        <div className="ConfirmationDiv">
            <p className="confirmHeader">Payment Complete</p>
            <p className="confirmMsg"> Thank you for upgrading to the Premium Plan! </p>
            <img className="premiumPurchase" src={require('../../imgs/icons/png/purchase.premium.png')}/>
            <p className="confirmFoot"> Enjoy your new features!</p>
            <Button title={"Back to Homepage"}/>
        </div>
    )
}

export default ConfirmationPremium;