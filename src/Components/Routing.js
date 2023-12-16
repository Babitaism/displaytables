import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routing from "../configs/routing";
import TaskContainer from "../Containers/TaskContainer";
import NoPage from "./NoPage";

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
      <Route key={"abcd"}  path="/" element={<TaskContainer/>} />,
      <Route key={"abcd"} path="*" element={<NoPage />} />
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
