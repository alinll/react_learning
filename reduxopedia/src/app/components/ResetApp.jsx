import React from "react";
import { useDispatch } from "react-redux";
import { resetCounter } from "../../redux/slice/counterSlice";

function ResetApp() {
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetCounter())}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
