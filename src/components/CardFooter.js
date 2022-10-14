import { React } from "react";

const CardFooter =(props)=>{
    const { inputValue } = props;
    console.log(props);

    let rectangle = {};
    if (!inputValue) {
        rectangle={
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    } else if(inputValue < 15){
        rectangle={
            title: 'slow',
            backgroundColor: 'red',
        }
    } else if(inputValue < 20){
        rectangle={
            title: 'fast',
            backgroundColor: 'green',
        }
    }
    
    return(

        <div className="card-footer" style={{backgroundColor: rectangle.backgroundColor }}>
             {rectangle.title} </div>
    )

}

export default CardFooter;