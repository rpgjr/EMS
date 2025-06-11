import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";

const EmployeeTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-black text-base-100">
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="text-center">
                <button className="btn bg-blue-400 p-3 text-base-100 text-xl me-1">
                  <HiPencilSquare />
                </button>
                <button className="btn bg-red-400 p-3 text-base-100 text-xl">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeTable;
