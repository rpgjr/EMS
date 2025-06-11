import React from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";

const DepartmentTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-black text-base-100">
              <th>ID</th>
              <th>Name</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td className="text-center flex gap-1 justify-center">
                <button className="btn bg-blue-400 p-3 text-base-100 text-xl">
                  <HiPencilSquare />
                </button>
                <button className="btn bg-red-400 p-3 text-base-100 text-xl">
                  <FaRegTrashAlt />
                </button>
                <button className="btn bg-info text-base-100 p-3">
                  <FaEye className="text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DepartmentTable;
