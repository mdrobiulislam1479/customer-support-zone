import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import CustomerTickets from "./components/Customer_Tickets/CustomerTickets";
import { ToastContainer, toast } from "react-toastify";

const fetchTicket = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};
const ticketDatas = fetchTicket();

const App = () => {
  const [progress, setProgress] = useState([]);
  const notify = () =>
    toast(
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-circle-check text-green-500"></i>
        <p>In Progress !</p>
      </div>
    );
  const handleProgress = (id) => {
    if (progress.includes(id)) {
      return;
    }
    notify();
    const newProgress = [...progress, id];
    setProgress(newProgress);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress}></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <CustomerTickets
          ticketDatas={ticketDatas}
          handleProgress={handleProgress}
          progress={progress}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default App;
