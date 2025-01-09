import React, { createContext, useState } from "react";
export const ColorContext = createContext();
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("red"); 

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "blue" : "red")); 
  };
  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
