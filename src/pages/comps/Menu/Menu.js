import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import UserIcon from '../User/UserIcon';
import './Menu.scss';

function MainMenu({items, menuTitle}){
    return(
        <div className="menu-body">


        <div className='menu-container'>
                 <div className="menu-logo">
                    <UserIcon />
                </div>
                <div id="menufolder">
                    <div id="left">
                    <img src={require("../../../imgs/icons/png/home.fill.white.png")} className="symbol"/>
         <img src={require("../../../imgs/icons/png/book.fill.white.png")} className="symbol"/>
        <img src={require("../../../imgs/icons/png/calendar.white.png")} className="symbol"/>
        <img src={require("../../../imgs/icons/png/star.fill.white.png")} className="symbol"/>
        <img src={require("../../../imgs/icons/png/pen.white.png")} className="symbol"/>
        <img src={require("../../../imgs/icons/png/doc.white.png")} className="symbol" id="docIcon"/>
        <img src={require("../../../imgs/icons/png/stars.white.png")} className="symbol"/>
                    </div>
                    <div id="right">
            {items.map((o,i)=>{
                return <MenuItem {...o} />
            })}
            </div>
            </div>
        </div>
        
        <img className="menu-cog" src={require('../../../imgs/icons/png/gear.white.png')}/>

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