import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../assets/icons/logo.png'
import arrow from './../assets/icons/arrow_left_long.png'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useAuthStore } from "../store/authStore";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,30}$/;
const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,319}$/;
const NUMBER_REGEX = /^[0-10][0-10-_ ]{10,10}$/;
const PWD_REGEX = /^(?=.*[a-z][a-z][a-z])(?=.*[A-Z][A-Z])(?=.*[0-9][0-9])(?=.*[?&()_+={}[:;'"<>,|/~!@#$%]).{8,15}$/;

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

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

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
  }, []);

  useEffect(() => {
    setfirstnameIsValid(USER_REGEX.test(firstname));
  }, [firstname]);

  useEffect(() => {
    setlastnameIsValid(USER_REGEX.test(lastname));
  }, [lastname]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPhone(NUMBER_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg('');
  }, [firstname, password, matchPassword]);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(email, password, firstname, lastname, phone);
      navigate("/verifyemail");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sm:h-60 w-full bg-gray-white overflow-hidden">
      <div>
        <img src={logo} alt="" className="absolute mt-3 ml-13 z-10" />
      </div>

      <div>
        <Link to="/"><img src={arrow} alt="" className="relative mt-9 ml-4 w-4" /></Link>
        <h3 className='relative ml-4 mt-4 font-medium text-dark text-left text-base font-montserrat'>Create Account</h3>
      </div>

      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSignup}>
        <div className='flex flex-col'>
          <label htmlFor="firstname" className='relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat'>
            Firstname
            <FontAwesomeIcon icon={faCheck} className={firstnameIsValid ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={firstnameIsValid || !firstname ? "hide" : "invalid"} />
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
            className='relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-3 pr-3 border rounded font-montserrat'
          />

          <p id="uidnote" className={userFocus && firstname && !firstnameIsValid ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 30 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="lastname" className='relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat'>
            Lastname
            <FontAwesomeIcon icon={faCheck} className={lastnameIsValid ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={lastnameIsValid || !lastname ? "hide" : "invalid"} />
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
            className='relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-3 pr-3 border rounded font-montserrat'
          />

          <p id="uidnote" className={usernameFocus && lastname && !lastnameIsValid ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            4 to 30 characters.<br />
            Must begin with a letter.<br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email" className='relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat'>
            Email
            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
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
            className='relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-3 pr-3 border rounded font-montserrat'
          />

          <p id="uidnote" className={emailFocus && email &&
            !validEmail ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must begin with a letter. <br />
            only lowercase is allowed.
            Allowed special character: @
          </p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="phonenumber" className='relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat'>
            Phone Number
            <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            aria-invalid={validPhone ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
            className='relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-6.2 pr-3 border rounded font-montserrat'
          />
          <h3 className="absolute sm:ml-5.2 sm:mt-8.6 text-sm text-dark text-left font-montserrat">US</h3>

          <p id="uidnote" className={phoneFocus && phone &&
            !validPhone ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            11 characters.<br />
            Must begin with a number.
            only numbers are allowed.
          </p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="password" className='relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat'>
            Password
            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
          </label>
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
            className='relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-3 pr-6.2 border rounded font-montserrat'
          />

          <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 15 characters.<br />
            Must include at least two uppercase letters, at least three lowercase letters, at least two digits and a special character.<br />
          </p>

          <span className="items-center" onClick={handleToggle}>
            <Icon className="absolute sm:ml-13 sm:-mt-6.1 z-10 cursor-pointer" icon={icon} size={20} />
          </span>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="confirm_pwd" className="relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat">
            Confirm Password
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
          </label>
          <input
            type={type}
            id="confirm_pwd"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            autoComplete="new-password"
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className="relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 text-base pl-3 pr-6.2 border rounded font-montserrat"
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
          <span className="items-center" onClick={handleToggle}>
            <Icon className="absolute sm:ml-13 sm:-mt-6.1 z-10 cursor-pointer" icon={icon} size={20} />
          </span>
        </div>
        {error && <p className="text-red font-semibold mt-2">{error}</p>}

        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className='relative ml-4 mt-6 float-left'
            required
          />
          <h3 className='absolute sm:ml-6.5 sm:mt-4.7 text-sm text-dark text-left sm:max-w-19.5 font-montserrat'>I agree to the
            <span className='text-green font-semibold underline'> Terms & Conditions</span> and <span className='text-green font-semibold underline'>Privacy Policy</span></h3>
        </div>

        <button
          //disabled={!firstnameIsValid || !lastnameIsValid || !validEmail || !validPwd || !validMatch ? true : false}
          type="submit"
          className='relative sm:mt-9.5 sm:-ml-6.5 sm:h-6.4 sm:w-21.3 bg-green text-white sm:text-base rounded disabled:bg-gray-lighter disabled:text-white font-montserrat'
          disabled={isLoading}
        >
          {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Create Account"}
        </button>
      </form>

      <div>
        <h3 className='relative mt-4 text-dark text-sm font-montserrat'>Already have an account?
          <span className='text-green font-semibold cursor-pointer'>
            <Link to="/login"> Login</Link></span>
        </h3>
      </div>
    </div>
  )
}