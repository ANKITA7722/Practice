//that is js files
//higher order component
const Hoc=(Component)=>{
    //

    const sampleObject=()=>{
        name:"Ankia"
        city:"bhopal"
        role:"MERN Stack Developer"

    }
    return(
        <>
        <h1>HOC <Component value={sampleObject}/></h1>
        </>
    )
}
export default Hoc;