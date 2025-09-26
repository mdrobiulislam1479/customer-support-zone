import React from "react";

const TaskStatus = ({ data, handleResolved }) => {
  return (
    <>
      <div className="bg-white p-4 shadow rounded-md mt-4 mb-10">
        <h2 className="text-[#001931] text-[18px] font-medium mb-4">
          {data.title}
        </h2>
        <button
          className="p-3 w-full bg-[#02A53B] font-semibold text-white rounded-md cursor-pointer"
          onClick={()=>handleResolved(data.id)}
        >
          Complete
        </button>
      </div>
    </>
  );
};

export default TaskStatus;
