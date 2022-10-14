import { React, useEffect } from "react";
import { BrowserRouter, Routes, Route, useRoutes, useNavigate, Link } from "react-router-dom";


function About  () {
    // useEffect(()=>{
    //     nav('/home', )
        
    // },[])

  const nav = useNavigate()

  return (
    <>
    <div className="card-body">

    <button onClick={() => nav('/Parent') } > 雙親 </button>
    <button onClick={() => nav(-1) } > 上一頁 </button>

    </div>


    
    
    </>
  )

  {/* <div className="unit-control">
<div className="unit">Mbps</div>
<span className="exchange-icon fa-fw fa-stack">
<i className="far fa-circle fa-stack-2x"></i>
<i className="fas fa-exchangne-alt fa-stack-1x"></i>
</span>
<div className="unit">MB/s</div>
</div> */}
}



  

export default About