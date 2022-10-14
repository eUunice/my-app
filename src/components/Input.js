import { React } from "react";

function Input  (props) {
  const { name, onChange, type } = props

  return (
    <input name={name} onChange={onChange} type={type}>
      
    </input>
  )
}
//     // <div className="unit-control">
//     //   <div className="unit">Mbps</div>
//     //   <span className="exchange-icon fa-fw fa-stack">
//     //     <i className="far fa-circle fa-stack-2x"></i>
//     //     <i className="fas fa-exchangne-alt fa-stack-1x"></i>
//     //   </span>
//     //   <div className="unit">MB/s</div>
//     // </div>


  

export default Input