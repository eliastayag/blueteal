import React from 'react';
import './Header.scss';



function Header({title,style}){

    return(
        <div className='header' style={{style}}>
            {title}
        </div>
    )
}

Header.defaultProps = {
    title:"Default Header",
    style:"fontSize:"

}

export default Header;