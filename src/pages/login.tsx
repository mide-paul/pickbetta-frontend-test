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

  //const navigate = useNavigate();

  // async function userLogin() {
  //   try {

  //     let result = await axios.post("https://pickbetta-user-service-mmkpr.ondigitalocean.app/api/auth/login",
  //       {
  //         "email": email,
  //         "password": password
  //       },
  //       {
  //         headers: {
  //           "Content-Type": 'application/json',
  //           "Accept": 'application/json'
  //         }
  //       },
  //     );

  //     if (result.status == 200 || result.status == 201) {
  //       alert.show = false;
  //       const { data } = result.data;

  //       localStorage.setItem("token", data.token);
  //       localStorage.setItem("refreshToken", data.refreshToken);
  //       localStorage.setItem("user-info", JSON.stringify(data));

  //       navigate("/homesignedin");
  //     }
  //   } catch (error) {
  //     const err = error as AxiosError;

  //     setAlert({
  //       show: true,
  //       message: (err.response && err.response.data && (err.response.data as any).message) || "An error occurred, Cannot Login at the moment"
  //     });

  //     setTimeout(() => {
  //       setAlert({
  //         show: false,
  //         message: ""
  //       })
  //     }, 3000);
  //   }
  // }

  return (
    <div className="h-45 w-full bg-gray-white overflow-hidden">
      <div>
        <img src={logo} alt="" className="absolute mt-3 ml-13 z-10" />
      </div>

      <div>
        <Link to="/"><img src={arrow} alt="" className="relative mt-9 ml-4 w-4" /></Link>
        <h3 className='relative ml-4 mt-4 font-medium text-dark text-left text-base font-montserrat'>Welcome Back, </h3>
      </div>

      <form onSubmit={handleLogin}>
        <div className='flex flex-col'>
          <label htmlFor="email" className='relative sm:ml-4 sm:mt-4 sm:text-base text-gray text-left font-montserrat'>
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
            className='relative sm:ml-4 sm:mt-2 sm:h-6.4 sm:w-21.3 sm:text-base pl-3 pr-3 border rounded font-montserrat'
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
        {error && <p className="text-red font-semibold mt-2">{error}</p>}

        <div>
          <input
          type='checkbox'
          id="remember"
          name="remember"
          className='relative ml-4 mt-4 float-left'
          />
          <h3 className='absolute ml-6.2 mt-4 text-sm text-dark text-left font-montserrat'>Remember me</h3>
          <h3 className='absolute ml-19 mt-4 font-semibold text-sm text-green cursor-pointer underline font-montserrat'>Forgot Password?</h3>
        </div>

        <button
          type="submit"
          className='relative sm:mt-8 sm:-ml-6.5 sm:h-6.4 sm:w-21.3 bg-green text-white sm:text-base rounded disabled:bg-gray-lighter disabled:text-white font-montserrat'
          disabled={isLoading}
        >
          {isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Login"}
        </button>
      </form>

      <div>
        <img src={line} alt="" className="absolute mt-2 ml-4 h-0.1 w-12.1" />
        <h3 className='relative mt-4 text-gray text-sm font-montserrat'>or, login using</h3>
        <img src={line} alt="" className="absolute -mt-1 ml-17.7 h-0.1 w-11.9" />
      </div>

      <div className='flex gap-1'>
        <div className='h-6.1 w-11 mt-4 ml-4 bg-white border rounded' >
          <img src={google} alt="" className="relative mt-1 ml-6.2 h-5 cursor-pointer" />
        </div>

        <div className='h-6.1 w-11 mt-4 ml-4 bg-white border rounded' >
          <img src={facebook} alt="" className="relative mt-1 ml-6.2 h-5 cursor-pointer" />
        </div>

        <div className='h-6.1 w-11 mt-4 ml-4 bg-white border rounded' >
          <img src={apple} alt="" className="relative mt-1 ml-6.2 h-5 cursor-pointer" />
        </div>
      </div>

      <div>
        <h3 className='relative mt-4 text-dark text-sm font-montserrat'>New to PickBetta?
          <span className='text-green font-semibold cursor-pointer'>
            <Link to="/signup"> Create Account</Link></span>
        </h3>
      </div>
    </div>
  )
}