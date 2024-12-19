import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import facebook from './../assets/icons/facebook.svg';
import message from './../assets/icons/messages.svg';
import instagram from './../assets/icons/instagram.svg';
import youtube from './../assets/icons/youtube.svg';
import line from './../assets/images/line_white.png';
import mail from './../assets/icons/mail.svg';
import logo from './../assets/icons/logo.svg';

export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/signup") return null;
  if (pathname === "/login") return null;
  if (pathname === "/verifyemail") return null;
  if (pathname === "/homesignedin") return null;
  if (pathname === "/editornote") return null;
  if (pathname === "/bettadeepdive") return null;
  if (pathname === "/nfldeepdive") return null;

  return (
    <div>
      <div className="mobile-footer">
        <img
          src={logo}
          alt=""
          className="relative 
            ss:invisible 
            sm:invisible 
            md:h-7 md:mt-6 md:ml-11 md:z-10 md:visible 
            x:h-7 x:mt-6 x:ml-7 x:z-10 x:visible 
            xl:h-5 xl:w-11 xl:mt-7 xl:ml-11 xl:z-10 xl:visible"
        />
        <div>
          <p className="relative 
            ss:mt-5 ss:ml-5 ss:text-left ss:max-w-19.3 ss:text-sm 
            sm:mt-5 sm:ml-5 text-base text-white-light sm:text-left sm:max-w-19.6 
            font-montserrat 
            md:ml-11 md:mt-5 md:max-w-32 
            x:ml-7 x:mt-5 x:max-w-25 
            xl:ml-11 xl:mt-5 xl:max-w-32"
          >
            This website does not endorse, encourage, or facilitate illegal
            gambling. All information provided by{" "}
            <span className="text-xl font-semibold">PickBetta</span> is
            intended for informational and entertainment purposes only. Any
            use of this information in violation of any federal, state, or
            local laws is strictly prohibited.
            <span className="text-xl font-semibold"> PickBetta</span> does not
            condone any illegal activities associated with betting or
            gambling. Users are responsible for ensuring that their activities
            comply with applicable laws.
          </p>

          <div className="relative 
            ss:mt-6 ss:ml-5 ss:gap-3 
            sm:mt-6 sm:ml-5 sm:gap-3 
            md:ml-11 md:mt-6 md:max-w-32 
            flex flex-col text-left       
            x:ml-33 x:-mt-16 x:gap-6       
            x1:ml-43 x1:-mt-16 x1:gap-6          
            xl:ml-45 xl:-mt-15.2 xl:gap-6
            xx:ml-50 xx:gap-6
            xx1:ml-50 xx1:gap-6
            xx2:ml-50 xx2:gap-6
            xxl:ml-50 xxl:gap-6
            xx3:ml-50 xx3:gap-6     
            "
          >
            <h3 className="relative ss:text-sm text-white font-bold lg:text-sm font-montserrat">
              Company
            </h3>
            <Link to="/aboutus">
              <h3 className="relative ss:text-sm text-white lg:text-sm font-montserrat">
                About Us
              </h3>
            </Link>
            <h3 className="relative ss:text-sm text-white-light lg:text-sm font-montserrat">
              Contact
            </h3>
            <Link to="/privacy">
              <h3 className="relative ss:text-sm text-white-light lg:text-sm font-montserrat">
                Privacy Policy
              </h3>
            </Link>
            <Link to="/terms">
              <h3 className="relative ss:text-sm text-white-light lg:text-sm font-montserrat">
                Terms & Conditions
              </h3>
            </Link>
          </div>

          <div>
            <img
              src={mail}
              alt=""
              className="relative 
                ss:mt-5 ss:ml-5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.2 ss:rounded-full 
                sm:mt-5 sm:ml-5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.2 sm:rounded-full 
                md:ml-11 md:max-w-32 
                x:ml-46 x:-mt-16.5 
                x1:ml-60 x1:-mt-16.5 
                xl:bg-gray-dark xl:bg-opacity-50 xl:p-0.2 xl:rounded-full
                xx:bg-gray-dark xx:bg-opacity-50 xx:p-0.2 xx:rounded-full
                xx1:ml-65 xx1:bg-gray-dark xx1:bg-opacity-50 xx1:p-0.2 xx1:rounded-full
                xx2:ml-69 xx2:bg-gray-dark xx2:bg-opacity-50 xx2:p-0.2 xx2:rounded-full
                xxl:ml-74 xxl:bg-gray-dark xxl:bg-opacity-50 xxl:p-0.2 xxl:rounded-full
                xx3:ml-78 xx3:bg-gray-dark xx3:bg-opacity-50 xx3:p-0.2 xx3:rounded-full
                "
            />
            <p className="relative 
              ss:-mt-4.51 ss:ml-7.5 ss:text-sm sm:-mt-4.7 
              sm:ml-7.5 sm:text-base 
              md:text-base md:ml-13 md:max-w-32 
              text-white-light text-left max-w-22 font-montserrat 
              x:text-base x:ml-48 x:-mt-4.6 
              x1:text-base x1:ml-62 x1:-mt-4.6 
              xl:ml-62 xl:text-base
              xx1:ml-67 xx1:text-base 
              xx2:ml-71 xx2:text-base 
              xxl:ml-76 xxl:text-base 
              xx3:ml-80 xx3:text-base 
              "
            >
              support@pickbetta.com
            </p>
          </div>

          <img
            src={line}
            alt=""
            className="relative 
              ss:-0.1 ss:h-0.1 ss:mt-9 ss:px-5 ss:w-full 
              sm:-0.1 sm:h-0.1 sm:mt-9 sm:px-5 sm:w-full             
              md:px-11 md:mt-9 md:max-w-full 
              lg:md:max-w-50
              x:hidden xl:hidden"
          />

          <div className="relative
            ss:mt-4 ss:flex ss:justify-center ss:items-center ss:gap-2 
            sm:mt-4 sm:flex sm:justify-center sm:items-center sm:gap-2
            md:mt-4 md:ml-11
            flex gap-2 
            x:ml-38 x:mt-18     
            x1:ml-64 x1:mt-18         
            xl:ml-48     
            "
          >
            <img
              src={facebook}
              alt="for facebook link"
              className="relative 
                ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full 
                sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full 
                x:h-5 
                xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full 
                cursor-pointer"
            />
            <img
              src={message}
              alt="for facebook link"
              className="relative 
                ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full 
                sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full 
                x:h-5 
                xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full 
                cursor-pointer"
            />
            <img
              src={instagram}
              alt="for facebook link"
              className="relative 
                ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full 
                sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full 
                x:h-5 
                xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full 
                cursor-pointer"
            />
            <img
              src={youtube}
              alt="for facebook link"
              className="relative 
                ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full 
                sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full 
                x:h-5 
                xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full 
                cursor-pointer"
            />
          </div>

          <div>
            <h3 className="relative 
              ss:mt-1 ss:ml-5 
              sm:mt-1 sm:ml-5
              text-white text-sm font-montserrat              
              md:ml-11 md:mt-1 
              x:-ml-6 x:-mt-4 x:max-w-25
              xl:-ml-15.5 xl:mt-0 xl:max-w-50                              
              "
            >
              © 2024 PickBetta. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
