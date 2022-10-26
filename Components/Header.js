import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="hidden  md:flex md:justify-between md:px-[8%] border-b border-slate-300 h-16">
      <div className="leftdiv flex items-center">
        <div className=" address flex mr-5">
          <FaMapMarkerAlt className="mr-2 fill-red-600" />
          <h1 className="text-[12px] ">
            ADRESSS: 7501 Parkwood CT, Fals Church, VA 22042, USA
          </h1>
        </div>
        <div className="dates flex items-center">
          <MdWatchLater className="mr-2 fill-red-600" />
          <h1 className="text-[12px] ">Mon-Fri: 08:00 - 18:00</h1>
        </div>
      </div>

      <div className="contact flex flex-col flex-end justify-end">
        <h1 className="text-[12px] flex justify-end">Schedule Appointment</h1>
        <div className="flex mt-1 items-center justify-end">
          <BsFillTelephoneFill className="mr-2 fill-red-600" />
          <a href="tel:123-456-7890" className="text-[20px] text-slate-500 font-bold">
            1-800123-4568
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
