import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import PerformanceTab from '../comps/PerformanceTab/PerformanceTab';
import './Performance.scss'



function Performance() {
    
  return (
    <div className="PerformancePage">
      <div className="PerformanceButs">
      <Button title="English 4" style={{borderRadius: '10px', color:"black",border: '2px solid #6A6A6A',background:'white'}}/>
      <Button title="English 5" style={{borderRadius: '10px', color:"black",border: '2px solid #6A6A6A',background:'white'}}/>
      <Button title="English 6" style={{borderRadius: '10px', color:"black",border: '2px solid #6A6A6A',background:'white'}}/>
      </div>


      <PerformanceTab/>
      <PerformanceTab/>
      <PerformanceTab/>
    </div>

  );
}

export default Performance;
