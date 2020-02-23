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


function Dashboard(props) {
  //cont is default to Home.js
  var Content = null;
  const [cont, setCont] = useState("Classes");
  const [name, setName] = useState("Classes");
  if (cont == "Home") {
    Content = <Home 
              cont={cont}
              setCont={setCont}
              setName={setName}
    />;
  }
  if (cont == "Classes") {
    Content = <Classes 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  if (cont == "Classes1") {
    Content = <ClassDash 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  
  if (cont == "Schedule") {
    Content = <Schedule 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  if (cont == "Performance") {
    Content = <Performance 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  if (cont == "Notes") {
    Content = <Notes 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  if (cont == "Forums") {
    Content = <Forums 
              cont={cont}
              setCont={setCont}
              setName={setName}

    />;
  }
  if (cont == "Upgrade") {
    Content = <Upgrade 
              cont={cont}
              setCont={setCont}
              setName={setName}

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
        setCont("Classes");
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
