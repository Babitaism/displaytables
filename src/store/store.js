import { configureStore } from "@reduxjs/toolkit";
import orderMetaData from "../reducers/orderMetaData";
import searchData from "../reducers/searchData";
<<<<<<< HEAD
import showSkeleton from "../reducers/showSkeleton";
import toggleFlag from "../reducers/toggleFlag";
import flagValue from "../reducers/flagValue";

const store = configureStore({
    reducer: {orderMetaData,searchData,showSkeleton,toggleFlag,flagValue}
=======
import showSkeleton from "../reducers/showSkeleton"

const store = configureStore({
    reducer: {orderMetaData,searchData,showSkeleton}
>>>>>>> 4abfc33 (skeleton updated)
  });

  export default store;
