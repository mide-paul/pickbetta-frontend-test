import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';

import { Landingpage } from './pages/landingpage'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Aboutus } from './pages/aboutus';
import { Privacy } from "./pages/privacy";
import { Terms } from "./pages/terms";
import { Faqs } from "./pages/faqs/faqs";
import { Pricing } from "./pages/pricing";
import { Subscriptions } from "./pages/faqs/subscriptions";
import { Features } from "./pages/faqs/features";
import { Data } from "./pages/faqs/data";
import { Generalnfl } from "./pages/faqs/generalnfl";
import { Betting } from "./pages/faqs/betting";
import { Nflbettingrules } from "./pages/faqs/nflbettingrules";
import { Nflbettingtips } from "./pages/faqs/nflbettingtips";
import { Generalquestions } from "./pages/faqs/generalquestions";
import { Financialmanagement } from "./pages/faqs/financialmanagement";
import { Timemanagement } from "./pages/faqs/timemanagement";
import { Understandingtheodds } from "./pages/faqs/understandingtheodds";
import { Pickbettaterms } from "./pages/faqs/pickbettaterms";
import { Sportbettingterms } from "./pages/faqs/sportbettingterms";
import { Nflbettingterms } from "./pages/faqs/nflbettingterms";
import { Sportsbookterms } from "./pages/faqs/sportsbookterms";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Homesignedin } from "./pages/homesignedin";
import { Editornote } from "./pages/editornote";
import { Bettadeepdive } from "./pages/bettadeepdive";
import { Nfldeepdive } from "./pages/deepdive/nfldeepdive";
import { Bettadawg } from "./pages/bettadawg";
import ScrollToTop from "./components/scrolltotop";
import { Verifyemail } from "./pages/verifyemail";
import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./store/authStore";
// import { useEffect } from "react";
// import LoadingSpinner from "./components/LoadingSpinner";

// const ProtectedRoute = ({ children }) => {
// 	const { isAuthenticated, user } = useAuthStore();

// 	if (!isAuthenticated) {
// 		return <Navigate to='/login' replace />;
// 	}

// 	if (!user.isVerified) {
// 		return <Navigate to='/verify-email' replace />;
// 	}

// 	return children;
// };

//  const RedirectAuthenticatedUser = ({ children }) => {
//  	const { isAuthenticated, user } = useAuthStore();

//  	if (isAuthenticated && user.isVerified) {
//  		return <Navigate to='/homesignedin' replace />;
//  	}

//  	return children;
//  };

function App() {

  // const { isCheckingAuth, checkAuth } = useAuthStore();

	// useEffect(() => {
	// 	checkAuth();
	// }, [checkAuth]);

	// if (isCheckingAuth) return<LoadingSpinner />;
  
  return (

      <div className="App">
        <Router>
        <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/features" element={<Features />} />
            <Route path="/data" element={<Data />} />
            <Route path="/generalnfl" element={<Generalnfl />} />
            <Route path="/betting" element={<Betting />} />
            <Route path="/nflbettingrules" element={<Nflbettingrules />} />
            <Route path="/nflbettingtips" element={<Nflbettingtips />} />
            <Route path="/generalquestions" element={<Generalquestions />} />
            <Route path="/financialmanagement" element={<Financialmanagement />} />
            <Route path="/timemanagement" element={<Timemanagement />} />
            <Route path="/understandingtheodds" element={<Understandingtheodds />} />
            <Route path="/pickbettaterms" element={<Pickbettaterms />} />
            <Route path="/sportbettingterms" element={<Sportbettingterms />} />
            <Route path="/nflbettingterms" element={<Nflbettingterms />} />
            <Route path="/sportsbookterms" element={<Sportsbookterms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/homesignedin" element={<Homesignedin />} />
            <Route path="/editornote" element={<Editornote />} />
            <Route path="/bettadeepdive" element={<Bettadeepdive />} />
            <Route path="/nfldeepdive" element={<Nfldeepdive />} />
            <Route path="/bettadawg" element={<Bettadawg />} />
            <Route path="/verifyemail" element={<Verifyemail />} />
            <Route path="*" element={<Navigate to='/' replace />} />
          </Routes>
          <Toaster />
          <Footer />
        </Router>
      </div>
  );
};

export default App;
