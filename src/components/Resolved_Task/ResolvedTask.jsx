import React from "react";

const ResolvedTask = () => {
  return (
    <>
      <h1 className="text-[#34485A] text-2xl font-semibold">Resolved Task</h1>
      <p className="text-[#627382] mt-4 mb-10">No resolved tasks yet.</p>
      <div className="bg-[#B9F8CF] p-4 shadow rounded-md mt-4 mb-10">
        <h2 className="text-[#001931] text-[18px] font-medium mb-4">
          Login Issues - Can't Access Account
        </h2>
        <p className="text-[#02A53B] font-semibold">
          <i class="fa-solid fa-check"></i> Compeleted
        </p>
      </div>
    </>
  );
};

export default ResolvedTask;
