import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function TaskComponent(props) {

  let collectedData = props.table;

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
