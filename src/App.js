import "../src/css/App.scss"
import React from "react";
import Parent from "./Components/Parent";
import { Provider } from "react-redux";
import store from "./store/store";
import InterviewTest from "./Components/InterviewTest";

function App() {
  return (
    <>
    <Provider store={store}>
    <Parent/>
    </Provider>
    {/* <InterviewTest/> */}
    </Provider>
    </>
  );
}

export default App;
