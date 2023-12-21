import { configureStore } from "@reduxjs/toolkit";
import orderMetaData from "../reducers/orderMetaData";
import searchData from "../reducers/searchData";
import showSkeleton from "../reducers/showSkeleton"

const store = configureStore({
    reducer: {orderMetaData,searchData,showSkeleton}
  });

  export default store;
