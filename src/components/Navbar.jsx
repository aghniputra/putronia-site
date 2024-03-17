import React from "react";

const Navbar = ({ handleOpenAbout }) => {
  return (
    <React.Fragment>
      <nav className="flex flex-row gap-10 flex-wrap w-fit items-center -rotate-90 fixed top-[0px] left-[-310px] min-h-screen">
        <ul className="flex flex-row items-center Menu text-primary-blue justify-between">
          <li>
            <div className="h-[1px] bg-primary-blue w-[180px] p-0"></div>
          </li>
          <li className="p-5 cursor-pointer select-none">
            <div> contact</div>
          </li>
          <li className="p-5 cursor-pointer select-none">
            <div>work</div>
          </li>
          <li className="p-5 cursor-pointer select-none">
            <div onClick={handleOpenAbout}>about</div>
          </li>

          <li>
            <div className="h-[1px] bg-primary-blue w-[180px] p-0"></div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
