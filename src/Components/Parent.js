import React from "react";
import Routing from "./Routing";
import Navbar from "./Navbar";
import TaskComponent from "./TaskComponent";

function Parent() {

  return (
    <div>
      <Navbar />
      <Routing />
    </div>
  );
}

export default Parent;
