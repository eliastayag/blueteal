import React from 'react';

function MainButton({ok,cancel,title}){
    return(
        <div style={ok}>{title}</div>
    )
}

MainButton.defaultProps = {
    title:"OK",
    ok:{
        backgroundColor:"white",
        color:"#68B2A0",
        width:"83px",
        height:"23px",
        borderRadius:"14px",
        padding:"2px",
        fontSize:"3vh"
    }
}

export default MainButton;