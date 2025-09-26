import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import CustomerTickets from "./components/Customer_Tickets/CustomerTickets";

const fetchTicket = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

const App = () => {
  const ticketDatas = fetchTicket();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <CustomerTickets ticketDatas={ticketDatas}></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </>
  );
};

export default App;
