import { configureStore } from "@reduxjs/toolkit";
import orderMetaData from "../reducers/orderMetaData";
import searchData from "../reducers/searchData";
import showSkeleton from "../reducers/showSkeleton";
import toggleFlag from "../reducers/toggleFlag";
import flagValue from "../reducers/flagValue";

const store = configureStore({
    reducer: {orderMetaData,searchData,showSkeleton,toggleFlag,flagValue}
  });

  export default store;
