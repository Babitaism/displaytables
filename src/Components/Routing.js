import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routing from "../configs/routing";
import TaskContainer from "../Containers/TaskContainer";
import NewViewComponent from "./NewViewComponent";
import TaskComponent from "./TaskComponent";
import InterviewTest from "./InterviewTest";

function RoutingComponent(props) {

  function allRoutes() {
    let routeArr = [];
    for (let i in routing) {
      let component = routing[i].component;
      routeArr.push(
        <Route key={"routing" + i} path={routing[i].path} element={component} />
      );
    }
    routeArr.push(

      <Route key={"abcd"} path="/" element={<TaskContainer value={props}/>} />,
      <Route key={"abcd"} path="*" element={<InterviewTest />} />,
      <Route key={"abcd"} path="/newview" element={<NewViewComponent />} />,
       <Route key={"abcd"} path="/task" element={<TaskComponent/>} />,

      <Route key={"abcd"} path="/" element={<TaskContainer/>} />,
      <Route key={"abcd"} path="*" element={<NoPage/>} />

    );
    return routeArr;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>{allRoutes()}</Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutingComponent;
