import React, { useEffect, useState } from "react";
import UpdateDesignation from "../components/designation/UpdateDesignation";
import DeleteDesignation from "../components/designation/DeleteDesignation";
import DesignationTable from "../components/designation/DesignationTable";
import AddDesignation from "../components/designation/AddDesignation";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";

const DesignationPage = () => {
  const [designations, setDesignation] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);

  const fetchDesignation = async () => {
    const endpoint = "http://localhost:8080/designation/all";
    await axios.get(endpoint).then((response) => {
      setDesignation(response.data);
    });
  };

  useEffect(() => {
    fetchDesignation();
  }, []);

  useEffect(() => {
    if (selectedDesignation) {
      const modal = document.getElementById(selectedModal);

      if (modal)
        modal.showModal(); 
    }
  }, [selectedDesignation]);

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

      <DesignationTable
        designations={designations}
        setSelectedDesignation={setSelectedDesignation}
        setSelectedModal={setSelectedModal} />
      <AddDesignation fetchDesignation={fetchDesignation} />

      {selectedDesignation && (
        <>
          <UpdateDesignation 
            designation={selectedDesignation}
            fetchDesignation={fetchDesignation}
            setSelectedModal={setSelectedModal}
            setSelectedDesignation={setSelectedDesignation} />
          <DeleteDesignation 
            designation={selectedDesignation}
            fetchDesignation={fetchDesignation}
            setSelectedDesignation={setSelectedDesignation} />
        </>
      )}
    </>
  );
};

export default DesignationPage;
