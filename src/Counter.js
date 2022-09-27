import React, { useState } from "react";
import "./Counter.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incValue = () => {
    setCounter(counter + 1);
  };

  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Zero limit is reached!!!");
      setCounter(0);
    }
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {counter} </h1>
          <div className="btn_div">
            <Button onClick={incValue} className="btn_green">
              <AddIcon style={{ color: "black" }} />
            </Button>
            <Button onClick={decValue} className="btn_red">
              <DeleteIcon style={{ color: "black" }} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
