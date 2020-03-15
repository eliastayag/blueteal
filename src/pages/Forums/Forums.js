import React, {useState} from 'react';

import theme from '../../styles/ThemeStyles';
import FPost from '../comps/ForumPost/FPost';
import './Forums.scss';



function Forums(props) {
    
  return (
    <div>
      <div className="forum-search">
        <p style={{color: 'rgba(0, 0, 0, 0.3)', marginLeft:'10px' }}>Search</p>
      </div>
    
    <div className="forums-posts">
      <FPost cont={props.cont} setCont={props.setCont} showPop={props.showPop} />
      <FPost cont={props.cont} setCont={props.setCont} showPop={props.showPop} />
      <FPost cont={props.cont} setCont={props.setCont} showPop={props.showPop} />
      <FPost cont={props.cont} setCont={props.setCont} showPop={props.showPop} />

    </div>

      
      

    
    </div>

  );
}

export default Forums;
