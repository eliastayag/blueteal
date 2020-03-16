import React, {useState} from 'react';

import Menu from '../comps/Menu/Menu';
import Header from '../comps/Header/Header';
import theme from '../../styles/ThemeStyles';
import Button from '../comps/Button/Button';
import PerformanceTab from '../comps/PerformanceTab/PerformanceTab';
import './Performance.scss'



function Performance(props) {
    
  return (
    <div className="PerformancePage">
      <div className="PerformanceButs">
      <Button title="English 4" style={{borderRadius: '10px', color:"black",border: '2px solid #6A6A6A',background:'white'}}/>
      <Button title="English 5" style={{borderRadius: '10px', color:"black",border: '2px solid #6A6A6A',background:'white'}}/>
      <Button title="English 6" style={{borderRadius: '10px', color:"black",border: '2px solid #6A6A6A',background:'white'}}/>
      </div>

      <div className="performancePanel">
      <p> February 2, 2020</p>
      <PerformanceTab cont={props.cont} setCont={props.setCont} showPop={props.showPop} onClick={()=>{ props.showPop('UpgradePrompt')}}/>
      <p> January 22, 2020</p>
      <PerformanceTab cont={props.cont} setCont={props.setCont} showPop={props.showPop} onClick={()=>{ props.showPop('UpgradePrompt')}}/>
      <p> January 15, 2020</p>  
      <PerformanceTab cont={props.cont} setCont={props.setCont} showPop={props.showPop} onClick={()=>{ props.showPop('UpgradePrompt')}}/>
      </div>
    </div>

  );
}

export default Performance;
