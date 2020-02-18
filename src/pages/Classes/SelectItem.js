import React from 'react';

function SelectItem({itemTitle,onClick,active}){
    var cn="menu_item";
    if (active){
        cn = "menu_item menu_item_active"
    }
    return(
        <div onClick={onClick} style={{display:"flex",alignItems:"center", paddingLeft:"5vw",paddingRight:"5vw"}}>
            {itemTitle}
        </div>
    )
}

SelectItem.defaultProps = {
    itemTitle:"Menu Item Title",
    onClick: ()=> {}
}

export default SelectItem;