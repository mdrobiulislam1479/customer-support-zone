const Ticket = ({ data, handleProgress, progress }) => {
  return (
    <div
      className="bg-white p-4 rounded-sm shadow text-[#627382] cursor-pointer"
      onClick={() => handleProgress(data.id)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[#001931] text-[18px] font-medium">{data.title}</h2>
        <div
          className={`flex items-center gap-1 ${
            progress.includes(data.id) ? "bg-[#F8F3B9]" : "bg-[#B9F8CF]"
          }  px-3 py-1 rounded-2xl`}
        >
          <div
            className={`h-4 w-4 rounded-full ${
              progress.includes(data.id) ? "bg-[#FEBB0C]" : "bg-[#02A53B]"
            }`}
          ></div>
          {progress.includes(data.id) ? (
            <p className="text-[#9C7700] font-medium">In-Progress</p>
          ) : (
            <p className="text-[#02A53B] font-medium">Open</p>
          )}
        </div>
      </div>
      <p className="mt-2 mb-4 line-clamp-2">{data.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <p>#{data.id}</p>
          <p
            className={`${
              data.priority === "HIGH PRIORITY"
                ? "text-[#F83044]"
                : data.priority === "MEDIUM PRIORITY"
                ? "text-[#FEBB0C]"
                : "text-[#02A53B]"
            } font-medium`}
          >
            {data.priority}
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p>{data.customer}</p>
          <p>
            <i className="fa-regular fa-calendar"></i> {data.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
