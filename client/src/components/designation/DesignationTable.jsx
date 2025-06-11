import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { HiPencilSquare } from "react-icons/hi2";
import UpdateDesignation from "./UpdateDesignation";
import DeleteDesignation from "./DeleteDesignation";

const DesignationTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-black text-base-100">
              <th>ID</th>
              <th>Title</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td className="text-center flex gap-1 justify-center">
                <button
                  className="btn bg-blue-400 p-3 text-base-100 text-xl"
                  onClick={() => document.getElementById("updateDesignationModal").showModal()}>
                  <HiPencilSquare />
                </button>
                <button className="btn bg-red-400 p-3 text-base-100 text-xl"
                  onClick={() => document.getElementById("deleteDesignationModal").showModal()}>
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <UpdateDesignation />
      <DeleteDesignation />
    </>
  );
};

export default DesignationTable;
