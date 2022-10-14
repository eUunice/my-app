import { React, useEffect } from "react";
import { Outlet, Routes, Route, useRoutes, useNavigate, Link } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Children  () {

  const Menu = () =>{
    return (
      <>
      <Link to='/layouts/Children/Child1' element={<Child1 />}>Child1 </Link>
      <Link to='/layouts/Children/Child2' element={<Child2 />}>Child2 </Link>
      </>
    )
  }
    

  return (
  
    <div className="card-body">
    <Menu />
    
    <div className="card-body"><Outlet/></div>
    
  
    </div>

  )

}



  

export default Children