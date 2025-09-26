import TaskStatus from "../Task_Status/TaskStatus";
import ResolvedTask from "../Resolved_Task/ResolvedTask";
import Ticket from "../Ticket/Ticket";
import React, { use } from "react";

const CustomerTickets = ({
  ticketDatas,
  handleProgress,
  progress,
  handleResolved,
  resolved,
}) => {
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
        <h1 className="text-[#34485A] text-2xl font-semibold">Task Status</h1>
        {progress.length === 0 ? (
          <p className="text-[#627382] mt-4 mb-10">
            Select a ticket to add to Task Status
          </p>
        ) : (
          progress.map((ticketId, i) => {
            const ticket = ticketData.find((ticket) => ticket.id === ticketId);
            return ticket ? (
              <TaskStatus
                key={i}
                data={ticket}
                handleResolved={handleResolved}
              ></TaskStatus>
            ) : null;
          })
        )}
        <h1 className="text-[#34485A] text-2xl font-semibold">Resolved Task</h1>
        {resolved.length === 0 ? (
          <p className="text-[#627382] mt-4 mb-10">No resolved tasks yet.</p>
        ) : (
          resolved.map((ticketId, i) => {
            const ticket = ticketData.find((ticket) => ticket.id === ticketId);
            return ticket ? (
              <ResolvedTask key={i} data={ticket}></ResolvedTask>
            ) : null;
          })
        )}
      </div>
    </div>
  );
};

export default CustomerTickets;
