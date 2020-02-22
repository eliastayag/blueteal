import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

function MainMenu({items, menuTitle}){
    return(
        <div className="menu-body">
            <div className="body-body">
            <div className="t-div">
                <img src={require('../../../imgs/icons/png/t.thin.white.png')}/>
            </div>

        <div className='menu-container'>
            {items.map((o,i)=>{
                return <MenuItem {...o} />
            })}
        </div>
        
        <img className="cog" src={require('../../../imgs/icons/png/gear.white.png')}/>

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