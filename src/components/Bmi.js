import { useEffect, useState, React, Children } from "react";

function Bmi (props) {
    const { height, weight } = props
    
    const b = weight / Math.pow(height/100,2) 

    return(
      <>
        {b}
      </>
    )
  }

export default Bmi;

