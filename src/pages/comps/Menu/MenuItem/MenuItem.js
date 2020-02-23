import React from 'react';
import './MenuItem.scss'


function MenuItem({itemTitle,onClick,active}){
    
    var cn="menu_item";
    if (active){
        cn = "menu_item menu_item_active"
    }
    return(
        <div className="menuitem-body">
        <div  className='menuitem' onClick={onClick}>
            {itemTitle} 
        </div>
        </div>
    )
}

MenuItem.defaultProps = {
    itemTitle:"Menu Item Title",
    onClick: ()=> {}
}

export default MenuItem;