import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployeePage from "./EmployeePage";
import DepartmentPage from "./DepartmentPage";
import DesignationPage from "./DesignationPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<EmployeePage />} />
            <Route path="departments" element={<DepartmentPage />} />
            <Route path="designations" element={<DesignationPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
