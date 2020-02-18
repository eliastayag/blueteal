import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

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
        itemTitle:"Item 2"
    }, {
        itemTitle:"Item 3"
    }, {
        itemTitle:"Item 4"
    }, {
        itemTitle:"Item 5"
    }, {
        itemTitle:"Item 6"
    }],
    menuTitle:"Default Menu"
};

export default MainMenu;