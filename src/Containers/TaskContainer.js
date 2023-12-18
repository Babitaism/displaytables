import React, { useEffect } from "react";
import restclient from "../utils/restclient";
import { fetchOrderMetaData } from "../actions/fetchOrderMetaData";
import { useSelector, useDispatch } from "react-redux";
import TaskComponent from "../Components/TaskComponent";

export default function TaskContainer() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

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
    let combinedData = [];
    let key = Object.keys(data[0]);
    for (let i of key) {
      let obj = {};
      obj["task"] = data[0][i].name;
      obj["cost"] = data[2][i].amount;
      obj["manpower"] = data[1][i].labour;
      obj["taskDescription"] = data[0][i].desc;
      obj["time"] = data[1][i].time;
      obj["id"] = i;
      combinedData.push(obj);
    }
    return combinedData;
  };

  const refineData = (data) => {
    let combinedData = dataJoiner(data);
    let refinedData = {};
    let rowdata = [];

    for (let i in combinedData) {
      let newObj = {};
      newObj["id"] = combinedData[i].id;
      newObj["task"] = combinedData[i].task;
      newObj["desc"] = combinedData[i].taskDescription;
      newObj["cost"] = combinedData[i].cost;
      newObj["labour"] = combinedData[i].manpower;
      newObj["time"] = combinedData[i].time;
      rowdata.push(newObj);
    }

    refinedData["columns"] = [
      { field: "task", headerName: "Task" },
      { field: "desc", headerName: "Description" },
      { field: "cost", headerName: "Amount" },
      { field: "labour", headerName: "Manpower" },
      { field: "time", headerName: "Time(in hrs)" },
    ];
    refinedData["rows"] = rowdata;
    dispatch(fetchOrderMetaData(refinedData));
  };

  const fetchAllData = () => {
    Promise.all([
      fetchOrderDetails("orders"),
      fetchOrderDetails("orders-tat"),
      fetchOrderDetails("orders-amount"),
    ]).then((data) => {
      refineData(data);
    });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <TaskComponent />
    </>
  );
}
