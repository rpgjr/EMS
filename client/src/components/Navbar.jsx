import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="navbar bg-neutral text-neutral-content shadow-sm fixed top-0 z-10">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              EMS
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Employees</Link>
              </li>
              <li>
                <Link to="/departments">Departments</Link>
              </li>
              <li>
                <Link to="/designations">Designations</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-base-100 justify-center h-full min-h-screen pt-24 pb-10 px-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navbar;
