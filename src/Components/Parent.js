import React from "react";
import Routing from "./Routing";
import Navbar from "./Navbar";
import SkeletonComponent from "./SkeletonComponent";

function Parent() {
  return (
    <div>
      <Navbar />
      <SkeletonComponent/>
      <Routing />
    </div>
  );
}

export default Parent;
