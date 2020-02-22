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


function Dashboard() {
  //cont is default to Home.js
  var Content = null;
  const [cont, setCont] = useState("Classes");

  if (cont == "Home") {
    Content =  <Home />;
  }
  if (cont == "Classes") {
    Content = <Classes />;
  }
  if (cont == "Schedule") {
    Content = <Schedule />;
  }
  if (cont == "Performance") {
    Content = <Performance />;
  }
  if (cont == "Notes") {
    Content = <Notes />;
  }
  if (cont == "Forums") {
    Content = <Forums />;
  }


  var items = [
    {
      itemTitle: "Home",
      onClick: () => {
        setCont("Home");
      }
    },
    {
      itemTitle: "Classes",
      onClick: () => {
        setCont("Classes");
      }
    },
    {
      itemTitle: "Schedule",
      onClick: () => {
        setCont("Schedule");
      }
    },
    {
      itemTitle: "Performance",
      onClick: () => {
        setCont("Performance");
      }
    },
    {
      itemTitle: "Notes",
      onClick: () => {
        setCont("Notes");
      }
    },
    {
      itemTitle: "Forums",
      onClick: () => {
        setCont("Forums");
      }
    }
  ];

  return (
    <div className="body">
      <div
        style={{ backgroundColor: theme.green }}
        className="column"
        id="left"
      >
        <div id="bottom">
          <div className="t-div">
            <img className='t-logo' src={require('../imgs/icons/png/t.thin.white.png')}/>
          </div>
<div className="menu">

<div id="menuLeft">
<img src={require("../imgs/icons/png/home.fill.white.png")} className="icons"/>
<img src={require("../imgs/icons/png/book.fill.white.png")} className="icons"/>
<img src={require("../imgs/icons/png/calendar.white.png")} className="icons"/>
<img src={require("../imgs/icons/png/star.fill.white.png")} className="icons"/>
<img src={require("../imgs/icons/png/pen.white.png")} className="icons"/>
<img src={require("../imgs/icons/png/doc.white.png")} className="icons" id="docIcon"/>
</div>
<div  id="menuRight">
<Menu items={items} />

</div>

          </div>
          <div className="settings">
          <img className="cog" src={require('../imgs/icons/png/gear.white.png')}/>

          </div>
        </div>
      </div>

      <div id="right" className="column">
        <div class="top-right">
          <div class="user">

            <UserName />
            <UserIcon />
            
            </div>
        </div>
        <div class="bottom">{Content}</div>
        {/* <img classname="bigplus" src={require('../imgs/icons/png/plusicon.yellow.png')}/>    */}
           </div>
    </div>
  );
}

export default Dashboard;
