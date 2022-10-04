import React from 'react'
import mobile from "./image/mobil.jpg";
import mobile1 from './image/Homepage.jpg'
import Image from "next/image";

const Details = () => {
  return (
    <div className="grid grid-cols-2 m-[8%]">
      <p>
        Free Diagonostic is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's Fast repair is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's 90 days warrenty is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
      </p>
      <div className="images relative">
        <div className="img absolute h-[20rem] translate-x-20 -translate-y-[2rem] w-[20rem]">
          <Image className="" src={mobile} />
        </div>
        <div className="img absolute h-[20rem] w-[20rem] translate-y-[3rem]">
          <Image className="" src={mobile1} />
        </div>
      </div>
    </div>
  );
}

export default Details