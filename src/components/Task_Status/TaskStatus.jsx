import React from "react";

const TaskStatus = () => {
  return (
    <>
      <h1 className="text-[#34485A] text-2xl font-semibold">Task Status</h1>
      <p className="text-[#627382] mt-4 mb-10">
        Select a ticket to add to Task Status
      </p>
      <div className="bg-white p-4 shadow rounded-md mt-4 mb-10">
        <h2 className="text-[#001931] text-[18px] font-medium mb-4">
          Login Issues - Can't Access Account
        </h2>
        <button className="p-3 w-full bg-[#02A53B] font-semibold text-white rounded-md cursor-pointer">
          Complete
        </button>
      </div>
    </>
  );
};

export default TaskStatus;
