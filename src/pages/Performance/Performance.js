import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import PerformanceTab from '../comps/PerformanceTab/PerformanceTab';



function Performance() {
    
  return (
    <div>
      <Button title="English 4"/>
      <Button title="English 5"/>
      <Button title="English 6"/>

      <PerformanceTab/>
      <PerformanceTab/>
      <PerformanceTab/>
    </div>

  );
}

export default Performance;
