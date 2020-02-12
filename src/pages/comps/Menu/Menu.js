import React from 'react';
import MenuItem from './MenuItem/MenuItem';

function MainMenu({items, menuTitle}){
    return(
        <div>
            <div id="item_count">
                {items.map((o,i)=>{
                    return <MenuItem {...o} />
                })}
            </div>
            
        </div>
    )
}

MainMenu.defaultProps = {
    items:[{
        itemTitle:"Item 1"
    }, {
        itemTitle:"Item"
    }],
    menuTitle:"Default Menu"
};

export default MainMenu;