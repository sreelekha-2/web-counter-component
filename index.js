

import React,{useState} from "react";
import ReactDOM  from "react-dom";
import reactToWebComponent from "react-to-webcomponent"
import propTypes from "prop-types"
import "./src/counter.css"

const MyCounter=(props)=>{
    const [count,setCount]=useState(0)

    const decreaseCount=()=>{
        setCount(count-1)
    }

    const increaseCount=()=>{
        setCount(count+1)
    }


    return (
        <div className="container">
            <h1>{props.name} Counter</h1>
            <p className="count">{count}</p>
            <button onClick={()=>decreaseCount()} className="btn">Decrease</button>
           
            <button onClick={()=>increaseCount()} className="btn">Increase</button>
        </div>
    )
}

MyCounter.propTypes={
    name:propTypes.string,
}
// ReactDOM.render(<MyCounter/>,document.getElementById("root"))
customElements.define("num-counter",reactToWebComponent(MyCounter,React,ReactDOM))
