import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
// import "../css/index.css";
import { flagValue } from "../actions/flagValue";
import { useEffect } from "react";

export default function TaskComponent(props) {
  console.log(props)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let collectedData = props.value;

  const store = useSelector((state) => state.toggleFlag);
  const [flag, setFlag] = React.useState(false);
  let valueOfFlag = false;
  const [userDetail, setUserDetail] = React.useState({});
  const [collectedData, setCollectedData] = React.useState(props.value);
  const [updatedFlag, setUpdatedFlag] = React.useState(true);
  let updatedCopy = { columns: [], rows: [] };
  const [flagForRenderCell, setFlagForRenderCell] = React.useState(false);
  const [flagVal, setFlagVal] = React.useState(props.value1.flagvalue);



  // you can use store as well to get collected data
  // if (
  //   store.hasOwnProperty("orderMetaData") &&
  //   store.orderMetaData &&
  //   store.orderMetaData.value
  // ) {
  //   collectedData = store.orderMetaData.value.data;
  // }

export default function TaskComponent() {
  let collectedData = { columns: [], rows: [] };
  const store = useSelector((state) => state);

  function expandCollectedData(e) {
    if (
      store.hasOwnProperty("toggleFlag") &&
      store.toggleFlag &&
      store.toggleFlag.value
    ) {
      valueOfFlag = store.toggleFlag.value;
    }
    if (valueOfFlag == false) {
      navigate("/newview");
    }
    if (valueOfFlag) {
      let user = e.row;
      setUserDetail(user);
      setFlag(valueOfFlag);
      dispatch(flagValue(valueOfFlag));
    }
  }

  function updateFlagAfterModal(flag) {
    setUpdatedFlag(flag);
  }

  function renderUpdatedTable(updatedRow) {
    console.log(updatedRow)
    let updatedRowCopy = JSON.parse(JSON.stringify(collectedData.rows));
    let updatedColumn = JSON.parse(JSON.stringify(collectedData.columns));
    for (let i in updatedRowCopy) {
      if (updatedRow["id"] == updatedRowCopy[i]["id"]) {
        updatedRowCopy[i] = updatedRow;
        break;
      }
    }
    updatedCopy.rows = updatedRowCopy;
    updatedCopy.columns = updatedColumn;
    setCollectedData(updatedCopy);
    setFlagForRenderCell(false)
  }

  useEffect(() => {
    if (updatedFlag) {
      setCollectedData(props.value);
    }
  });


  useEffect(() => {
    setFlagVal(props.value1.flagvalue)
    if (flagVal) {
      setCollectedData(props.value1.refinedData);
    }
  });

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          {...collectedData}
          onCellClick={expandCollectedData}
        />
      </div>

      {
        <Modal
          open={flag}
          user={userDetail}
          table={renderUpdatedTable}
          flag={updateFlagAfterModal}
          flagForRenderingCell={flagForRenderCell}
        />
      }


    </>
  );
}
