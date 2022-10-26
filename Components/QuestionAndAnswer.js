import React from "react";
import css from "./QuestionAndAnswer.module.css";
import {BsPlusLg} from "react-icons/bs";
import { questionData } from "./Data";
const QuestionAndAnswer = () => {
  return (
    <>
      <div className={`${css.bg} relative z-10 mt-[3rem]`}>
        <div className="heding text-center text-white pt-10 z-20">
          <h1 className="text-3xl z-20">Frequently Ask question</h1>
          <p>
            We now have an FAQ list that we hope will help you answer some of
            the more common ones.
          </p>
          <hr className=" border-red-600 border-2 mx-[45%] mt-3"></hr>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 pt-10">
          <div className="question-box justify-self-center bg-white rounded w-[70%]">
            {questionData.map((data) => {
              return (
                <>
                  <h1 className="p-3 flex justify-between">
                    {data.serial}. {data.text} <BsPlusLg />
                  </h1>
                  <p className="pl-4 bg-slate-200 mx-2">
                    We provide 6 month sevice warrenty
                  </p>
                </>
              );
            })}
          </div>
          <div className="buttons text-white hidden md:grid">
            <div>
              <h1 className="text-lg">Get A Question?</h1>
              <p className=" mr-[40%] text-sm">
                typesetting industry. Lorem Ipsum has been the industrys 90
                days warrenty is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys
              </p>
              <button className="bg-red-600 px-10 mt-2">Our Sevices</button>
            </div>
            <div className=" mt-5">
              <h1 className="text-lg">Get A Question?</h1>
              <p className=" mr-[40%] text-sm">
                typesetting industry. Lorem Ipsum has been the industrys 90
                days warrenty is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industrys.
              </p>
              <button className="bg-red-600 px-10 mt-2">Our Sevices</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAndAnswer;
