import axios from "axios";
import React, { useState } from "react";

const AddDesignation = ({ fetchDesignation }) => {
  const endpoint = "http://localhost:8080/designation/add";
  const [designation, setDesignation] = useState({
    title: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDesignation((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(endpoint, designation).catch((err) => console.log(err));
    await fetchDesignation();
    closeModal();
    event.target.title.value = "";
  };

  const closeModal = () => {
    document.getElementById("addDesignationModal").close();
  };

  return (
    <>
      <dialog id="addDesignationModal" className="modal">
        <div className="modal-box">
          <div className="mb-5">
            <p className="text-2xl font-bold">Add designation</p>
            <p className="text-xs text-gray-600">
              Input the name of the desired designation/position/title.
            </p>
          </div>
          <form method="dialog" onSubmit={handleSubmit}>
            <fieldset className="fieldset mb-5">
              <legend className="fieldset-legend">
                Designation<span className="text-red-500">*</span>
              </legend>
              <input
                onChange={handleChange}
                name="title"
                type="text"
                className="input w-full"
                placeholder="Type here" />
            </fieldset>
            <div className="flex gap-1">
              <button className="btn bg-green-400 text-base-100" type="submit">
                Add
              </button>
              <button className="btn" type="button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddDesignation;
