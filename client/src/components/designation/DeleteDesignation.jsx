import React from "react";
import { IoMdWarning } from "react-icons/io";

const DeleteDesignation = () => {
  return (
    <>
      <dialog id="deleteDesignationModal" className="modal">
        <div className="modal-box">
          <div className="flex gap-1 mb-5">
            <IoMdWarning className="text-red-500" size={27} />
            <p className="text-2xl font-bold">Delete designation</p>
          </div>
          <form method="dialog">
            <p className="mb-5">Are you sure you want to delete this designation?</p>
            <div className="flex gap-1">
              <button className="btn bg-red-400 text-base-100">Delete</button>
              <button className="btn">Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DeleteDesignation;
