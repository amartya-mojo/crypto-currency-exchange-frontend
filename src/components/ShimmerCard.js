import React from "react";
import "../index.css";

const ShimmerCard = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-36 ">
      <div className="flex min-w-full justify-between items-center py-1 ">
        <div className="flex min-w-[70%] justify-between items-center py-1">
          <div className="w-1/3 h-8 bg-[#dddbd4]  flex items-center justify-center animate-shimmer">
            {" "}
          </div>
          <div className="w-8 h-8 bg-[#dddbd4] rounded-full cursor-pointer flex items-center justify-center animate-shimmer">
            {" "}
          </div>
          <div className="w-1/3 h-8 bg-[#dddbd4]  flex items-center justify-center animate-shimmer">
            {" "}
          </div>
        </div>
        <div className="flex w-1/2 items-end justify-end py-1 ">
          <label
            htmlFor="exchangeAmount"
            className="flex items-center w-1/2 h-6 py-1 px-1 font-bold text-lg animate-shimmer"
          >
            {""}
          </label>
        </div>
      </div>
      <div className="mt-5  w-3/4 flex items-center justify-center rounded-md cursor-pointer bg-gradient-to-r from-[#f0d78c] to-[#e0d078] px-2 py-2 animate-shimmer">
        <p className="font-bold text-lg text-transparent bg-clip-text">
          {"   "}
        </p>
      </div>
    </div>
  );
};

export default ShimmerCard;
