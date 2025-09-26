import React from "react";
import facebook from "../../assets/fb.png";
import linkedin from "../../assets/in.png";
import mail from "../../assets/mail.png";
import twitter from "../../assets/tw.png";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-[1440px] mx-auto px-6 2xl:px-0 py-20 text-[#A1A1AA] lg:flex justify-between flex-wrap space-y-6 lg:space-y-0 border-b-[1px] border-[#A1A1AA50]">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">CS — Ticket System</h1>
          <p className="lg:max-w-[350px]">
            Our customer support ticket system ensures efficient issue tracking,
            faster resolutions, and seamless communication. Easily manage and
            prioritize tickets, improve response times, and enhance customer
            satisfaction. Trusted by teams to streamline support processes and
            deliver outstanding service every time.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-[20px] font-medium text-white">Company</h2>
          <div className="flex flex-col space-y-4">
            <a href="">About Us</a>
            <a href="">Our Mission</a>
            <a href="">Contact Saled</a>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className=" text-[20px] font-medium text-white">Services</h2>
          <div className="flex flex-col space-y-4">
            <a href="">Products & Services</a>
            <a href="">Customer Stories</a>
            <a href="">Download Apps</a>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className=" text-[20px] font-medium text-white">Information</h2>
          <div className="flex flex-col space-y-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Join Us</a>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className=" text-[20px] font-medium text-white">Social Links</h2>
          <div className="flex gap-2">
            <img src={twitter} alt="" />
            <a href="">@CS — Ticket System</a>
          </div>
          <div className="flex gap-2">
            <img src={linkedin} alt="" />
            <a href="">@CS — Ticket System</a>
          </div>
          <div className="flex gap-2">
            <img src={facebook} alt="" />
            <a href="">@CS — Ticket System</a>
          </div>
          <div className="flex gap-2">
            <img src={mail} alt="" />
            <a href="">support@cst.com</a>
          </div>
        </div>
      </div>
      <div className="py-7 text-center text-white">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
