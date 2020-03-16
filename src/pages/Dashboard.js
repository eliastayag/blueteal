import React, { useState } from "react";
import Forums from "./Forums/Forums";
import Home from "./Home/Home";
import Performance from "./Performance/Performance";
import NotesPage from "./Notes/NotesPage";
import Schedule from "./Schedule/Schedule";
import Menu from "./comps/Menu/Menu";
import theme from "../styles/ThemeStyles";
import "./DashboardStyles.scss";
import Upgrade from './Upgrade/Upgrade';
import Header from './comps/Header/Header';
import ClassDash from './Classes/ClassDash';
import SelectClass from './Classes/SelectClass';
import ClassTemplate from './Classes/ClassTemplate';
import ForumPost from './ForumPost/ForumPost'
import UpgradePay from './Upgrade/UpgradePay';
import ConfirmationPro from './Confirmation/ConfirmationPro';
import ConfirmationPremium from './Confirmation/ConfirmationPremium';


function Dashboard(props) {
  //cont is default to Home.js
  var Content = null;
  const [name, setName] = useState("");
  const [classesname, setClassesName] = useState(null);
  const [lesson, lessonCount] = useState(null);
  const [upgrade, setUpgrade] = useState(null);
  const [status, setStatus] = useState('FREE');


  if (props.cont == "Home") {
    Content = <Home 
              cont={props.cont}
              setCont={props.setCont}
              setName={setName}
              setClassesName={setClassesName}
              lessonCount={lessonCount}
              status={status}
              setStatus={setStatus}


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
              status={status}
              setStatus={setStatus}



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
              status={status}
              setStatus={setStatus}


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
              status={status}
              setStatus={setStatus}


    />;
  }


  
  if (props.cont == "Schedule") {
    Content = <Schedule 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "Performance") {
    Content = <Performance 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "Notes") {
    Content = <NotesPage 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "Forums") {
    Content = <Forums 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "Upgrade") {
    Content = <Upgrade 
              cont={props.cont}
              setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              upgrade={upgrade}
              setUpgrade={setUpgrade}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "UpgradePay") {
    Content = <UpgradePay 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              upgrade={upgrade}
              setUpgrade={setUpgrade}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "ConfirmationPro") {
    Content = <ConfirmationPro 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              upgrade={upgrade}
              setUpgrade={setUpgrade}
              status={status}
              setStatus={setStatus}


    />;
  }
  if (props.cont == "ConfirmationPremium") {
    Content = <ConfirmationPremium
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              upgrade={upgrade}
              setUpgrade={setUpgrade}
              status={status}
              setStatus={setStatus}


    />;
  }

  if (props.cont == "ForumPost" && status == "FREE") {
    props.showPop("UpgradePrompt");
    props.setCont("Forums");
    // Content = <ForumPost 
    // cont={props.cont}
    // setCont={props.setCont}
    //           setName={setName}
    //           showPop={props.showPop}
    //           status={status}
    //           setStatus={setStatus}


    // />;
  }
  if (props.cont == "ForumPost" && status == "PREMIUM") {
    props.showPop("");

    Content = <ForumPost 
    cont={props.cont}
    setCont={props.setCont}
              setName={setName}
              showPop={props.showPop}
              status={status}
              setStatus={setStatus}


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
      itemTitle: "Notes",
      onClick: () => {
        props.setCont("Notes");
        setName("Notes");

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
        <img class="logo" src={require('../imgs/icons/png/t.thin.green.png')}/>
          <div className="dash-header">
          <Header title={name}/>
          </div>
          {Content}
        </div>

    </div>
  );
}

export default Dashboard;
