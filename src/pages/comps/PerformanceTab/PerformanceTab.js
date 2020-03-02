import React from 'react';
import './PerformanceTab.scss';
import Header from '../Header/Header'



function PerformanceTab(){
    return(
        <div className='performanceTab'>
            <div className="performanceHeader">
                Performance
            </div>
            <div>
            <img className="performancePic" src={require('../../../imgs/ramin.png')}/>
            </div>
            <div className="performanceTab-content">
                <div>
                    Henry Leung
                </div>
                <div>
                    English 4
                </div>
                <div>
                    Bad teaching style. improve.
                </div>
            </div>
             
        </div>
    )
}



export default PerformanceTab;