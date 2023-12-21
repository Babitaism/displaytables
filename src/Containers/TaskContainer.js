import React, { useEffect } from "react";
import restclient from "../utils/restclient";
import { fetchOrderMetaData } from "../actions/fetchOrderMetaData";
import { useSelector, useDispatch } from "react-redux";
import TaskComponent from "../Components/TaskComponent";
import { showSkeleton } from "../actions/showSkeleton";

export default function TaskContainer() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  let flag = false;

  const fetchOrderDetails = (endPoint) => {
    const orderParams = {
      endPoint: endPoint,
      method: "GET",
    };
    return restclient(orderParams)
      .then((value) => {
        return value;
      })
      .catch(function (err) {
        console.log("----", err); // TODO::error handling
      });
  };

  const dataJoiner = (data) => {
    let ids = Object.keys(data.orders);
    let combinedData = ids.map((id) => {
      return {
        name: data.orders[id].name,
        amount: data.ordersAmount[id].amount,
        labour: data.ordersTat[id].labour,
        desc: data.orders[id].desc,
        time: data.ordersTat[id].time,
        id,
      };
    });
    //  console.log("------------>>", combinedData);
    return combinedData;
  };

  const refineData = (resp) => {
    let combinedData = dataJoiner(resp);
    let refinedData = {};
    let rowdata = combinedData.map((i) => {
      return {
        id: i.id,
        name: i.name,
        desc: i.desc,
        amount: i.amount,
        labour: i.labour,
        time: i.time,
      };
    });

    let values = Object.values(combinedData);
    let firstRowData = values[0];
    let firstRowkeys = Object.keys(firstRowData);
    let columnData = firstRowkeys.map((i) => {
      return {
        field: i,
        headerName: i[0].toUpperCase() + i.slice(1, i.length),
      };
    });
    refinedData["rows"] = rowdata;
    refinedData["columns"] = columnData;
    dispatch(fetchOrderMetaData(refinedData));
  };

  const fetchAllData = () => {
    dispatch(showSkeleton(true));
    Promise.all([
      fetchOrderDetails("orders"),
      fetchOrderDetails("orders-amount"),
      fetchOrderDetails("orders-tat"),
    ]).then((data) => {
      let resp = {
        orders: data[0],
        ordersTat: data[2],
        ordersAmount: data[1],
      };
      dispatch(showSkeleton(false));
      refineData(resp);
    });
  };

  if (
    store.hasOwnProperty("orderMetaData") &&
    store.orderMetaData &&
    store.orderMetaData.value
  ) {
    flag = true;
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return <>{flag && <TaskComponent />}</>;
}
