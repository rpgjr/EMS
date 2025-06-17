import axios from "axios";
import React from "react";
import { IoMdWarning } from "react-icons/io";

const DeleteDesignation = ({ designation, fetchDesignation, setSelectedDesignation }) => {
  const endpoint = `http://localhost:8080/designation/${designation.id}`;
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.delete(endpoint).catch(err => console.log(err));
    await fetchDesignation();
    closeModal();
  }

  const closeModal = () => {
    document.getElementById("deleteDesignationModal").close();
  }

  return (
    <>
      <dialog id="deleteDesignationModal" className="modal">
        <div className="modal-box">
          <div className="flex gap-1 mb-5">
            <IoMdWarning className="text-red-500" size={27} />
            <p className="text-2xl font-bold">Delete designation</p>
          </div>
          <form method="dialog" onSubmit={handleSubmit}>
            <p className="mb-5">
              Are you sure you want to delete <span className="font-bold">"{designation.title}"</span> designation?
            </p>
            <div className="flex gap-1">
              <button className="btn bg-red-400 text-base-100" type="submit">Delete</button>
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

export default DeleteDesignation;
