import React from 'react';
import './CreateLesson.scss'
import Header from '../Header/Header';
import Button from '../Button/Button';




function CreateLesson(){
    return(
        <div className='create-box'>
            <div className='top'>
                <Header title={"English 6"}/>
            </div>

            <div className='bot'>
                <img src={require('../../../imgs/icons/png/pen.green.png')} id="pen"/>
                <p id="ds">No lessons here, make a new one!</p>
                <Button id="button" title={"New Lesson"}/>
            </div>
        </div>
    )
}



export default CreateLesson;