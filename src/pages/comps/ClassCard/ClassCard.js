import React from 'react';
import './ClassCard.scss'




function ClassCard({itemTitle,onClick,active,style,props,style1,style2}){
    return(
        <div className={style1} id={style} onClick={onClick}>
            <img className={style2} src={require('../../../imgs/icons/png/book.fill.white.png')}/>

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