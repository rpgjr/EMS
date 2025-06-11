import React from "react";
import EmployeeTable from "../components/employee/EmployeeTable";
import { FaPlus } from "react-icons/fa6";

const EmployeePage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-extrabold mb-5">Employees</p>
        <button className="btn bg-green-500 text-base-100 px-4 py-3">
          <FaPlus />
        </button>
      </div>
      <EmployeeTable />
    </>
  );
};

export default EmployeePage;
