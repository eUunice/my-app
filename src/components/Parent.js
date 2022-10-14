import { useEffect, useState, React, useReducer } from "react";
import { CSSTransition } from "react-transition-group";
import "../App.css";
import Bmi from "./Bmi";
import Input from "./Input";

function Parent() {
  const [inputVal, dispatch] = useReducer(
    (state, action) => {
      console.log("state", "action");
      console.log(state, action);

      
      return { ...state, ...action };

    },
    { height: "", weight: "" }
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(e);
    console.log(name);
    // console.log(value);
    console.log("input", inputVal);

    dispatch({ [name]: value });
  };

 

  return (
    <div className="card-body">
    
      身高:
      <Input name="height" type={"number"} onChange={handleOnChange} />
      <br></br>
      體重:
      <Input name="weight" type={"number"} onChange={handleOnChange} />
      <br></br>
      <Bmi weight={inputVal.weight} height={inputVal.height} />
    </div>
  );
}

export default Parent;
