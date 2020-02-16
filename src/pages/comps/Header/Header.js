import React from 'react';



function Header({title,style}){
    return(
        <div style={style}>
            {title}
        </div>
    )
}

Header.defaultProps = {
    title:"Default Header",

}

export default Header;