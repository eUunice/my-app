import React from 'react';

const UnitConverter =(props)=>{
    const { handleInputChange, inputValue} = props;
    // console.log(props);

    return(
    <div className="converter">
      
          <div className="flex-1">
            <div className="converter-title">Set</div>

          {/* <input type="number" className="input-number" onChange={()=> console.log('onChange')} value={inputValue} min="0" /> */}
          <input type="number" className="input-number" onChange={handleInputChange} value={inputValue} min="0" />
          
          </div>
          <span className="angle-icon fa-2x" >
            <i className="fas fa-angle-right"></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              type="text"
              className="input-number text-right"
              disabled
              value={inputValue / 8}
            />
          </div>
          {/* {children} */}
        </div>
    )    
}

export default UnitConverter;