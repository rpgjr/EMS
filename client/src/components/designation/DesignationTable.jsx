import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";

const DesignationTable = ({ designations, setSelectedDesignation, setSelectedModal }) => {

  const showUpdateModal = () => {
    document.getElementById("updateDesignationModal").showModal();
  }

  const showDeleteModal = () => {
    document.getElementById("deleteDesignationModal").showModal();
  }

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
            {designations.map(( designation ) => (
              <tr key={ designation.id }>
                <th>{ designation.id }</th>
                <td>{ designation.title }</td>
                <td className="text-center flex gap-1 justify-center">
                  <button
                    className="btn bg-blue-400 p-3 text-base-100 text-xl"
                    onClick={() => {
                      setSelectedModal("updateDesignationModal");
                      setSelectedDesignation(designation);
                      showUpdateModal;
                    }}>
                    <HiPencilSquare />
                  </button>
                  <button
                    className="btn bg-red-400 p-3 text-base-100 text-xl"
                    onClick={() => {
                      setSelectedModal("deleteDesignationModal");
                      setSelectedDesignation(designation);
                      showDeleteModal;
                    }}>
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DesignationTable;
