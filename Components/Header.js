import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="flex flex-row md:justify-between md:px-[8%] border-b border-slate-300 h-16 mt-1">
      <div className="leftdiv ml-4 flex flex-col md:flex-row md:items-center">
        <div className=" address flex mr-5">
          <FaMapMarkerAlt className="mr-2 fill-red-600" />
          <h1 className="text-[12px] ">
            Court Bazar, Ukhiya, Coxs Bazar
          </h1>
        </div>
        <div className="dates flex items-center">
          <MdWatchLater className="mr-2 fill-red-600" />
          <h1 className="text-[12px] ">Mon-Fri: 08:00 - 18:00</h1>
        </div>
      </div>

      <div className="contact flex flex-col md:justify-end">
        <h1 className="text-[12px] flex md:justify-end">Schedule Appointment</h1>
        <div className="flex mt-1 items-center justify-end">
          <BsFillTelephoneFill className="mr-2 text-sm fill-red-600" />
          <a href="tel:123-456-7890" className="text-sm text-slate-500 font-bold">
            1-800123-4568
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
