import React from 'react';
import './AddButton.scss';

function MainButton({ok,cancel,title}){

    var but = 'button button-active'
    return(
        <div className={but} >{title}</div>
    )
}

MainButton.defaultProps = {
    title:"OK",
   
}

export default MainButton;