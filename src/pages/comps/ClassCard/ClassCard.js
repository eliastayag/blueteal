import React from 'react';
import './ClassCard.scss'



function ClassCard({style}){
    return(
        <div className='classcard' style={style}>
            <p>[box image]</p>
        </div>
    )
}

ClassCard.defaultProps = {
    style:{
        backgroundColor:"gainsboro"
    }
}

export default ClassCard;