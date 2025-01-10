import HOC from "./Hoc"

const HocWrap=({value})=>{
    return(
        <>
        <div>
            <h1>Hellow World</h1>
            <h2>This is me{value.name}</h2>
            <h2>This is my{value.city}</h2>
            <h2>I am a {value.role}</h2>
            

        </div>
        </>
    )
}
export default HOC(HocWrap);