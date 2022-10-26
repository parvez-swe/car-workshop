import React from 'react'
import {RiDoubleQuotesL} from "react-icons/ri"
import { reviewsData } from './Data';
const CustomerReview = () => {
  return (
    <div className="customers revies">
      <div className="heding text-center text-black pt-10 z-20">
        <h1 className="text-3xl z-20">Cusotmer reviews</h1>
        <p className="mx-[30%] pt-5">
          We now have an FAQ list that we hope will help you answer some of the
          more common ones.We now have an FAQ list that we hope will help y
        </p>
        <hr className=" border-red-600 border-2 mx-[45%] mt-3"></hr>
      </div>
      <div className="reviews grid grid-cols-2 md:grid-cols-4 mx-[8%] pt-10">
        {reviewsData.map((data)=>{
        return (
          <>
            <div className=" review w-[15rem] p-3 shadow-2xl">
              <RiDoubleQuotesL className="fill-red-600 h-10 w-10" />
              <p className="">
                We now have an FAQ list that we hope will help you answer some
                of the more common ones.
              </p>
              <p className="text-red-600 font-bold">Karim khan</p>
            </div>
          </>
        );})}
      </div>
    </div>
  );
}

export default CustomerReview