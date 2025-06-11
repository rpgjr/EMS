import React from "react";
import { FaPlus } from "react-icons/fa6";
import DepartmentTable from "../components/department/DepartmentTable";

const DepartmentPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-extrabold mb-5">Departments</p>
        <button className="btn bg-green-500 text-base-100 px-4 py-3">
          <FaPlus />
        </button>
      </div>
      <DepartmentTable />
    </>
  );
};

export default DepartmentPage;
