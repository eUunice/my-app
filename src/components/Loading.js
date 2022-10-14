import { useEffect, useState, React } from "react";
import { CSSTransition } from "react-transition-group";


function Loading() {
  const [state, setState] = useState(true);

  return (
    <>
      <div class="container">
        <div class="guy-container">
          <div class="guy guy-t"></div>
          <div class="guy guy-b"></div>
        </div>

        <div class="egg-container">
          
          <div class="egg"></div>
          {/* <div class="egg"></div>
          <div class="egg"></div>
          <div class="egg"></div> */}
          
        </div>
      </div>
    </>
  );
}

export default Loading;
