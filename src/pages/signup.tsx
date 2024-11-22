import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../assets/icons/logo.png'
import arrow from './../assets/icons/arrow_left_long.png'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { LoginType } from "../core/enum";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,30}$/;
const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,39}$/;
const NUMBER_REGEX = /^[0-9][0-9-_ ]{9,9}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const Signup = () => {

  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLDivElement | null>(null);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [firstnameIsValid, setfirstnameIsValid] = useState(false);
  const [lastnameIsValid, setlastnameIsValid] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [number, setNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const [errMsg, setErrMsg] = useState('');
  //const [success, setSuccess] = useState(false);

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
    setfirstnameIsValid(USER_REGEX.test(firstname));
  }, [firstname])

  useEffect(() => {
    setlastnameIsValid(USER_REGEX.test(lastname));
  }, [lastname])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    setValidNumber(NUMBER_REGEX.test(number));
  }, [number])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [firstname, pwd, matchPwd])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(firstname);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
  }

  const navigate = useNavigate();

  async function signUp() {
    try {
      let item = { firstname, pwd }
      console.warn(item)

      let result = await fetch("https://pickbetta-user-service-mmkpr.ondigitalocean.app/api/auth/register", {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "accept": 'application/json'
        }
      });
      result = await result.json()
      localStorage.setItem("user-info", JSON.stringify(result));

      if (result.status == 200 || result.status == 201) {
        alert.show = false;

        navigate("/verifyemail");
      }
    } catch (error) {
      const err = error as AxiosError;

      setAlert({
        show: true,
        message: (err.response && err.response.data && (err.response.data as any).message) || "An error occurred"
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
    <div className="sm:h-60 w-full bg-gray-white overflow-hidden">
      <div>
        <img
          src={logo}
          alt=""
          className="absolute ss:mt-3 ss:ml-2 ss:z-10 sm:mt-3 sm:ml-13 sm:z-10"
        />
      </div>

      <div>
        <Link to="/">
          <img
            src={arrow}
            alt=""
            className="relative ss:mt-9 ss:ml-4 ss:w-4  sm:mt-9 sm:ml-4 sm:w-4  "
          />
        </Link>
        <h3 className="relative ss:ml-4 ss:mt-4 ss:font-medium ss:text-dark ss:text-left ss:text-base  sm:ml-4 sm:mt-4 sm:font-medium sm:text-dark sm:text-left sm:text-base font-montserrat">
          Create Account
        </h3>
      </div>

      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="firstname"
            className="relative ss:ml-4 ss:mt-4 ss:text-base ss:text-gray ss:text-left   sm:ml-4 sm:mt-4 sm:text-base sm:text-gray sm:text-left font-montserrat"
          >
            Firstname
            <FontAwesomeIcon
              icon={faCheck}
              className={firstnameIsValid ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={firstnameIsValid || !firstname ? "hide" : "invalid"}
            />
          </label>
          <input
            type="text"
            id="firstname"
            ref={userRef}
            autoComplete="off"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            aria-invalid={firstnameIsValid ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            className="relative ss:ml-4 ss:mt-2 ss:h-6.4 ss:w-19.7 ss:text-base ss:pl-3 ss:pr-3 ss:border ss:rounded ss:border-gray      sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-3 sm:border sm:rounded sm:border-gray font-montserrat"
          />

          <p
            id="uidnote"
            className={
              userFocus && firstname && !firstnameIsValid
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 30 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="lastname"
            className="relative ss:ml-4 ss:mt-4 ss:text-base ss:text-gray ss:text-left   sm:ml-4 sm:mt-4 sm:text-base sm:text-gray sm:text-left font-montserrat"
          >
            Lastname
            <FontAwesomeIcon
              icon={faCheck}
              className={lastnameIsValid ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={lastnameIsValid || !lastname ? "hide" : "invalid"}
            />
          </label>
          <input
            type="text"
            id="lastname"
            autoComplete="off"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            aria-invalid={lastnameIsValid ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUsernameFocus(true)}
            onBlur={() => setUsernameFocus(false)}
            className="relative ss:mt-2  ss:ml-4 ss:h-6.4 ss:w-19.7 ss:text-base ss:pl-3 ss:pr-3 ss:border ss:rounded ss:border-gray      sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-3 sm:border sm:rounded sm:border-gray font-montserrat"
          />

          <p
            id="uidnote"
            className={
              usernameFocus && lastname && !lastnameIsValid
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 30 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="relative ss:ml-4 ss:mt-4 ss:text-base ss:text-gray ss:text-left   sm:ml-4 sm:mt-4 sm:text-base sm:text-gray sm:text-left font-montserrat"
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
            type="email"
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
            className="relative ss:ml-4 ss:h-6.4 ss:w-19.7 ss:text-base ss:pl-3 ss:pr-3 ss:border ss:rounded ss:border-gray      sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-3 sm:border sm:rounded sm:border-gray font-montserrat"
          />

          <p
            id="uidnote"
            className={
              emailFocus && email && !validEmail ? "instructions" : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 40 characters.
            <br />
            Must begin with a letter. <br />
            only lowercase is allowed. Allowed special characters: @
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phonenumber"
            className="relative ss:ml-4 ss:mt-4 ss:text-base ss:text-gray ss:text-left   sm:ml-4 sm:mt-4 sm:text-base sm:text-gray sm:text-left font-montserrat"
          >
            Phone Number
            <FontAwesomeIcon
              icon={faCheck}
              className={validNumber ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validNumber || !number ? "hide" : "invalid"}
            />
          </label>
          <input
            type="number"
            id="number"
            name="number"
            autoComplete="off"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            aria-invalid={validNumber ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setNumberFocus(true)}
            onBlur={() => setNumberFocus(false)}
            className="relative ss:ml-4 ss:h-6.4 ss:w-19.7 ss:text-base ss:pl-3 ss:pr-3 ss:border ss:rounded ss:border-gray      sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-3 sm:border sm:rounded sm:border-gray font-montserrat"
          />
          <h3 className="absolute sm:ml-5.2 sm:mt-8.6 text-sm text-dark text-left font-montserrat">
            US
          </h3>

          <p
            id="uidnote"
            className={
              numberFocus && number && !validNumber
                ? "instructions"
                : "offscreen"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            10 characters.
            <br />
            Must begin with a number. only numbers are allowed.
          </p>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="relative ss:ml-4 ss:mt-4 ss:text-base ss:text-gray ss:text-left   sm:ml-4 sm:mt-4 sm:text-base sm:text-gray sm:text-left font-montserrat"
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
            className="relative ss:ml-4 ss:h-6.4 ss:w-19.7 ss:text-base ss:pl-3 ss:pr-3 ss:border ss:rounded ss:border-gray      sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-3 sm:border sm:rounded sm:border-gray font-montserrat"
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
              className="absolute ss:ml-12 ss:-mt-6.1 ss:z-10 ss:cursor-pointer ss:text-gray    sm:ml-13 sm:-mt-6.1 sm:z-10 sm:cursor-pointer sm:text-gray"
              icon={icon}
              size={20}
            />
          </span>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="confirm_pwd"
            className="relative ss:ml-4 ss:mt-4 ss:text-base ss:text-gray ss:text-left   sm:ml-4 sm:mt-4 sm:text-base sm:text-gray sm:text-left font-montserrat"
          >
            Confirm Password
            <FontAwesomeIcon
              icon={faCheck}
              className={validMatch && matchPwd ? "valid" : "hide"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validMatch || !matchPwd ? "hide" : "invalid"}
            />
          </label>
          <input
            type={type}
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            autoComplete="new-password"
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className="relative ss:ml-4 ss:h-6.4 ss:w-19.7 ss:text-base ss:pl-3 ss:pr-3 ss:border ss:rounded ss:border-gray      sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base sm:pl-3 sm:pr-3 sm:border sm:rounded sm:border-gray font-montserrat"
          />
          <p
            id="confirmnote"
            className={matchFocus && !validMatch ? "instructions" : "offscreen"}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
          <span className="items-center" onClick={handleToggle}>
            <Icon
              className="absolute  ss:ml-12 ss:-mt-6.1 ss:z-10 ss:cursor-pointer ss:text-gray    sm:ml-13 sm:-mt-6.1 sm:z-10 sm:cursor-pointer sm:text-gray"
              icon={icon}
              size={20}
            />
          </span>
        </div>

        <div>
          <input
            type="radio"
            className="relative ml-4 mt-6 float-left"
            onClick={() => setLogin(LoginType.LOGIN)}
          />
          <h3 className="absolute  ss:ml-6.5 ss:mt-4.7 ss:text-sm ss:text-dark ss:text-left ss:max-w-19.5    sm:ml-6.5 sm:mt-4.7 sm:text-sm sm:text-dark sm:text-left sm:max-w-19.5 font-montserrat">
            I agree to the
            <span className="text-green font-semibold underline">
              {" "}
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-green font-semibold underline">
              Privacy Policy
            </span>
          </h3>
        </div>

        <button
          //disabled={!firstnameIsValid || !lastnameIsValid || !validEmail || !validPwd || !validMatch ? true : false}
          type="submit"
          onClick={signUp}
          className="relative ss:mt-7 ss:ml-4 ss:h-6.4 ss:w-19.4 ss:bg-green ss:text-white ss:text-base ss:rounded ss:disabled:bg-gray-lighter ss:disabled:text-gray    sm:mt-9.5 sm:-ml-6.5 sm:h-6.4 sm:w-21.3 sm:bg-green sm:text-white sm:text-base sm:rounded sm:disabled:bg-gray-lighter sm:disabled:text-gray font-montserrat"
          disabled={login == null}
        >
          Create Account
        </button>
        {/* { success ? <div className="relative sm:mt-10 sm:ml-6 sm:text-dark">Registration successful</div>: <></>} */}
      </form>

      <div>
        <h3 className="relative ss:mt-4 ss:text-dark ss:text-sm     sm:mt-4 sm:text-dark sm:text-sm font-montserrat">
          Already have an account?
          <span className=" ss:text-green ss:font-semibold ss:cursor-pointer   sm:text-green sm:font-semibold sm:cursor-pointer">
            <Link to="/login"> Login</Link>
          </span>
        </h3>
      </div>
    </div>
  );
}