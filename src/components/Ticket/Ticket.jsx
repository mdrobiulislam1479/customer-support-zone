import React from "react";

const Ticket = () => {
  return (
    <div className="bg-white p-4 rounded-sm shadow text-[#627382]">
      <div className="flex justify-between items-center">
        <h2 className="text-[#001931] text-[18px] font-medium">
          Login Issues - Can't Access Account
        </h2>
        <div className="flex items-center gap-1 bg-[#B9F8CF] px-3 py-1 rounded-2xl">
          <div className="h-4 w-4 rounded-full bg-[#02A53B]"></div>
          <p className="text-[#02A53B] font-medium">Open</p>
        </div>
      </div>
      <p className="mt-2 mb-4">
        Customer is unable to log in to their account. They've tried resetting
        their password multiple times but still...
      </p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <p>#1001</p>
          <p className="text-[#F83044] font-medium">HIGH PRIORITY</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p>John Smith</p>
          <p>
            <i class="fa-regular fa-calendar"></i> 1/15/2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
