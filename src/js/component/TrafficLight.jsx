import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const handleChange=()=>{
   
    if(color==="green"){
      setColor("yellow")
    }
    if(color==="yellow"){
      setColor("red")
    }
    if(color==="red"){
      setColor("green")
    }
  }
  return (
    <div className="traficlight">
      <div
        onClick={() => setColor("red")}
        className={"light red" + (color === "red" ? " glow" : "")}
      ></div>

      <div
        onClick={() => setColor("yellow")}
        className={"light yellow" + (color === "yellow" ? " glow" : "")}
      ></div>

      <div
        onClick={() => setColor("green")}
        className={"light green" + (color === "green" ? " glow" : "")}
      ></div>
	  <button className="button" onClick={() => handleChange()}>Change</button>
	  </div>
    
	
  );
};

export default TrafficLight;
