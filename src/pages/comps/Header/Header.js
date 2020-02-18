import React from 'react';
import './Header.scss';



function Header({title,style}){

    return(
        <div className='header'>
            {title}
        </div>
    )
}

Header.defaultProps = {
    title:"Default Header",

}

export default Header;