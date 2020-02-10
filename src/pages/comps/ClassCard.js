import React from 'react';



function ClassCard({style}){
    return(
        <div style={style}>
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