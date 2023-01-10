import React from "react";
import { loader } from "../assets";
const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-flex">
      <img
        src={loader}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
      <p className="mt-[20x] font-epilogue font-old text-[20px] text-white text-center ">
        Transaction in progress <br /> Please Wait ...
      </p>
    </div>
  );
};

export default Loader;
