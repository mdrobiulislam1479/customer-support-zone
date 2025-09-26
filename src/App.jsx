import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import CustomerTickets from "./components/Customer_Tickets/CustomerTickets";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [ticketDatas, setTicketDatas] = useState([]);
  const [progress, setProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/ticket.json");
      const data = await res.json();
      setTicketDatas(data);
    };
    fetchTickets();
  }, []);
  const handleProgress = (id) => {
    if (progress.includes(id)) {
      toast.error("It is already added to In Progress!");
      return;
    }
    toast.success("Added to In Progress!");
    const newProgress = [...progress, id];
    setProgress(newProgress);
  };
  const handleResolved = (id) => {
    const ticket = ticketDatas.find((item) => item.id === id);
    if (!ticket) return;
    setTicketDatas((data) => data.filter((item) => item.id !== id));
    setProgress((data) => data.filter((item) => item !== id));
    setResolved((data) => [...data, ticket]);
    toast.success("Resolved Completed!");
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
