import React from 'react';
import './ClassCard.scss'



function ClassCard({itemTitle,onClick,active}){
    return(
        <div className='classcard' onClick={onClick} style={{display:"flex",alignItems:"center", paddingLeft:"5vw",paddingRight:"5vw"}}>
            {itemTitle}
        </div>


    )
}

ClassCard.defaultProps = {
    itemTitle:"Menu Item Title",
    onClick: ()=> {}
}



export default ClassCard;