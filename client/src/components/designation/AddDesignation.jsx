import axios from "axios";
import React, { useState } from "react";

const AddDesignation = () => {
  const[designation, setDesignation] = useState({
    title: ''
  });

  const handleChange = (event) => {
		const { name, value } = event.target;
		setDesignation((prevState) => ({ ...prevState, [name]: value }));
	};

  const handleSubmit = (event) => {
    const endpoint = 'http://localhost:8080/designation/add';
    event.preventDefault();
    axios.post(endpoint, designation).then(document.getElementById("addDesignationModal").close()).catch(err => console.log(err));
  }

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
                placeholder="Type here"
              />
            </fieldset>
            <div className="flex gap-1">
              <button className="btn bg-green-400 text-base-100">Add</button>
              <button className="btn">Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddDesignation;
