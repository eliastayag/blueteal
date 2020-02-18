import React from 'react';
import './ClassCard.scss'



function ClassCard({itemTitle,onClick,active,style}){
    return(
        <div className='classcard' onClick={onClick} >
            {itemTitle}
        </div>


    )
}

ClassCard.defaultProps = {
    itemTitle:"Menu Item Title",
    onClick: ()=> {}

}



export default ClassCard;