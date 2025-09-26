import TaskStatus from "../Task_Status/TaskStatus";
import ResolvedTask from "../Resolved_Task/ResolvedTask";
import Ticket from "../Ticket/Ticket";
import React, { use } from "react";

const CustomerTickets = ({ ticketDatas, handleProgress, progress }) => {
  const ticketData = use(ticketDatas);
  return (
    <div className="max-w-[1440px] mx-auto mb-20 px-6 grid md:grid-cols-5 xl:grid-cols-8 gap-6">
      <div className="md:col-span-3 xl:col-span-6">
        <h1 className="text-[#34485A] text-2xl font-semibold mb-4">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {ticketData.map((data, i) => (
            <Ticket
              data={data}
              key={i}
              handleProgress={handleProgress}
              progress={progress}
            ></Ticket>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <TaskStatus></TaskStatus>
        <ResolvedTask></ResolvedTask>
      </div>
    </div>
  );
};

export default CustomerTickets;
