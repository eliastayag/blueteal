import React, {useState} from 'react';

import theme from '../../styles/ThemeStyles';
import './ForumPost.scss'



function ForumPost(props) {
    
  return (

  <div>
    <div className="backBut">
    <p style={{position:"absolute", top:0, marginTop:"1%"}}onClick={()=>{ props.setCont("Forums"); props.setName("Forums")}}>&larr; Back to Forums</p>
    </div>

    {/* ORIGINAL POST */}
    <div className="FPost">
      <p className="PostHeader">Help me with this phrase! I'm so confused omg!!!!</p>
        <div className="Icons">
          <img src={require("../../imgs/comments.svg")} />
          <img src={require("../../imgs/flag.svg")} />
        </div>
      <p className="PostAuthor">Carmen Lockhart</p>
      <img style={{alignSelf:"center", marginTop:"50px"}} src={require("../../imgs/redditpost.png")} />
    </div>

    {/* COMMENTS */}
    <div className="FPost" style={{height:"112px", marginTop:"20px"}}>
        <div className="Icons">
          <img src={require("../../imgs/comments.svg")} />
          <img src={require("../../imgs/flag.svg")} />
        </div>
      <p style={{fontWeight:"bold"}}className="PostAuthor">Doris Ho</p>
      <p className="PostAuthor">Wow dude so much smart</p>
    </div>
    <div className="FPost" style={{height:"112px", marginTop:"20px"}}>
        <div className="Icons">
          <img src={require("../../imgs/comments.svg")} />
          <img src={require("../../imgs/flag.svg")} />
        </div>
      <p style={{fontWeight:"bold"}}className="PostAuthor">Kathleen Hung</p>
      <p className="PostAuthor">yea.. haha.. its correct 🥺👉👈 </p>
    </div>
    <div className="FPost" style={{height:"112px", marginTop:"20px"}}>
        <div className="Icons">
          <img src={require("../../imgs/comments.svg")} />
          <img src={require("../../imgs/flag.svg")} />
        </div>
      <p style={{fontWeight:"bold"}}className="PostAuthor">Joseph Bondoc</p>
      <p className="PostAuthor">What is this? Where are we? What class are we in right now? Dude??</p>
    </div>
  </div>

    );
  }

export default ForumPost;
