import React from "react";
import css from "./Home.module.css";
const Home = () => {
  return (
    <div className={`${css.bg} relative z-10 `}>
      <div className="homeText flex flex-col absolute ml-[8%] mt-[7%] z-10 ">
        <h1 className="text-white text-2xl">Looking For Right</h1>
        <h1 className="text-white text-5xl font-bold">
          {" "}
          Auto Repair<span className="block">Service ? </span>
        </h1>
        <button className="bg-white text-red-600 text-sm uppercase w-60 mt-5 py-2 px-0">
          schedule appointment
        </button>
      </div>
      <div className=" absolute top-2 right-2 z-10 bg-white rounded-lg ">
        <h1 className="flex items-center justify-center mb-5 pt-5 ">
          Request A Callback
        </h1>

        <form className="ContactForm grid grid-cols-1 md:grid-cols-2 items-center mx-2 [&>*]:my-1 md:[&>*]:mx-2 last:mb-5">
          <input
            className=" focus:outline-none border p-1 rounded"
            placeholder={"First Name"}
          />
          <input
            className=" focus:outline-none border p-1 rounded"
            placeholder={"Last Name"}
          />
          <input
            className=" focus:outline-none border p-1 rounded"
            placeholder={"Phone"}
          />
          <input
            className=" focus:outline-none border p-1 rounded"
            placeholder={"Email"}
          />

          <textarea
            type="message"
            className=" md:col-span-2 focus:outline-none border rounded"
            placeholder="messege"
          />
          <button
            type="submit"
            className="bg-red-600 md:col-span-2 px-4 rounded-sm text-white"
          >
            Send
          </button>
        </form>
      </div>
      <div className={css.banner__fadeBottom} />
    </div>
  );
};

export default Home;
