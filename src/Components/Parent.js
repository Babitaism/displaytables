import React from "react";
import Routing from "./Routing";
import Navbar from "./Navbar";
import SkeletonComponent from "./SkeletonComponent";
<<<<<<< HEAD
import "../css/index.css";
import { Provider } from "react-redux";
import store from "../store/store";
=======
>>>>>>> 4abfc33 (skeleton updated)

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
<<<<<<< HEAD
      <Provider store={store}>
        <Navbar data={data} flag={flag1} />
        <SkeletonComponent />
        <Routing refinedData={refinedData} flagvalue={flag} />
      </Provider>
=======
      <Navbar />
      <SkeletonComponent/>
      <Routing />
>>>>>>> 4abfc33 (skeleton updated)
    </div>
  );
}

export default Parent;
