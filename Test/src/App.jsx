import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Counter from "./Counter";
import About from "./pages/About";
import Ourcourse from "./pages/OurCource";
import ColorChange from "./ColorChanger";
import { ColorContext } from "./ColorContext";
import EmployeeData from "./EmployeeData";
import EmpDesign from "./pages/EmpDesign";
import EmpData from "./pages/EmpData";
import Emp from "./pages/Emp";
import Hoc from "./pages/Hoc";
import HocWrap from "./pages/HocWrap";
import Soperator from "./pages/Sperator";
import Style from "./pages/Style";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="ourcourse" element={<Ourcourse />} />
            <Route path="counter" element={<Counter />} />
            <Route path="colorchange" element={<ColorChange />} />
            <Route path="colorcontext" element={<ColorContext/>} />
            <Route path="employeedata" element={<EmployeeData/>} />
            <Route path="emp" element={<Emp/>} />
            <Route path="empdata" element={<EmpData/>} />
            <Route path="empdesign" element={<EmpDesign/>} />
            <Route path="hoc" element={<Hoc/>} />
            <Route path="hocwrap" element={<HocWrap/>} />
            <Route path="soperator" element={<Soperator/>} />
            <Route path="style" element={<Style/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;