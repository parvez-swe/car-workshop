import React from "react";

const Contact = () => {
  return (
    <div className="  grid grid-cols-2 mx-[8%] mt-20">
      <h1 className="text-3xl uppercase font-bold text-center self-center">
        Auto <span className="text-red-600">Moto</span>
      </h1>
      <div>
        <h1>Book A Trusted Mechanic</h1>
        <a
          href="tel:123-456-7890"
          className="text-[20px] text-red-600 font-bold block"
        >
        Call Us Now: 1-800123-4568
        </a>
        <button className="bg-red-600 text-white px-5">Contact Now</button>
      </div>
    </div>
  );
};

export default Contact;
