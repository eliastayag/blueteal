import React from 'react';
import './CreateLesson.scss'
import Header from '../Header/Header';
import Button from '../Button/Button';




function CreateLesson(props){
    return(
        <div className='create-box'>
            <div className='top'>
                <Header title={"English 6"}/>
            </div>

            <div className='bot'>
                <img className="create-pen-green" src={require('../../../imgs/icons/png/pen.green.png')}/>
                <p className="create-box-p">No lessons here, make a new one!</p>
                <Button onClick={()=>{ props.showPop("NewLesson");}} title={"New Lesson"}/>

            </div>
        </div>
    )
}



export default CreateLesson;