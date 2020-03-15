import React from 'react';
import './PerformanceTab.scss';
import Header from '../Header/Header'



function PerformanceTab(){
    return(
        <div className='performanceTab'>
            <p className="performanceHeader">Performance</p>
            <div className="performanceDotDiv">
                <div className="performanceDot Dot1"></div>
                <div className="performanceDot Dot1"></div>
                <div className="performanceDotE Dot1"></div>
                <div className="performanceDotE Dot1"></div>
                <div className="performanceDotE Dot1"></div>
            </div>


            <div className="performanceTab-content">
                <img  className="performancePic" src={require('../../../imgs/ramin.png')}/>
                <div className="performanceTab-sub">
                    <p className="pTab-1">Henry Leung</p>
                    <p style={{color: '#555555', fontSize:'20px'}}>English 4</p>
                    <p className="pTab-3">bad teachign style u need to improve</p>
                </div>


            </div>

             
        </div>
    )
}



export default PerformanceTab;