import React from 'react';



function PopupBox({style}){
    return(
        <div style={style}>
            <p>popup boxxx</p>
        </div>
    )
}

PopupBox.defaultProps = {
    style:{
        backgroundColor:"lightgreen"
    }
}

export default PopupBox;