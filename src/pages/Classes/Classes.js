import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import SelectClass from './SelectClass'
import ClassDash from './ClassDash';


function Classes(props) {

  var Content = null;
  const [cont, setCont] = useState ('SelectClass');
  


  if(cont == 'SelectClass'){
    Content = <SelectClass 
                cont={cont}
                setCont={setCont}
                
                />
  }

  if(cont == 'ClassDash'){
    Content = <ClassDash
                cont={cont}
                setCont={setCont}
    />
  }


  


  return (
    <div style={{backgroundColor:theme.background}}>

    {Content}


    
    </div>

  );
}

export default Classes;
