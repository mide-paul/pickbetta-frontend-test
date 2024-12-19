import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './../assets/icons/logo.png';
import arrow from './../assets/icons/arrow_left_long.png';
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

export const Verifyemail = () => {

    const [code, setCode] = useState(["", "", "", ""]);
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const navigate = useNavigate();

    const { error, isLoading, verifyOtp } = useAuthStore();

    const handleChange = (index: any, value: any) => {
        const newCode = [...code];

        if (value.length > 1) {
            const pastedCode = value.slice(0, 4).split("");
            for (let i = 0; i < 4; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);
            const lastFilledIndex = newCode.findLastIndex((digit: any) => digit !== "");
            const focusIndex = lastFilledIndex < 3 ? lastFilledIndex + 1 : 3;
            inputRefs.current[focusIndex].focus();
        } else {
            newCode[index] = value;
            setCode(newCode);

            // Move focus to the next input field if value is entered
            if (value && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index: any, e: any) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const otp = code.join("");
        const email = code.join("");
        try {
            //verifyOtp(otp, email);
            await verifyOtp(otp, email);
            navigate("/homesignedin");
            toast.success("Email verified successfully");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (code.every(digit => digit !== "")) {
            handleSubmit(new Event('submit'));
        }
    }, [code])

    return (
        <div className="h-45 w-full bg-gray-white overflow-hidden">
            <div>
                <img src={logo} alt="" className="absolute mt-3 ml-13 z-10" />
            </div>

            <div>
                <Link to="/signup"><img src={arrow} alt="" className="relative mt-9 ml-4 w-4" /></Link>
                <h3 className='relative sm:ml-4 sm:mt-5 font-medium text-gray sm:text-left sm:text-base font-montserrat sm:max-w-22'>
                    Please enter the 4-digit verification code sent to your email
                </h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="relative flex gap-2.5">
                    {code.map((digit, index) => (
                        <input
                            type="number"
                            key={index}
                            ref={(el: HTMLInputElement | null) => {
                                if (el) {
                                    inputRefs.current[index] = el;
                                }
                            }}
                            maxLength={4}
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="relative sm:text-2xl sm:p-3 sm:pl-4.6 sm:ml-4 sm:mt-5.4 sm:h-8 sm:w-8.1 font-semibold float-left sm:bg-white border shadow-sm rounded-xl"
                        />
                    ))}
                </div>
                {error && <p className="text-red font-semibold mt-2">{error}</p>}

                <button
                    type="button"
                    className='relative sm:mt-6 sm:ml-0 sm:h-6.4 sm:w-21.3 sm:text-base bg-green text-white text-sm rounded disabled:bg-gray-lighter disabled:text-white font-montserrat'
                    disabled={isLoading || code.some((digit) => !digit)}
                >
                    {isLoading ? "Verifying..." : "Proceed"}
                </button>
            </form>

            <p className="relative sm:ml-0 sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-medium">
                Didn’t receive the OTP? <span className="text-green underline">Resend OTP</span>
            </p>
        </div>
    )
}