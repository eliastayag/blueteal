import React from 'react';
import './UserIcon.scss';



function UserIcon(){
    return(
        <div className='user'>
                         <img className='userimg' src={require('../../../imgs/ramin.png')}/>

             <p>Ramin Shadmehr</p>
        </div>
    )
}



export default UserIcon;