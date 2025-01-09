import React, { useContext } from "react";
import { ColorContext } from "./ColorContext";

const ColorChange = () => {
  const { color, changeColor } = useContext(ColorContext);

  return (
    
    <div style={{ textAlign: "center", marginTop: "50px" }}>
<button onClick={changeColor}style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}>Change Color</button>

      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "0 auto",
          backgroundColor: color,
          border: "2px solid black",
        }}></div>
      
    </div>
  );
};

export default ColorChange;
