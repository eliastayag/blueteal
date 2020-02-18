import React from 'react';
import './UserIcon.scss';



function UserIcon(){
    return(
        <div className='user'>
             <p> Ramin Shadmehr </p>
             <img className='userimg' src={require('../../../imgs/ramin.png')}/>
        </div>
    )
}



export default UserIcon;