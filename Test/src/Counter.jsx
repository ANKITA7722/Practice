import { useEffect, useState } from "react"

const Counter=()=>{
    const [count, setCount] = useState(0);

 useEffect(()=>{
    const interval = setInterval(() => {
        setCount(count => count + 1); 
      }, 1000);
      return () => clearInterval(interval);
    },[])
    return(
    <>
    <h1>Aoutomatic Counter:-{count}</h1>
    </>
    )
}
export default Counter;