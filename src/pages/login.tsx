import { useState, useEffect, useRef } from "react";
import axios, { AxiosError } from "axios";
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
import { LoginType } from "../core/enum";

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const Login = () => {

  const userRef = useRef<HTMLInputElement | null>(null);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const [login, setLogin] = useState<LoginType | null>(null)

  const [alert, setAlert] = useState({
    show: false,
    message: ""
  });

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
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
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd])

  const navigate = useNavigate();

  async function userLogin() {
    try {

      const result = await axios.post("https://pickbetta-user-service-mmkpr.ondigitalocean.app/api/auth/login",
        {
          "email": email,
          "password": pwd
        },
        {
          headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
          }
        },
      );

      if (result.status == 200 || result.status == 201) {
        alert.show = false;
        const { data } = result.data;

        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user-info", JSON.stringify(data));

        navigate("/homesignedin");
      }
    } catch (error) {
      const err = error as AxiosError;

      setAlert({
        show: true,
        message: (err.response && err.response.data && (err.response.data as any).message) || "An error occurred, Cannot Login at the moment"
      });

      setTimeout(() => {
        setAlert({
          show: false,
          message: ""
        })
      }, 3000);
    }
  }

  return (
    <div className="ss:h-45 ss:w-full ss:bg-gray-white ss:overflow-hidden   sm:h-45 sm:w-full sm:bg-gray-white sm:overflow-hidden">
      <div>
        <img
          src={logo}
          alt=""
          className="absolute  ss:mt-3 ss:ml-13 ss:z-10    sm:mt-3 sm:ml-13 sm:z-10"
        />
      </div>

      <div>
        <Link to="/">
          <img
            src={arrow}
            alt=""
            className="relative  ss:mt-9 ss:ml-4 ss:w-4     sm:mt-9 sm:ml-4 sm:w-4"
          />
        </Link>
        <h3 className="relative  ss:ml-4 ss:mt-4  ss:text-dark-gray-900 ss:text-left ss:text-base      sm:ml-4 sm:mt-4  sm:text-dark-gray-900 sm:text-left sm:text-base  font-medium font-montserrat">
          Welcome Back,
        </h3>
      </div>

      <form>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="relative  ss:ml-4 ss:mt-4 ss:text-base  ss:text-left      sm:ml-4 sm:mt-4 sm:text-base  sm:text-left text-gray  font-montserrat"
          >
            Email
            <FontAwesomeIcon
              icon={faCheck}
              className={validEmail ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validEmail || !email ? "hide" : "invalid"}
            />
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
            className="relative  ss:ml-4 ss:mt-2 ss:h-6.4 ss:w-19.3 ss:text-base ss:pl-3 ss:pr-3     sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-22 sm:text-base sm:pl-3 sm:pr-3 border rounded font-montserrat"
          />

          <p
            id="uidnote"
            className={
              emailFocus && email && !validEmail ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 24 characters.
            <br />
            Must begin with a letter. <br />
            only lowercase is allowed. Allowed special characters: @
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="relative  ss:ml-4 ss:mt-4 ss:text-base  ss:text-left     sm:ml-4 sm:mt-4 sm:text-base  sm:text-left text-gray  font-montserrat"
          >
            Password
            <FontAwesomeIcon
              icon={faCheck}
              className={validPwd ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validPwd || !pwd ? "hide" : "invalid"}
            />
          </label>
          <input
            onClick={() => setLogin(LoginType.LOGIN)}
            type={type}
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            autoComplete="new-password"
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            className="relative  ss:ml-4 ss:mt-2 ss:h-6.4 ss:w-19.3 ss:text-base ss:pl-3 ss:pr-6.2   sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-22 sm:text-base sm:pl-3 sm:pr-6.2 border rounded font-montserrat"
          />

          <p
            id="pwdnote"
            className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 15 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:{" "}
            <span aria-label="exclamation mark">!</span>{" "}
            <span aria-label="at symbol">@</span>{" "}
            <span aria-label="hashtag">#</span>{" "}
            <span aria-label="dollar sign">$</span>{" "}
            <span aria-label="percent">%</span>
          </p>

          <span className="items-center" onClick={handleToggle}>
            <Icon
              className="absolute  ss:ml-11 ss:-mt-6.1 ss:z-10 ss:cursor-pointer  ss:text-gray    sm:ml-12 sm:-mt-6.1 sm:z-10 sm:cursor-pointer  sm:text-gray"
              icon={icon}
              size={20}
            />
          </span>
        </div>

        <div>
          <input
            type="radio"
            className="relative   ss:ml-4 ss:mt-4     sm:ml-4 sm:mt-4 float-left"
          />
          <h3 className="absolute   ss:ml-6.2 ss:mt-4 ss:text-sm  ss:text-left       sm:ml-6.2 sm:mt-4 sm:text-sm  sm:text-left  text-dark font-montserrat">
            Remember me
          </h3>
          <h3 className="absolute   ss:ml-16 ss:mt-4 ss:font-semibold ss:text-sm ss:text-green ss:cursor-pointer ss:underline      sm:ml-19 sm:mt-4 sm:font-semibold sm:text-sm sm:text-green sm:cursor-pointer sm:underline font-montserrat">
            Forgot Password?
          </h3>
        </div>

        <button
          type="button"
          onClick={userLogin}
          className="relative   ss:mt-8 ss:ml-1 ss:h-6.4 ss:w-19.4 ss:bg-green ss:text-white ss:text-base ss:rounded ss:disabled:bg-gray ss:disabled:text-white       sm:mt-8 sm:-ml-6.5 sm:h-6.4 sm:w-21.3 sm:bg-green sm:text-white sm:text-base sm:rounded sm:disabled:bg-gray sm:disabled:text-white font-montserrat"
          disabled={login == null}
        >
          Login
        </button>
      </form>

      <div>
        <img
          src={line}
          alt=""
          className="absolute   ss:mt-2 ss:ml-4 ss:h-0.1 ss:w-11     sm:mt-2 sm:ml-4 sm:h-0.1 sm:w-12.1"
        />
        <h3 className="relative  ss:mt-5  ss:ml-4 ss:text-sm  ss:text-gray       sm:mt-5  sm:text-sm  sm:text-gray font-montserrat">
          or, login using
        </h3>
        <img
          src={line}
          alt=""
          className="absolute    ss:-mt-1 ss:ml-17 ss:h-0.1 ss:w-11.9       sm:-mt-1 sm:ml-17.7 sm:h-0.1 sm:w-11.9"
        />
      </div>

      <div className="flex gap-1">
        <div className=" ss:h-6.4 ss:w-11 ss:mt-5 ss:ml-4 ss:bg-white ss:border  ss:border-gray  ss:rounded         sm:h-6.4 sm:w-11 sm:mt-5 sm:ml-4 sm:bg-white sm:border sm:rounded">
          <img
            src={google}
            alt=""
            className="relative   ss:mt-1 ss:ml-6.2 ss:h-5 ss:cursor-pointer        sm:mt-1 sm:ml-6.2 sm:h-5 sm:cursor-pointer"
          />
        </div>

        <div className="ss:h-6.4 ss:w-11 ss:mt-5  ss:ml-4 ss:bg-white ss:border  ss:border-gray  ss:rounded    sm:h-6.4 sm:w-11 sm:mt-5 sm:ml-4 sm:bg-white sm:border sm:rounded">
          <img
            src={facebook}
            alt=""
            className="relative  ss:mt-1 ss:ml-6.2 ss:h-5 ss:cursor-pointer    sm:mt-1 sm:ml-6.2 sm:h-5 sm:cursor-pointer"
          />
        </div>

        <div className="ss:h-6.4 ss:w-11 ss:mt-5 ss:ml-4 ss:bg-white ss:border ss:border-gray ss:rounded     sm:h-6.4 sm:w-11 sm:mt-5 sm:ml-4 sm:bg-white sm:border sm:rounded">
          <img
            src={apple}
            alt=""
            className="relative   ss:mt-1 ss:ml-6.2 ss:h-5 ss:cursor-pointer       sm:mt-1 sm:ml-6.2 sm:h-5 sm:cursor-pointer"
          />
        </div>
      </div>

      <div>
        <h3 className="relative   ss:mt-6 ss:ml-3 ss:text-dark ss:text-x         sm:mt-6 sm:-ml-3 sm:text-dark sm:text-x font-montserrat">
          New to PickBetta?
          <span className=" ss:text-green ss:font-semibold ss:cursor-pointer   sm:text-green sm:font-semibold sm:cursor-pointer">
            <Link to="/signup"> Create Account</Link>
          </span>
        </h3>
      </div>
    </div>
  );
}