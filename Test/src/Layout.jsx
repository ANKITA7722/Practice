import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Link to="home">Home</Link>||
      <Link to="about">About</Link>||
      <Link to="emp">First Task EmpData</Link>||
      <Link to="ourcourse">OurCource</Link>||
      <Link to="counter">AutomaticCounter</Link>  ||
      <Link to="employeedata">EmployeeData</Link> ||
      <Link to="style">Style</Link> ||
      {/* <Link to="hoc">HOC</Link> ||
      <Link to="soperator">SpradeOperator</Link> */}
      <Outlet />
    </>
  )
}
export default Layout;