import React from "react";
import Image from "next/image";
import cartImage from "./image/Home.jpg";
import { cartData } from "./Data";
const OurServices = () => {
  return (
    <>
      <div className="grid grid-cols-4 mt-10">
        <div className="col-start-2 col-span-2 ">
          <h1 className="text-center text-2xl mb-5">Our Services</h1>
          <p className="text-center text-slate-600 ">
            is simply dummy text of the printing and typesetting industrying and
            typese. Lorem Ipsum has been the industry's
          </p>
          <hr className="mx-[45%] border-b border-red-600"></hr>
        </div>
      </div>
      {/* 2nd part */}
      {/* cartData.slice(0,4).map -----> if i need only 4 data from api */}
      <div className="carts grid grid-cols-4 mt-10 mx-[8%]">
        {cartData.slice(0, 8).map((data) => {
          const images = data.url;
          return (
            <div
              key={data.id}
              className="cart text-center z-10 -translate-y-0 h-[18rem] m-2 "
            >
              <div className="cartImage z-10 -translate-y-0 h-[10rem]">
                <Image src={cartImage} layout="fill" />
              </div>
              <button className="px-10 -translate-y-3 z-20 text-white bg-red-600  ">
                Break Services
              </button>
              <p className="text-sm px-2 py-5 text-slate-800">{data.text}</p>
              <button className="text-sm text-red-600 font-bold border-b border-red-600">
                Read More
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurServices;
