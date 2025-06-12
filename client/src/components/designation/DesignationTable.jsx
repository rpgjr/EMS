import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiPencilSquare } from "react-icons/hi2";
import UpdateDesignation from "./UpdateDesignation";
import DeleteDesignation from "./DeleteDesignation";
import axios from "axios";

const DesignationTable = () => {
  const [designations, setDesignation] = useState([]);

  const fetchDesignation = async () => {
    const endpoint = "http://localhost:8080/designation/all";
    await axios.get(endpoint).then((response) => {
      setDesignation(response.data);
    });
  };

  useEffect(() => {
    fetchDesignation();
  }, [designations]);

  console.log(designations);

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
            {designations.map((designation) => (
              <tr key={designation.id}>
                <th>{designation.id}</th>
                <td>{designation.title}</td>
                <td className="text-center flex gap-1 justify-center">
                  <button
                    className="btn bg-blue-400 p-3 text-base-100 text-xl"
                    onClick={() => document.getElementById("updateDesignationModal").showModal()}>
                    <HiPencilSquare />
                  </button>
                  <button
                    className="btn bg-red-400 p-3 text-base-100 text-xl"
                    onClick={() => document.getElementById("deleteDesignationModal").showModal()}>
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateDesignation />
      <DeleteDesignation />
    </>
  );
};

export default DesignationTable;
