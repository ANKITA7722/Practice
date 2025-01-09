import { useState } from "react";

const About=()=>{
    const [cnt, setCnt] = useState(1);
    return(
        <>
        <h1>creat Counter {cnt}</h1>
        <button onClick={()=>{setCnt(cnt+10 )}}>Increament</button>
        <button onClick={()=>{setCnt(cnt-10)}}>Decreament</button>
        <button onClick={()=>{setCnt(0)}}>reset</button>
        </>
    )
}
export default About;