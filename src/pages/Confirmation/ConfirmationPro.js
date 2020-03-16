import React from 'react';
import './ConfirmationStyles.scss';
import Button from '../comps/Button/Button';

function ConfirmationPro(props){
    return (
        <div className="ConfirmationDiv">
            <p className="confirmHeader">Payment Complete</p>
            <p className="confirmMsg"> Thank you for upgrading to the Pro Plan! </p>
            <img className="premiumPurchase" src={require('../../imgs/icons/png/purchase.pro.png')}/>
            <p className="confirmFoot"> Enjoy your new features!</p>
            <Button title={"Back to Homepage"} style={{background: '#C9C9C9', color:"black"}} onClick={()=>{ props.setCont("Home"); props.setName("")}}/>
        </div>
    )
}

export default ConfirmationPro;