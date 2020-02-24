import React, {useState} from 'react';
import './CreateLesson.scss'
import Header from '../Header/Header';
import Button from '../Button/Button';




function CreateLesson(props){
    var name = props.classesname;
    var Content = 0;
    const [lesson, lessonCount] = useState(0);


    if (lesson == 0){
        Content =(
            <div className='create-box'>
            <div className='top'>
                <Header title={name}/>
            </div>

            <div className='bot'>
                <img className="create-pen-green" src={require('../../../imgs/icons/png/pen.green.png')}/>
                <p className="create-box-p">No lessons here, make a new one!</p>
                <Button onClick={()=>{ props.showPop("NewLesson");}} title={"New Lesson"}/>

            </div>
        </div>

        )
    }




    return(
        <div>
        {Content}
        </div>

    )
}



export default CreateLesson;