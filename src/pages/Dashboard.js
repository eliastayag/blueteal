import React, { useState } from "react";
import Forums from "./Forums/Forums";
import Home from "./Home/Home";
import Performance from "./Performance/Performance";
import Notes from "./Notes/Notes";
import Schedule from "./Schedule/Schedule";
import Menu from "./comps/Menu/Menu";
import theme from "../styles/ThemeStyles";
import "./DashboardStyles.scss";
import Upgrade from './Upgrade/Upgrade';
import Header from './comps/Header/Header';
import ClassDash from './Classes/ClassDash';
import SelectClass from './Classes/SelectClass';
import ClassTemplate from './Classes/ClassTemplate';


function Dashboard(props) {
  //cont is default to Home.js
  var Content = null;
  const [name, setName] = useState("");
  const [classesname, setClassesName] = useState(null);
  const [lesson, lessonCount] = useState(null);


  if (props.cont == "Home") {
    Content = <Home 
              cont={props.cont}
              setCont={props.setCont}
              setName={setName}

    />;
  }
  if (props.cont == "SelectClass") {
    Content = <SelectClass
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              classesname={classesname}
              setClassesName={setClassesName}
              lesson={lesson}
              lessonCount={lessonCount}



    />;
  }
  if (props.cont == "ClassDash") {
    Content = <ClassDash 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              classesname={classesname}
              setClassesName={setClassesName}
              lesson={lesson}
              lessonCount={lessonCount}


    />;
  }
  if (props.cont == "ClassTemplate") {
    Content = <ClassTemplate
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              classesname={classesname}
              setClassesName={setClassesName}
              lesson={lesson}
              lessonCount={lessonCount}


    />;
  }


  
  if (props.cont == "Schedule") {
    Content = <Schedule 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (props.cont == "Performance") {
    Content = <Performance 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (props.cont == "Notes") {
    Content = <Notes 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (props.cont == "Forums") {
    Content = <Forums 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (props.cont == "Upgrade") {
    Content = <Upgrade 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }

  var items = [
    {
      itemTitle: "Home",
      onClick: () => {
        props.setCont("Home");
        setName("");
      }
    },
    {
      itemTitle: "Classes",
      onClick: () => {
        props.setCont("SelectClass");
        setName("Classes");

      }
    },
    {
      itemTitle: "Schedule",
      onClick: () => {
        props.setCont("Schedule");
        setName("Schedule");

      }
    },
    {
      itemTitle: "Performance",
      onClick: () => {
        props.setCont("Performance");
        setName("Performance");

      }
    },
    {
      itemTitle: "Notes",
      onClick: () => {
        props.setCont("Notes");
        setName("Notes");

      }
    },
    {
      itemTitle: "Forums",
      onClick: () => {
        props.setCont("Forums");
        setName("Forums");

      }
    },
    {
      itemTitle: "Upgrade",
      onClick: () => {
        props.setCont("Upgrade");
        setName("Plans");

      },
    }
  
  ];

  return (
    <div className="DashBody">
      <div className="dash-menu">
        
        <div className="menuRight">
        <Menu items={items} />

        </div>

      </div>


        <div class="right-content">
          <div className="dash-header">
          <Header title={name}/>
          </div>
          {Content}
        </div>

    </div>
  );
}

export default Dashboard;
