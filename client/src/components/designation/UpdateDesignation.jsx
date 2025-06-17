import axios from "axios";
import React, { useState } from "react";

const UpdateDesignation = ({ designation, fetchDesignation, setSelectedDesignation }) => {
  const endpoint = `http://localhost:8080/designation/${designation.id}`;

  const [updatedDesignation, setUpdatedDesignation] = useState({
    title: designation.title,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedDesignation((prevState) => ({ ...prevState, [name]: value }));
  };

  const closeModal = () => {
    document.getElementById("updateDesignationModal").close();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.put(endpoint, updatedDesignation).catch((err) => console.log(err));
    await fetchDesignation();
    closeModal();
    event.target.title.value = "";
  };
  return (
    <>
      <dialog id="updateDesignationModal" className="modal">
        <div className="modal-box">
          <div className="mb-5">
            <p className="text-2xl font-bold">Update designation</p>
            <p className="text-xs text-gray-600">
              Update the name of the desired designation/position/title.
            </p>
          </div>
          <form method="dialog" onSubmit={handleSubmit}>
            <fieldset className="fieldset mb-5">
              <legend className="fieldset-legend">
                Designation<span className="text-red-500">*</span>
              </legend>
              <input
                name="title"
                value={updatedDesignation.title}
                onChange={handleChange}
                type="text"
                className="input w-full"
                placeholder="Type here"
              />
            </fieldset>
            <div className="flex gap-1">
              <button className="btn bg-blue-400 text-base-100" type="submit">Save</button>
              <button 
                className="btn" 
                type="button"
                onClick={() => {
                  setSelectedDesignation(null);
                  closeModal;
                }}>
                  Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateDesignation;
