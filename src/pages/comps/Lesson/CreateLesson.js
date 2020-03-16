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
                <Button style={{background: 'rgba(149, 217, 254, 0.5)', color:"black"}} onClick={()=>{ props.showPop("NewLesson");}} title={"New Lesson"}/>

            </div>
        </div>

        )
    }
    if (props.cont == "ClassTemplate"){
        Content =(
            <div className='create-box-lesson'>
            <div className='new-top'>
                <Header title={name}/>
                <div className="headerOpts">
                <img src={require('../../../imgs/icons/png/save.png')}/>
                <img src={require('../../../imgs/icons/png/saveTemplate.png')}/>
                <img src={require('../../../imgs/icons/png/download.png')}/>
                <img src={require('../../../imgs/icons/png/print.png')}/>
                </div>
            </div>

            <div className='new-bot'>
                <div className="row-left-template">
                    <div className="box1">
                        <textarea className="box1-input"></textarea>
                    </div>
                    <div className="box1">
                        <textarea className="box1-input"></textarea>
                    </div>
                    <div className="rectangle1">
                        <textarea className="box1-input"></textarea>
                    </div>

                </div>

                <div className='row-right-template'>
                <div className="box1">
                        <textarea className="box1-input"></textarea>
                    </div>
                    <div className="box1">
                        <textarea className="box1-input"></textarea>
                    </div>
                    <div className="rectangle1">
                        <textarea className="box1-input"></textarea>
                    </div>

                </div>



            </div>
        </div>

        )
    }
    
    
    
    
    if (props.lesson == 1){

    
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