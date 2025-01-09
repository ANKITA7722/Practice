import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeData= () => {
  const [mydata, setMydata] = useState([]);
  const loadData = () => {
    let api = "http://localhost:3000/employees";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data)
    });
  }
  useEffect(() => {
    loadData();
  }, [])
  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
        </tr>
      </>
    )
  })
  return (
    <>
      <table border={2}>
        <tr>
          <th>Empno</th>
          <th>name</th>
          <th>Designation</th>
          <th>salary</th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default EmployeeData;