import React from 'react';

function MenuItem({item}){
    return(
        <div>
            {item}
        </div>
    )
}

MenuItem.defaultProps = {
    item:"Menu Item Title"
}

export default MenuItem;