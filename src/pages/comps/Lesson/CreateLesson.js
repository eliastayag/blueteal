import React, {useState} from 'react';
import './CreateLesson.scss'
import Header from '../Header/Header';
import Button from '../Button/Button';


function List({itemTitle, onClick}){
    return(

         <div className="class-lesson-plan" onClick={onClick}>{itemTitle}</div>

    )
}

List.defaultProps = {
    itemTitle:"Menu Item Title",
    onClick: ()=> {},


}




function CreateLesson(props){
    var name = props.classesname;
    var Content = null;
    
    var items = [
        {
          itemTitle:'Class #1',
        //   style:"classcard-red",
        //   onClick:()=>{props.setClassesName('English 4');
        //   // props.setComp("ClassDash");
        //   props.setCont("ClassDash");
        //   props.setName("Monday, Feb 24th");
        //   }
        },
        {
          itemTitle:'Class #2',
        //   style:"classcard-blue",
        //   onClick:()=>{props.setClassesName('English 5');
        //   // props.setComp("ClassDash");
        //   props.setCont("ClassDash");
        //   props.setName("Monday, Feb 24th");}
        },
        {
          itemTitle:'Class #3',
        //   style:"classcard-purple",
        //   onClick:()=>{props.setClassesName('English 6');
        //   // props.setComp("ClassDash");
        //   props.setCont("ClassDash");
        //   props.setName("Monday, Feb 24th");}
        },
      ]


    if (props.lesson == null){
        Content =(
            <div className='create-box'>
            <div className='no-top'>
                <Header title={name}/>
            </div>

            <div className='no-bot'>
                <img className="create-pen-green" src={require('../../../imgs/icons/png/pen.green.png')}/>
                <p className="create-box-p">No lessons here, make a new one!</p>
                <Button onClick={()=>{ props.showPop("NewLesson");}} title={"New Lesson"}/>

            </div>
        </div>

        )
    } else {
        Content = (
            <div className='create-box'>
            <div className='top'>
                <Header title={name}/>
                <p className="new-plus" onClick={()=> {props.showPop("NewLesson")}}>+</p>
            </div>

            <div className='bot'>
            {items.map((o,i)=>{
                    return <List   {...o} />
                })}

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