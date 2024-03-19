import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { flagValue } from "../actions/flagValue";


export default function Modal(props) {
  //testing
  const store = useSelector((state) => state.flagValue);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);
  const [flagStyle, setFlagStyle] = React.useState(props.open);
  let displayflagvalue = true;
  const [editName, setEditName] = React.useState(props.user.name);
  const [editAmount, setEditAmount] = React.useState(props.user.amount);
  const [editLabour, setEditLabour] = React.useState(props.user.labour);
  const [editDesc, setEditDesc] = React.useState(props.user.desc);
  const [editTime, setEditTime] = React.useState(props.user.time);
  const[flagForRenderingSave,setFlagForRenderingSave] = React.useState(props.flagForRenderingCell)
  let id = props.user.id;

  function selectStyle() {
    if (flagStyle === false) {
      setFlagStyle("none");
    }

    if (store.hasOwnProperty("flagValue") && store.flagValue) {
      displayflagvalue = store.flagValue.value;
    }

    if (
      flagStyle === "none" &&
      props.open === true &&
      displayflagvalue === true
    ) {
      setFlagStyle("block");
    }

    if (
      flagStyle === "none" &&
      props.open === true &&
      displayflagvalue === false
    ) {
      setFlagStyle("none");
    }
  }

  function click() {
    setFlagStyle("none");
    dispatch(flagValue(false));
  }

function save(){
  setFlagForRenderingSave(true)
}

function cancel(){
  setFlagForRenderingSave(false)
}

  function afterSaveAction() {
    return (
      <div>
        <span className="span">Are you sure you want to proceed</span>
        <button onClick={(e) => saveDetails(e, props.user.id)} className="ok">
          Confirm
        </button>
        <button onClick = {cancel} className="cancel">Cancel</button>
      </div>
    );
  }

  function saveDetails(e, id) {
    let obj = {};
    obj["id"] = id;
    obj["name"] = editName;
    obj["desc"] = editDesc;
    obj["amount"] = editAmount;
    obj["labour"] = editLabour;
    obj["time"] = editTime;
    props.table(obj);
    props.flag(false);
   click()
   setFlag(true)
   setFlagForRenderingSave(false)
  }

  function updateFlag() {
     setFlag(false);
  }

  function editname(e, id) {
    if (flag == false) {
      setEditName(e.target.value);
    }
  }

  function editamount(e) {
    if (flag == false) {
      setEditAmount(e.target.value);
    }
  }

  function editlabour(e) {
    if (flag == false) {
      setEditLabour(e.target.value);
    }
  }

  function editdesc(e) {
    if (flag == false) {
      setEditDesc(e.target.value);
    }
  }

  function edittime(e) {
    if (flag == false) {
      setEditTime(e.target.value);
    }
  }

  function getDetails() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Labour</th>
              <th>Desc</th>
              <th>Time</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => updateFlag()}>
              <td><input onChange={(e) => editname(e)} value={editName}/></td>
              <td><input onChange={(e) => editamount(e)} value={editAmount}/></td>
              <td><input onChange={(e) => editlabour(e)} value={editLabour}/></td>
              <td><input onChange={(e) => editdesc(e)} value={editDesc}/></td>
              <td><input onChange={(e) => edittime(e)} value={editTime}/></td>
              <td>{props.user.id}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={save}>Save</button>
        </div>
        <div></div>
      </div>
    );
  }



  useEffect(() => {
    selectStyle();
    if (flag) {
      setEditName(props.user.name);
      setEditAmount(props.user.amount);
      setEditTime(props.user.time);
      setEditLabour(props.user.labour);
      setEditDesc(props.user.desc);
    }
  });


  return (
    <div>
      <div id="myModal" className="modal" style={{ display: flagStyle }}>
        <div className="modal-content">
          <span className="close" onClick={click}>
            &times;
          </span>
          <div className="container">{getDetails()}</div>
          <div>{flagForRenderingSave ? afterSaveAction():""}</div>
        </div>
      </div>
    </div>
  );
}
