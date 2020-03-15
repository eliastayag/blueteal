import React from 'react';
import './FPost.scss'

function FPost(props){

    return(
        <div className="FPostTab" onClick={()=>{ props.setCont("ForumPost")}}>
            <img  className="forums-book" src={require('../../../imgs/icons/png/books.png')}/>

            <div className="FPostTabC">
                <p className="FPost1">Help me with this phrase! I’m confused.</p>
                <p className="FPost2">Carmen Lockhart</p>
                <p className="FPost3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a varius enim. In rutrum lacus sit .</p>
            </div>

        </div>
    )
}


export default FPost