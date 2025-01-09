import EmpData from "./EmpData";
import EmpDesign from "./EmpDesign";

const ans=EmpData.map((key)=><EmpDesign 
eno={key.eno}
nm={key.name}
des={key.designation}
sal={key.salary}
/>)
const Emp=()=>{
    return(
        <>
        <h1> First Task</h1>
        <table>
            <tr>
                <th>Empno</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Emp;