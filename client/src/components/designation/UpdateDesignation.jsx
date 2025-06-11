import React from "react";

const UpdateDesignation = () => {
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
              <button className="btn bg-blue-400 text-base-100">Save</button>
              <button className="btn">Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateDesignation;
