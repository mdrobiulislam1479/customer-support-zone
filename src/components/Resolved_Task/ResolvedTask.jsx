import React from "react";

const ResolvedTask = ({ data }) => {
  return (
    <>
      <div className="bg-[#B9F8CF] p-4 shadow rounded-md mt-4 mb-10">
        <h2 className="text-[#001931] text-[18px] font-medium mb-4">
          {data.title}
        </h2>
        <p className="text-[#02A53B] font-semibold">
          <i className="fa-solid fa-check"></i> Compeleted
        </p>
      </div>
    </>
  );
};

export default ResolvedTask;
