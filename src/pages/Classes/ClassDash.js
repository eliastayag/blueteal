import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import SelectClass from './SelectClass'


function ClassDash(props) {


  


  return (
    <div style={{backgroundColor:theme.background}} onClick={() => props.setCont("SelectClass")}>

    hello!

    
    </div>

  );
}

export default ClassDash;
