import React, {useState} from 'react';

import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import './Classes.scss'
import SelectClass from './SelectClass'
import ClassDash from './ClassDash';


function Classes(props) {

  var Content = null;
  const [comp, setComp] = useState ("SelectClass");
  


  if(comp == 'SelectClass'){
    Content = <SelectClass
                comp={comp}
                setComp={setComp}
                setName={props.setName}
                setCont={props.setCont}

    />
  }


  if(comp == 'ClassDash'){
    Content = <ClassDash
                comp={comp}
                setComp={setComp}
                setName={props.setName}
                setCont={props.setCont}


    />
  }


  


  return (
    <div>

    {Content}


    
    </div>

  );
}



export default Classes;
