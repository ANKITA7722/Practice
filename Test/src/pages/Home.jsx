import React from "react";
import { ColorProvider } from "../ColorContext";
import ColorChange from "../ColorChanger";

const Home=()=>{
  
  return(
    <>
    <ColorProvider>
      <ColorChange />
    </ColorProvider>
    </>
  )
}
export default Home;