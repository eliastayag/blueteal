import React, {useState} from 'react';

import theme from '../../styles/ThemeStyles';



function ForumPost(props) {
    
  return (
    <div>
      
      
    <p onClick={()=>{ props.setCont("Forums"); props.setName("Forums")}}>Back to Forums</p>
    
    </div>

  );
}

export default ForumPost;
