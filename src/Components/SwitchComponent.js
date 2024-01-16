import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFlag } from "../actions/toggleFlag";

export function SwitchComponent() {
  const [isToggled, setIsToggled] = React.useState(false);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  let flag = false;

  function toggleaction(e) {
    flag = e.target.checked;
    dispatch(toggleFlag(flag));
    setIsToggled(flag);
  }

  return (
    <>
      <input
        type="checkbox"
        id="switch"
        className="checkbox"
        onChange={toggleaction}
      />
      <label htmlFor="switch" className="toggle"></label>
    </>
  );
}
