import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white text-black border-b-[1px] border-gray-300">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold">CS — Ticket System</div>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="hover:text-[#632EE3]">
              Home
            </a>
            <a href="/" className="hover:text-[#632EE3]">
              FAQ
            </a>
            <a href="/" className="hover:text-[#632EE3]">
              Changelog
            </a>
            <a href="/" className="hover:text-[#632EE3]">
              Blog
            </a>
            <a href="/" className="hover:text-[#632EE3]">
              Download
            </a>
            <a href="/" className="hover:text-[#632EE3]">
              Contact
            </a>
            <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0">
              + New Ticket
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden px-6 py-4 space-y-4 flex flex-col text-center border-t-[1px] border-gray-300">
          <a
            href="/"
            className="hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:p-2 rounded-md duration-200"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:p-2 rounded-md duration-200"
          >
            FAQ
          </a>
          <a
            href="/"
            className="hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:p-2 rounded-md duration-200"
          >
            Changelog
          </a>
          <a
            href="/"
            className="hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:p-2 rounded-md duration-200"
          >
            Blog
          </a>
          <a
            href="/"
            className="hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:p-2 rounded-md duration-200"
          >
            Download
          </a>
          <a
            href="/"
            className="hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:p-2 rounded-md duration-200"
          >
            Contact
          </a>
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-0">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
