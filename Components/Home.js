import React from "react";
import css from "./Home.module.css";
const Home = () => {
  return (
    <div className={`${css.bg} relative z-10`}>
      <div className="homeText flex flex-col absolute ml-[8%] mt-[7%] z-10 ">
        <h1 className="text-white text-2xl">Looking For Right</h1>
        <h1 className="text-white text-5xl font-bold">
          {" "}
          Auto Repair<span className="block">Service ? </span>
        </h1>
        <button className="bg-white text-red-600 text-sm uppercase w-60 mt-5 py-2 px-0">schedule appointment</button>
      </div>
      <div className="absolute ml-[50%] mt-[3%] z-10 bg-white rounded-lg ">
        <h1 className="flex items-center justify-center mb-5 pt-5 ">
          Request A Callback
        </h1>

        <form className="ContactForm flex flex-col">
          <div className="">
            <input
              className="ml-5 mb-2 mr-2 focus:outline-none border p-1 rounded"
              placeholder={"First Name"}
            />
            <input
              className="mr-5 focus:outline-none border p-1 rounded"
              placeholder={"Last Name"}
            />
          </div>
          <div>
            <input
              className="ml-5 mr-2 focus:outline-none border p-1 rounded"
              placeholder={"Phone"}
            />
            <input
              className="mr-5 focus:outline-none border p-1 rounded"
              placeholder={"Email"}
            />
          </div>
          <textarea
            type="message"
            className="mx-5 mb-5 mt-2 focus:outline-none border rounded h-20"
            placeholder="messege"
          />
          <button type="submit" className="bg-red-600 mx-5 mb-5 rounded-sm text-white">Send</button>
        </form>
      </div>
      <div className={css.banner__fadeBottom} />

    </div>
  );
};

export default Home;
