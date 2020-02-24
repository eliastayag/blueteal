import React, { useState } from "react";
import Classes from "./Classes/Classes";
import Forums from "./Forums/Forums";
import Home from "./Home/Home";
import Performance from "./Performance/Performance";
import Notes from "./Notes/Notes";
import Schedule from "./Schedule/Schedule";
import Menu from "./comps/Menu/Menu";
import theme from "../styles/ThemeStyles";
import "./DashboardStyles.scss";
import UserIcon from './comps/User/UserIcon';
import UserName from './comps/User/UserName';
import Upgrade from './Upgrade/Upgrade';
import Header from './comps/Header/Header';
import ClassDash from './Classes/ClassDash';
import SelectClass from './Classes/SelectClass';


function Dashboard(props) {
  //cont is default to Home.js
  var Content = null;
  const [cont, setCont] = useState("Home");
  const [name, setName] = useState("Home");
  const [classesname, setClassesName] = useState(null);

  if (cont == "Home") {
    Content = <Home 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  if (cont == "SelectClass") {
    Content = <SelectClass
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}
              classesname={classesname}
              setClassesName={setClassesName}


    />;
  }
  if (cont == "ClassDash") {
    Content = <ClassDash 
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}
              classesname={classesname}
              setClassesName={setClassesName}


    />;
  }
  
  if (cont == "Schedule") {
    Content = <Schedule 
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (cont == "Performance") {
    Content = <Performance 
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (cont == "Notes") {
    Content = <Notes 
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (cont == "Forums") {
    Content = <Forums 
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }
  if (cont == "Upgrade") {
    Content = <Upgrade 
              cont={cont}
              setCont={setCont}
              setName={setName}
              showPop={props.showPop}


    />;
  }

  var items = [
    {
      itemTitle: "Home",
      onClick: () => {
        setCont("Home");
        setName("Home");
      }
    },
    {
      itemTitle: "Classes",
      onClick: () => {
        setCont("SelectClass");
        setName("Classes");

      }
    },
    {
      itemTitle: "Schedule",
      onClick: () => {
        setCont("Schedule");
        setName("Schedule");

      }
    },
    {
      itemTitle: "Performance",
      onClick: () => {
        setCont("Performance");
        setName("Performance");

      }
    },
    {
      itemTitle: "Notes",
      onClick: () => {
        setCont("Notes");
        setName("Notes");

      }
    },
    {
      itemTitle: "Forums",
      onClick: () => {
        setCont("Forums");
        setName("Forums");

      }
    },
    {
      itemTitle: "Upgrade",
      onClick: () => {
        setCont("Upgrade");
        setName("Upgrade");

      },
    }
  
  ];

  return (
    <div className="DashBody">
      <div className="dash-menu">
      <Menu items={items} />
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
