import React from 'react';
import './ClassCard.scss'




function ClassCard({itemTitle,onClick,active,style}){
    return(
        <div className='classcard-1' id={style} onClick={onClick} >
            <img src={require('../../../imgs/icons/png/book.black.png')}/>

            {itemTitle}
        </div>


    )
}

ClassCard.defaultProps = {
    itemTitle:"Menu Item Title",
    // onClick: ()=> {},
    style:"classcard-purple"

}



export default ClassCard;