import React from "react";

const AddDesignation = () => {
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
          <form method="dialog">
            <fieldset className="fieldset mb-5">
              <legend className="fieldset-legend">
                Designation<span className="text-red-500">*</span>
              </legend>
              <input
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
