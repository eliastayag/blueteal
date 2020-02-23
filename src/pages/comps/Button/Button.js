import React from 'react';
import './AddButton.scss';

function MainButton({title,onClick}){

    var but = 'button button-active'
    return(
        <div className="buttons" onClick={onClick}>{title}</div>

    )
}

MainButton.defaultProps = {
    title:"OK",
    
   
}

export default MainButton;