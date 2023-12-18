import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export default function TaskComponent() {
  let collectedData = { columns: [], rows: [] };
  const store = useSelector((state) => state);

  if (
    store.hasOwnProperty("orderMetaData") &&
    store.orderMetaData &&
    store.orderMetaData.value
  ) {
    collectedData = store.orderMetaData.value.data;
  }

  if (
    store.hasOwnProperty("searchData") &&
    store.searchData &&
    store.searchData.value
  ) {
    collectedData = store.searchData.value.data;
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        checkboxSelection
        disableRowSelectionOnClick
        {...collectedData}
      />
    </div>
  );
}
