import React from 'react'
import mobile from "./image/mobil.jpg";
import mobile1 from './image/Homepage.jpg'
import Image from "next/image";

const Details = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 m-[8%]">
      <p className="mb-16 text-center">
        Free Diagonostic is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys Fast repair is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys 90 days warrenty is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys
      </p>
      <div className="images relative md:ml-10 flex justify-center">
        <div className="img absolute  min-h-[10rem]  translate-x-10 md:translate-x-15 max-w-[15rem]">
          <Image className="" src={mobile} alt="image not found" />
        </div>
        <div className="img absolute min-h-[10rem] max-w-[15rem] md:max-w-20 translate-y-[3rem]">
          <Image className="" src={mobile1} alt="image not found" />
        </div>
      </div>
    </div>
  );
}

export default Details