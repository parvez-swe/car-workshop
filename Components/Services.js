import React from "react";
import Image from "next/image";
import transImage1 from "./image/popescu-andrei-alexandru-KQjBXXPRsYM-unsplash.jpg";
import transImage2 from "./image/christian-buehner-Fd6osyVbtG4-unsplash.jpg";
import transImage3 from "./image/kate-ibragimova-bEGTsOCnHro-unsplash.jpg";
import { MdSettingsSuggest } from "react-icons/md";
import {FaRegHourglass} from "react-icons/fa"
import {FaTrophy} from "react-icons/fa"

const Services = () => {
  return (
    <>
      <div className="px-[8%] bg-white grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="hidden md:flex -translate-y-[80px] z-20 border-[5px] border-white rounded ">
          <Image src={transImage1} className="rounded" layout="fill" />
        </div>
        <div className="grid grid-cols-2 col-span-2 border-[5px] border-white rounded -translate-y-[80px] z-20 w-[100%]">
          <Image src={transImage2} className="h-5 w-5 rounded " />
          <div className=" flex flex-col items-center justify-center px-3 bg-white">
            <h1 className="text-xl font-bold">Request A Callback</h1>
            <p className="font-sm text-slate-700">
              is simply dummy text of the printing and typesetting industry.
              Lorem
            </p>
            <button className="bg-red-600 text-white rounded px-5 py-1">
              Our Services
            </button>
          </div>
        </div>
        <div className=" hidden md:flex -translate-y-[80px] z-20 border-[5px] border-white rounded ">
          <Image src={transImage3} className="rounded" layout="fill" />
        </div>

        {/* <div className="col-start-1"> */}
        {/* <div className="text grid grid-cols-2">
          <MdSettingsSuggest />
        </div> */}
        {/* <Image src={transImage1} layout="" />
        <div className="col-start-3"></div>
      </div> */}
      </div>
      <div className="col-start-2 md:col-span-2 mb-10 mx-[8%] ">
        <h1 className="text-center text-2xl ">Car Servicing And Repairs</h1>
        <p className="text-center text-slate-600 pb-5 ">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's
        </p>
        <hr className="mx-[45%] border-b border-red-600"></hr>
      </div>

      <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 mx-[8%] shadow-2xl rounded">
        <div className="text grid grid-cols-[50px_1fr] grid-rows-3 p-3">
          <MdSettingsSuggest className="fill-red-600 text-3xl ml-2" />
          <div>
            <h1 className="font-bold">Free Diagonostic</h1>
            <p className=" text-slate-700 ">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
          <FaRegHourglass className="fill-red-600 text-3xl ml-2" />
          <div>
            <h1 className="font-bold">Fast repair</h1>
            <p className=" text-slate-700 ">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
          <FaTrophy className="fill-red-600 text-3xl ml-2" />
          <div className="">
            <h1 className="font-bold">90 days warrenty</h1>
            <p className=" text-slate-700 ">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div className="img  -translate-y-0 z-20">
          <Image
            src={transImage1}
            className="grid col-start-2 col-span-1 rounded-r"
            layout="fill"
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Services;
