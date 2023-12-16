import { configureStore } from "@reduxjs/toolkit";
import orderMetaData from "../reducers/orderMetaData";

const store = configureStore({
    reducer: {orderMetaData}
  });

  export default store;
