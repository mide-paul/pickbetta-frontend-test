import { useState, useEffect, useRef } from "react";
//import axios, { AxiosError } from "axios";
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../assets/icons/logo.png'
import line from './../assets/icons/line_dark.png'
import arrow from './../assets/icons/arrow_left_long.png'
import google from './../assets/icons/google.png'
import facebook from './../assets/icons/facebook_round.png'
import apple from './../assets/icons/apple_dark.png'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useAuthStore } from "../store/authStore";

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,39}$/;
const PWD_REGEX = /^(?=.*[a-z][a-z][a-z])(?=.*[A-Z][A-Z])(?=.*[0-9][0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;

export const Login = () => {

  //const {user} = useAuthStore;

  const userRef = useRef<HTMLInputElement | null>(null);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  // const [alert, setAlert] = useState({
  //   show: false,
  //   message: ""
  // });

  const { login, isLoading, error } = useAuthStore();

  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eyeOff);
      setType('text')
    } else {
      setIcon(eye)
      setType('password')
    }
  }

  useEffect(() => {
    if (userRef.current !== null) {
      userRef.current.focus();
    }
  }, [])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password])

  const handleLogin = async (e: any) => {
    e.preventDefault();
    await login(email, password);
    navigate("/homesignedin");
  };

  return (
    <div className="ss:h-35 ss:w-full sm:h-45 sm:w-full x:h-47 x:w-full xx:h-63 xx:w-full xl:h-115.5 xl:w-full bg-gray-white overflow-hidden">
      <div className="relative md:mt-6 md:ml-16 md:pt-3 md:w-23.4 md:h-37 md:bg-white x:mt-8 x:ml-30 x:pt-3 x:w-23.4 x:h-37 x:bg-white xx:mt-14 xx:ml-34 xx:pt-3 xx:w-23.4 xx:h-37 xx:bg-white xl:mt-35 xl:ml-67 xl:pt-3 xl:w-23.4 xl:h-37 xl:bg-white lg:mt-6 lg:ml-30 lg:pt-3 lg:w-23.4 lg:h-37 lg:bg-white rounded">
        <div>
          <img src={logo} alt="" className="relative ss:mt-3 ss:ml-13 sm:mt-3 sm:ml-13 lg:mt-3 lg:ml-13 z-10" />
        </div>

        <div>
          <Link to="/"><img src={arrow} alt="" className="relative ss:mt-4 ss:ml-4 ss:w-4 sm:mt-4 sm:ml-4 sm:w-4" /></Link>
          <h3 className='relative ss:ml-4 ss:mt-5 ss:text-left ss:text-sm sm:ml-4 sm:mt-5 font-medium text-dark sm:text-left sm:text-sm font-montserrat'>Welcome Back, </h3>
        </div>

        <form onSubmit={handleLogin}>
          <div className='flex flex-col'>
            <label htmlFor="email" className='relative ss:ml-4 ss:mt-5 ss:text-sm sm:ml-4 sm:mt-5 sm:text-sm text-gray text-left font-montserrat'>
              Email
              <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              className='relative ss:ml-4 ss:mt-2 ss:h-6.4 ss:w-19.4 ss:text-base sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-3 pr-3 border rounded font-montserrat'
            />

            <p id="uidnote" className={emailFocus && email &&
              !validEmail ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 40 characters.<br />
              Must begin with a letter. <br />
              only lowercase is allowed.
              Allowed special characters: @
            </p>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password" className='relative ss:ml-4 ss:mt-4 ss:text-sm sm:ml-4 sm:mt-4 sm:text-sm text-gray text-left font-montserrat'>
              Password
              <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
            </label>
            <div className="flex">
              <input
                type={type}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete="new-password"
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                className='relative ss:ml-4 ss:mt-2 ss:h-6.4 ss:w-19.4 ss:text-base ss:pl-3 ss:pr-6.2 sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-6.2 border rounded font-montserrat'
              />
              <span className="items-center" onClick={handleToggle}>
                <Icon className="relative ss:-ml-6 ss:mt-4.51 sm:-ml-6 sm:mt-4.51 z-10 cursor-pointer" icon={icon} size={20} />
              </span>
            </div>

            <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 15 characters.<br />
              Must include at least two uppercase letters, at least three lowercase letters, at least two digits and a special character.<br />
            </p>
          </div>
          {error && <p className="text-red font-semibold sm:mt-2">{error}</p>}

          <div>
            <input
              type='checkbox'
              id="remember"
              name="remember"
              className='relative ss:ml-4 ss:mt-0 sm:ml-4 sm:mt-0 float-left'
            />
            <h3 className='relative ss:ml-6.2 ss:mt-4 ss:text-sm ss:text-left sm:ml-6.2 sm:mt-4 sm:text-sm text-dark sm:text-left font-montserrat'>Remember me</h3>
            <h3 className='relative ss:ml-15 ss:-mt-4 sm:ml-17 sm:-mt-4 font-semibold text-sm text-green cursor-pointer underline font-montserrat'>Forgot Password?</h3>
          </div>

          <button
            type="submit"
            className='relative ss:mt-4.51 ss:ml-0 ss:h-6.4 ss:w-19.4 sm:mt-4.51 sm:ml-0 sm:h-6.4 sm:w-21.3 bg-green text-white sm:text-base rounded disabled:bg-gray-lighter disabled:text-white font-montserrat'
            disabled={!validEmail || !validPassword ? true : false}
          >
            {isLoading ? <Loader className='ss:w-6 ss:h-6 sm:w-6 sm:h-6 animate-spin  sm:mx-auto' /> : "Login"}
          </button>
        </form>

        <div>
          <img src={line} alt="" className="absolute ss:mt-1 ss:ml-4 ss:h-0.1 ss:w-10.3 sm:mt-2 sm:ml-4 sm:h-0.1 sm:w-12.1" />
          <h3 className='relative ss:mt-4 sm:mt-4 text-gray text-sm font-montserrat'>or, login using</h3>
          <img src={line} alt="" className="relative ss:-mt-1 ss:ml-17 ss:h-0.1 ss:w-10.2 sm:-mt-1 sm:ml-17.7 sm:h-0.1 sm:w-11.9" />
        </div>

        <div className='flex gap-2'>
          <div className='ss:h-6.1 ss:w-10.5 ss:mt-5 ss:ml-4 sm:h-6.1 sm:w-11 sm:mt-5 sm:ml-4 bg-white border rounded' >
            <img src={google} alt="" className="relative ss:mt-0.5 ss:ml-6.1 ss:h-5 sm:mt-0.5 sm:ml-6.2 sm:h-5 cursor-pointer" />
          </div>

          <div className='ss:h-6.1 ss:w-10.5 ss:mt-5 ss:ml-0.2 sm:h-6.1 sm:w-11 sm:mt-5 sm:ml-4 bg-white border rounded' >
            <img src={facebook} alt="" className="relative ss:mt-0.5 ss:ml-6.1 ss:h-5 sm:mt-0.5 sm:ml-6.2 sm:h-5 cursor-pointer" />
          </div>

          <div className='ss:h-6.1 ss:w-10.5 ss:mt-5 ss:ml-0.2 sm:h-6.1 sm:w-11 sm:mt-5 sm:ml-4 bg-white border rounded' >
            <img src={apple} alt="" className="relative ss:mt-0.5 ss:ml-6.1 ss:h-5 sm:mt-0.5 sm:ml-6.2 sm:h-5 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className='relative ss:mt-4 ss:text-sm sm:mt-4 text-dark sm:text-sm font-montserrat'>New to PickBetta?
            <span className='text-green font-semibold cursor-pointer'>
              <Link to="/signup"> Create Account</Link></span>
          </h3>
        </div>
      </div>
    </div>
  )
}