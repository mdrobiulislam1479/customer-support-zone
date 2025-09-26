import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import CustomerTickets from "./components/Customer_Tickets/CustomerTickets";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CustomerTickets></CustomerTickets>
      <Footer></Footer>
    </>
  );
};

export default App;
