import React from "react";
import css from "./Map.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Map = () => {
  return (
    <div className="">
      <div className="bg-red-600 px-[8%] py-5 text-white mt-[5rem]">
        <h1 className="text-xl font-bold inline-block">
          Schedule Your Appointment Tody
        </h1>
        <p className="inline-block mx-5">
          Your Automotive Repair & Maintenance Service Specialist{" "}
        </p>
        <button className="bg-white text-red-600 px-4 text-sm font-bold rounded">
          Schedule Appointment
        </button>
      </div>
      <div className={`${css.bg} relative z-10 mt-0`}>
        <div className="flex justify-between">
          <div className="bg-white inline-block ml-1 md:ml-5 mt-5 h-[7rem] w-[20rem] pl-2 pt-2">
            <h1 className="text-lg font-bold">7501 Parkwood Ct</h1>
            <p className="text-sm text-slate-500">
              7501 Parkwood Ct, Falls Church, VA
            </p>
            <button className="text-sm mt-5 text-slate-500">view large map</button>
          </div>
          <div className="bg-white inline-block mr-1 md:mr-[8%] md:pr-10 pr-1 pl-5">
            <h1 className="text-3xl uppercase font-bold py-5">
              Auto <span className="text-red-600">Moto</span>
            </h1>
            <h1 className="tex-xl font-bold py-3">Automota Car Services</h1>
            <p className="font-bold py-3">Contact Address:</p>
            <p className="inline-block text-slate-500 text-sm py-1">
              <FaMapMarkerAlt className="fill-red-600 inline-block mr-2" />
              ADRESSS: 7501 Parkwood Ct, Falls Church, VA, 52002
            </p>

            <p className=" text-slate-500 text-sm py-1">
              <MdWatchLater className="fill-red-600 inline-block mr-2" />
              Mon-Fri: 08:00 - 18:00{" "}
            </p>
            <p className="py-5">
              <BsFillTelephoneFill className="inline-block m-2" />
              <a href="tel:123-456-7890" className=" text-slate-500 border-b">
                Call Us Now: 1-800123-4568
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
