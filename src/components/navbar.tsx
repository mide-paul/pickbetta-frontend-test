import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom"
import logo from './../assets/icons/logo.png'
import menu_icon from './../assets/icons/menu_icon.png'


export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  window.addEventListener("click", handleClickOutsideDropdown)

  const { pathname } = useLocation();

  if (pathname === "/signup") return null;
  if (pathname === "/login") return null;
  if (pathname === "/homesignedin") return null;
  if (pathname === "/editornote") return null;
  if (pathname === "/bettadeepdive") return null;
  if (pathname === "/nfldeepdive") return null;
  if (pathname === "/bettadawg") return null;
  if (pathname === "/verifyemail") return null;

  const bgClass =
  pathname === "/"
    ? "bg-white"
    : pathname === "/aboutus"
    ? "bg-white"
    : pathname === "/privacy"
    ? "bg-green-light"
    : pathname === "/terms"
    ? "bg-green-light"       
    : pathname === "/pricing"
    ? "bg-green-light"         
    : "bg-green-light"; 

  return (
    <div className="relative">
      <div className="md:hidden x:hidden xl:hidden">
        <div className="fixed top-0 left-0 w-full h-10 bg-white z-10">
          <div className="relative 
            ss:mt-3 ss:mx-2 ss:w-auto ss:h-7 
            sm:mt-3 sm:mx-2 sm:w-auto sm:h-7 
            bg-white shadow rounded-3xl z-20
          ">
            <img
              src={logo}
              alt=""
              className="absolute h-5 mt-2.5 ml-5 z-10"
            />
            <div ref={dropdownRef}>
              <img
                onClick={() => setOpen(!open)}
                src={menu_icon}
                alt=""
                className="absolute  h-5 mt-2.5 
                  ss:right-5 
                  sm:right-5 
                  z-10"
              />
              {open && (
                <div className="absolute bg-white w-screen h-19.6 mt-8 ml-0 z-10">
                  <div className="absolute bg-white -ml-5 h-19.6 w-screen mt-0"></div>
                  <div className="flex flex-col gap-4 -ml-7">
                    <h3
                      onClick={() => setOpen(!open)}
                      className="relative mt-4 text-center text-dark text-base font-normal font-montserrat"
                    >
                      Betta Insights
                    </h3>
                    <Link to="/pricing">
                      <h3
                        onClick={() => setOpen(!open)}
                        className="relative text-center text-dark text-base font-normal font-montserrat"
                      >
                        Pricing
                      </h3>
                    </Link>
                    <Link to="/faqs">
                      <h3
                        onClick={() => setOpen(!open)}
                        className="relative text-center text-dark text-base font-normal font-montserrat"
                      >
                        FAQs
                      </h3>
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <Link to="/login">
                      <button
                        onClick={() => setOpen(!open)}
                        className="relative p-2 w-20.5 -ml-7 mt-4 font-bold text-green border rounded font-montserrat"
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button
                        onClick={() => setOpen(!open)}
                        className="relative p-2 w-20.5 -ml-7 mt-4 font-medium text-white bg-green rounded font-montserrat"
                      >
                        Start Now!
                      </button>
                    </Link>
                  </div>
                </div>
              )}              
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed sm-hidden ${bgClass}
        md:w-full md:h-12 md:z-20    
        x:mt-0 x:w-full x:h-12 x:z-20  
        xl:mt-0 xl:w-full xl:h-12.2 xl:z-20`}>
        <img
          src={logo}
          alt=""
          className="absolute  md:h-5 md:mt-7 md:ml-10 md:z-10     x:h-5 x:mt-7 x:ml-10 x:z-10    xl:h-5 xl:mt-7 xl:ml-10 xl:z-10"
        />
        <div className="flex md:gap-7 md:float-right md:mr-10 md:mt-7     x:gap-7 x:float-right x:mr-10 x:mt-7    xl:gap-7 xl:float-right xl:mr-10.5 xl:mt-7">
          <Link to="/aboutus">
            <h3 className="relative xl:text-left">About Us</h3>
          </Link>
          <Link to="/pricing">
            <h3 className="relative xl:text-left">Pricing</h3>
          </Link>
          <Link to="/faqs">
            <h3 className="relative xl:text-left">FAQs</h3>
          </Link>
          <Link to="/signup">
            <button
              onClick={() => setOpen(!open)}
              className="relative p-2  md:w-12 md:ml-0 md:-mt-2    x:w-12 x:ml-0 x:-mt-2  xl:w-12 xl:ml-0 xl:-mt-2 font-medium text-white bg-green rounded font-montserrat"
            >
              Start Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}