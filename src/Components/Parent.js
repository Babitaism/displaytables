import React from "react";
import Routing from "./Routing";
import Navbar from "./Navbar";
import SkeletonComponent from "./SkeletonComponent";
import "../css/index.css";
import { Provider } from "react-redux";
import store from "../store/store";

function Parent() {
  const [refinedData, setRefinedData] = React.useState({
    columns: [],
    rows: [],
  });
  const [flag, setFlag] = React.useState(false);

  function data(refineData) {
    setRefinedData(refineData);
  }

  function flag1(flagvalue) {
    console.log(flagvalue, "searchflaginnavbar");
    setFlag(flagvalue);
  }

  return (
    <div>
      <Provider store={store}>
        <Navbar data={data} flag={flag1} />
        <SkeletonComponent />
        <Routing refinedData={refinedData} flagvalue={flag} />
      </Provider>
    </div>
  );
}

export default Parent;
