import React from "react";
import DesignationTable from "../components/designation/DesignationTable";
import { FaPlus } from "react-icons/fa6";
import AddDesignation from "../components/designation/AddDesignation";
import Alerts from "../components/Alerts";

const DesignationPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-extrabold mb-5">Designations</p>
        <button
          className="btn bg-green-500 text-base-100 px-4 py-3"
          onClick={() => document.getElementById("addDesignationModal").showModal()}>
          <FaPlus />
        </button>
      </div>
      <DesignationTable />
      {/* Add this to display modal for adding designation */}
      <AddDesignation />
      {/* <Alerts /> */}
    </>
  );
};

export default DesignationPage;
