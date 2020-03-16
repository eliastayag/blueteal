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
            <Button title={"← Back to Homepage"} style={{backgroundColor:"#C9C9C9", color:"black", width: "200px", padding: "10px", marginTop:"10px"}} onClick={()=>{ props.setCont("Home"); props.setName("")}}/>
        </div>
    )
}

export default ConfirmationPro;