import React, { use } from "react";

const Ticket = ({ ticketDatas }) => {
  const ticketData = use(ticketDatas);
  console.log(ticketData);
  return (
    <>
      {ticketData.map((data) => (
        <div className="bg-white p-4 rounded-sm shadow text-[#627382] cursor-pointer">
          <div className="flex justify-between items-center">
            <h2 className="text-[#001931] text-[18px] font-medium">
              {data.title}
            </h2>
            <div className="flex items-center gap-1 bg-[#B9F8CF] px-3 py-1 rounded-2xl">
              <div className="h-4 w-4 rounded-full bg-[#02A53B]"></div>
              <p className="text-[#02A53B] font-medium">Open</p>
            </div>
          </div>
          <p className="mt-2 mb-4 line-clamp-2">{data.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <p>#{data.id}</p>
              <p className="text-[#F83044] font-medium">{data.priority}</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <p>{data.customer}</p>
              <p>
                <i className="fa-regular fa-calendar"></i> {data.createdAt}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Ticket;
