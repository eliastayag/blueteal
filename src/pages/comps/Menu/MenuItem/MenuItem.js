import React from 'react';

function MenuItem({itemTitle,onClick,active}){
    var cn="menu_item";
    if (active){
        cn = "menu_item menu_item_active"
    }
    return(
        <div onClick={onClick}>
            {itemTitle}
        </div>
    )
}

MenuItem.defaultProps = {
    itemTitle:"Menu Item Title",
    onClick: ()=> {}
}

export default MenuItem;