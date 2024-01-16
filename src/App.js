import "../src/css/App.scss"
import React from "react";
import Parent from "./Components/Parent";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
    <Provider store={store}>
    <Parent/>
    </Provider>
    </>
  );
}

export default App;
