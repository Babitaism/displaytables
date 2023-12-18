import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchData } from "../actions/searchData";

function Navbar() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  let obj = {};
  let columnArr = React.useRef({columns: [], rows: []});

  // console.log(columnArr,"cc")

  if (
    store.hasOwnProperty("orderMetaData") &&
    store.orderMetaData &&
    store.orderMetaData.value &&
    store.orderMetaData.value.data
  ) {
    columnArr.current.columns = store.orderMetaData.value.data.columns;
    columnArr.current.rows = store.orderMetaData.value.data.rows;
  }

  function searchOperation(e) {
    let searchedValue = e.target.value;
    let rowArray = columnArr.current.rows.filter((item) => {
      let text = item.task;
      let desc = item.desc
      let lowertext = text.toLowerCase();
      let lowerdesc = desc.toLowerCase();
      let lowercase = searchedValue.toLowerCase();
      let array = [lowertext,lowerdesc]
      for(let i of array){
      if (i.startsWith(lowercase)) {
       return item
      }
    }
    })
    obj["columns"] = columnArr.current.columns;
    obj["rows"] = rowArray;
    console.log(obj, "obj");
    dispatch(searchData(obj));
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          TrackDetails
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={searchOperation}
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
