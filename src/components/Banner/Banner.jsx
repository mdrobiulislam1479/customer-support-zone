import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = ({ progress, resolved }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 my-[40px] md:my-[80px]">
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-10 md:py-17 flex flex-col items-center justify-center rounded-lg relative text-white">
        <img src={vector1} className="absolute left-0 h-full" />
        <img src={vector2} className="absolute right-0 h-full" />
        <p className="text-2xl">In-Progress</p>
        <p className="text-[60px] font-semibold">{progress.length}</p>
      </div>
      <div className="bg-linear-to-r from-[#54CF68] to-[#00827A] py-10 md:py-17 flex flex-col items-center justify-center rounded-lg relative text-white">
        <img src={vector1} className="absolute left-0 h-full" />
        <img src={vector2} className="absolute right-0 h-full" />
        <p className="text-2xl">Resolved</p>
        <p className="text-[60px] font-semibold">{resolved.length}</p>
      </div>
    </div>
  );
};

export default Banner;
