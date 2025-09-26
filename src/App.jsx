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
  const handleProgress = (id) => {
    if (progress.includes(id)) {
      toast.error("Already In Progress!");
      return;
    }
    toast.success("In Progress!");
    const newProgress = [...progress, id];
    setProgress(newProgress);
  };
  const [resolved, setResolved] = useState([]);
  const handleResolved = (id) => {
    setProgress(progress.filter((item) => item !== id));
    toast.success("Resolved!");
    const newResolved = [...resolved, id];
    setResolved(newResolved);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress} resolved={resolved}></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <CustomerTickets
          ticketDatas={ticketDatas}
          handleProgress={handleProgress}
          handleResolved={handleResolved}
          progress={progress}
          resolved={resolved}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default App;
