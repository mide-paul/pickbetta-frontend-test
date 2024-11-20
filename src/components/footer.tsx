import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import facebook from './../assets/icons/facebook.png';
import message from './../assets/icons/message.png';
import instagram from './../assets/icons/instagram.png';
import youtube from './../assets/icons/youtube.png';
import line from './../assets/images/line_white.png'
import envelope_white from './../assets/icons/envelope_white.png'
import logo from './../assets/icons/logo.png'

export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/signup") return null;
  if (pathname === "/login") return null;
  if (pathname === "/verifyemail") return null;
  if (pathname === "/homesignedin") return null;
  if (pathname === "/editornote") return null;
  
    return (
      <div>
        <div className="mobile-footer">
          <img
            src={logo}
            alt=""
            className="absolute ss:invisible  sm:invisible  md:h-7 md:mt-6 md:ml-11 md:z-10 md:visible     x:h-7 x:mt-6 x:ml-11 x:z-10 x:visible       xl:h-7 xl:mt-6 xl:ml-11 xl:z-10 xl:visible"
          />
          <div>
            <p className="relative ss:mt-5 ss:ml-5 ss:text-left ss:max-w-19.6    sm:mt-5 sm:ml-5 text-base text-white-light sm:text-left sm:max-w-19.6 font-montserrat md:ml-11 md:mt-11 md:max-w-32     x:ml-11 x:mt-11 x:max-w-32        xl:ml-11 xl:mt-11 xl:max-w-32">
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

            <div className="absolute  ss:mt-6 sm:mt-6 ss:ml-5  sm:ml-5 flex flex-col ss:gap-3 sm:gap-3 lg:gap-3 text-left lg:mt-7 lg:ml-8  x:ml-45 x:-mt-19.2 x:gap-6  md:ml-11 md:mt-8 md:max-w-32   xl:ml-45 xl:-mt-19.2 xl:gap-6">
              <h3 className="relative text-white font-bold lg:text-sm lg:hover:text-green font-montserrat">
                Company
              </h3>
              <Link to="/aboutus">
                <h3 className="relative text-white lg:text-sm lg:hover:text-green font-montserrat">
                  About Us
                </h3>
              </Link>
              <h3 className="relative text-white-light lg:text-sm lg:hover:text-green font-montserrat">
                Contact
              </h3>
              <Link to="/privacy">
                <h3 className="relative text-white-light lg:text-sm lg:hover:text-green font-montserrat">
                  Privacy Policy
                </h3>
              </Link>
              <Link to="/terms">
                <h3 className="relative text-white-light lg:text-sm lg:hover:text-green font-montserrat">
                  Terms & Conditions
                </h3>
              </Link>
            </div>

            <div>
              <img
                src={envelope_white}
                alt=""
                className="absolute ss:mt-19.14 ss:ml-5 sm:mt-19.15 sm:ml-5  md:ml-11 md:mt-19 md:max-w-32  x:ml-66 x:-mt-19.17      xl:ml-69 xl:-mt-19.2"
              />
              <p className="absolute ss:mt-18 sm:mt-18 ss:ml-7.5 sm:ml-7.5 text-base  md:ml-13 md:mt-19 md:max-w-32   text-white-light text-left max-w-22 font-montserrat x:ml-68 x:-mt-19.2    xl:ml-71 xl:-mt-19.23">
                support@pickbetta.com
              </p>
            </div>

            <img
              src={line}
              alt=""
              className="absolute ss:-0.1 ss:h-0.1 ss:mt-19.3 ss:w-19.3 ss:ml-5 sm:-0.1  sm:h-0.1 sm:mt-19.3 sm:ml-5 lg:mt-19.2 lg:ml-39 sm:w-20.5 md:ml-11 md:mt-19.5 md:max-w-32    x:hidden  xl:hidden"
            />

            <div className="absolute ss:mt-19.6 ss:ml-12 sm:mt-19.6 sm:ml-13.5  md:ml-15 md:mt-20  lg:mt-19.6 lg:ml-39 flex gap-2   x:ml-68 x:mt-5.4     xl:ml-70 xl:mt-5.4">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 x:h-6.5  xl:h-6.5"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 x:h-6.5 xl:h-6.5"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 x:h-6.5 xl:h-6.5"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 x:h-6.5 xl:h-6.5"
              />
            </div>

            <div>
              <h3 className="absolute ss:mt-20.5 ss:ml-7.5 sm:ml-9 sm:mt-20.5 text-white text-sm lg:ml-35 lg:mt-22.5 font-montserrat md:ml-11 md:mt-21.5     x:ml-11 x:mt-7.5   xl:ml-11 xl:mt-7.5">
                © 2024 PickBetta. All Rights Reserved
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
}