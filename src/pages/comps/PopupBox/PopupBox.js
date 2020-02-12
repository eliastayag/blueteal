import React from 'react';
import MainButton from "../Button/Button";



function PopupBox({style,instyle,defaultheader,position,position2}){
    return(
        
        <div style={style}>
            {defaultheader}
            <div style={instyle}>henlo</div>
            <MainButton style={{position:"absolute"}}/>
            <MainButton style={position2}/>
        </div>
    )
}

PopupBox.defaultProps = {
    style:{
        backgroundColor:"#68B2A0",
        width:"100vh",
        height:"70vh",
        padding:"35px",
        paddingTop:"30px",
        color:"white",
        borderRadius:"17px",
        textAlign:"center",
        fontSize:"5vh"

    },
    instyle:{
        marginTop:"10px",
        backgroundColor:"#529A89",
        height:"50vh",
        padding:"25px",
        borderRadius:"17px",
        fontSize:"4vh"


    },
    defaultheader:"Default Header",
    position:{
        justifyContent:"center",
        
        

    },
    position2:{
        position1:"absolute",
        left:"50px"

    }
}

export default PopupBox;