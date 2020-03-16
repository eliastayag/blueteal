import React from 'react';
import './AddButton.scss';

function MainButton({title,onClick,style}){

    var but = 'button button-active'
    return(
        <div className="buttons" onClick={onClick} style={style}>{title}</div>

    )
}

MainButton.defaultProps = {
    title:"OK",
    
   
}

export default MainButton;