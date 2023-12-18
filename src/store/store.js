import { configureStore } from "@reduxjs/toolkit";
import orderMetaData from "../reducers/orderMetaData";
import searchData from "../reducers/searchData";

const store = configureStore({
    reducer: {orderMetaData,searchData}
  });

  export default store;
