import { useState } from "react";
import { Link } from "react-router-dom";
import logo from './../assets/icons/logo.png';
import arrow from './../assets/icons/arrow_left_long.png';
import { LoginType } from "../core/enum";

export const Verifyemail = () => {

    const [login, setLogin] = useState<LoginType | null>(null)

    return (
        <div className="h-45 w-full bg-gray-white overflow-hidden">
            <div>
                <img src={logo} alt="" className="absolute mt-3 ml-13 z-10" />
            </div>

            <div>
                <Link to="/signup"><img src={arrow} alt="" className="relative mt-9 ml-4 w-4" /></Link>
                <h3 className='relative sm:ml-4 sm:mt-5 font-medium text-gray sm:text-left sm:text-base font-montserrat sm:max-w-22'>
                    Please enter the 4-digit verification code sent to your email <span className="sm:text-dark">pickbe****@gmail.com</span>
                </h3>
            </div>

            <div className="relative flex gap-3">
                <input type="number" className="relative sm:text-2xl sm:p-3 sm:pl-4.6 sm:ml-4 sm:mt-5.4 sm:h-8 sm:w-8 font-semibold float-left sm:bg-white border shadow-sm rounded-xl" />
                <input type="number" className="relative sm:text-2xl sm:p-3 sm:pl-4.6 sm:ml-4 sm:mt-5.4 sm:h-8 sm:w-8 font-semibold float-left sm:bg-white border shadow-sm rounded-xl" />
                <input type="number" className="relative sm:text-2xl sm:p-3 sm:pl-4.6 sm:ml-4 sm:mt-5.4 sm:h-8 sm:w-8 font-semibold float-left sm:bg-white border shadow-sm rounded-xl" />
                <input type="number" onClick={() => setLogin(LoginType.LOGIN)} className="relative sm:text-2xl sm:p-3 sm:pl-4.6 sm:ml-4 sm:mt-5.4 sm:h-8 sm:w-8 font-semibold float-left sm:bg-white border shadow-sm rounded-xl" />
            </div>

            <button
                type="button"
                className='relative sm:mt-6 sm:ml-0 sm:h-6.4 sm:w-21.3 sm:text-base bg-green text-white text-sm rounded disabled:bg-gray-lighter disabled:text-white font-montserrat'
                disabled={login == null}
            >
                Proceed
            </button>

            <p className="relative sm:ml-0 sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-medium">
            Didn’t receive the OTP? <span className="text-green underline">Resend OTP</span>
            </p>
        </div>
    )
}