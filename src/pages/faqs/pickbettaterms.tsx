import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import search from './../../assets/icons/search.png'
import line from './../../assets/images/line_green.png'
import faq_styled from './../../assets/images/faq_styled.png'

export const Pickbettaterms = () => {
  const [ open, setOpen ] = useState(false);
  const [ opentwo, setOpentwo ] = useState(false);
  const [ openthree, setOpenthree ] = useState(false);
  const [ openfour, setOpenfour ] = useState(false);
  const [ openfive, setOpenfive ] = useState(false);
  const [ opensix, setOpensix ] = useState(false);
  const [ openseven, setOpenseven ] = useState(false);
  const [ openeight, setOpeneight ] = useState(false);
  const [ opennine, setOpennine ] = useState(false);
  const [ openten, setOpenten ] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const droptwoRef = useRef<HTMLDivElement>(null)
  const dropthreeRef = useRef<HTMLDivElement>(null)
  const dropfourRef = useRef<HTMLDivElement>(null)
  const dropfiveRef = useRef<HTMLDivElement>(null)
  const dropsixRef = useRef<HTMLDivElement>(null)
  const dropsevenRef = useRef<HTMLDivElement>(null)
  const dropeightRef = useRef<HTMLDivElement>(null)
  const dropnineRef = useRef<HTMLDivElement>(null)
  const droptenRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideDropdown =(e:any)=>{
    if(open && !dropdownRef.current?. contains(e.target as Node)){
      setOpen(false)
      }
    }

const handleClickOutsideDropdowntwo =(e:any)=>{
    if(opentwo && !droptwoRef.current?. contains(e.target as Node)){
        setOpentwo(false)
        }
    }

const handleClickOutsideDropdownthree =(e:any)=>{
    if(openthree && !dropthreeRef.current?. contains(e.target as Node)){
        setOpenthree(false)
        }
    }

const handleClickOutsideDropdownfour =(e:any)=>{
    if(openfour && !dropfourRef.current?. contains(e.target as Node)){
        setOpenfour(false)
        }
    }

const handleClickOutsideDropdownfive =(e:any)=>{
    if(openfive && !dropfiveRef.current?. contains(e.target as Node)){
        setOpenfive(false)
        }
    }

const handleClickOutsideDropdownsix =(e:any)=>{
    if(opensix && !dropsixRef.current?. contains(e.target as Node)){
        setOpensix(false)
        }
    }

const handleClickOutsideDropdownseven =(e:any)=>{
    if(openseven && !dropsevenRef.current?. contains(e.target as Node)){
        setOpenseven(false)
        }
    }

const handleClickOutsideDropdowneight =(e:any)=>{
    if(openeight && !dropeightRef.current?. contains(e.target as Node)){
        setOpeneight(false)
        }
    }

const handleClickOutsideDropdownnine =(e:any)=>{
    if(opennine && !dropnineRef.current?. contains(e.target as Node)){
        setOpennine(false)
        }
    }

const handleClickOutsideDropdownten =(e:any)=>{
    if(openten && !droptenRef.current?. contains(e.target as Node)){
        setOpenten(false)
        }
    }
    
  window.addEventListener("click",handleClickOutsideDropdown)
  window.addEventListener("click",handleClickOutsideDropdowntwo)
  window.addEventListener("click",handleClickOutsideDropdownthree)
  window.addEventListener("click",handleClickOutsideDropdownfour)
  window.addEventListener("click",handleClickOutsideDropdownfive)
  window.addEventListener("click",handleClickOutsideDropdownsix)
  window.addEventListener("click",handleClickOutsideDropdownseven)
  window.addEventListener("click",handleClickOutsideDropdowneight)
  window.addEventListener("click",handleClickOutsideDropdownnine)
  window.addEventListener("click",handleClickOutsideDropdownten)

    return (
        <div className="relative h-93 w-full bg-white overflow-hidden">
            <div>
                <h3 className="relative text-4xl text-dark font-extrabold mt-11 ml-5 max-w-20 text-center">
                Frequently Asked Questions (FAQs)
                </h3>
            </div>

            <div>
                <input className="relative text-sm mt-4 pl-6 h-6.3 w-20.5 border rounded" placeholder="Search for questions" />
                <img src={search} className='relative -mt-5.2 ml-6 h-4'/>
            </div>

            <div className='flex overflow-scroll scroll-smooth text-nowrap'>
                <Link to="/faqs"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>General Questions</h3></Link>
                <Link to="/subscriptions"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Subscription & Pricing</h3></Link>
                <Link to="/features"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Features & Functionality</h3></Link>
                <Link to="/data"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Data & Analytics</h3></Link>
                <Link to="/generalnfl"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>General NFL Betting Questions</h3></Link>
                <Link to="/betting"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Betting Types & Strategies</h3></Link>
                <Link to="/nflbettingrules"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>NFL Betting Rules & Terms</h3></Link>
                <Link to="/nflbettingtips"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>NFL Betting Tips & Insight</h3></Link>
                <Link to="/generalquestions"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>General Responsible Gambling Questions</h3></Link>
                <Link to="/financialmanagement"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Financial Management & Limits</h3></Link>
                <Link to="/timemanagement"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Time Management & Self-Control</h3></Link>
                <Link to="/understandingtheodds"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Understanding the Odds & Managing Expectations</h3></Link>
                <div>
                <h3 className='relative mt-5 ml-5 text-left text-sm text-green font-extrabold'>PickBetta Terms & Sports Analytics</h3>
                <img src={line} className='relative mt-2 ml-5 h-1 w-16.5'/>
                </div>
                <Link to="/sportbettingterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Sports Betting Terms</h3></Link>
                <Link to="/nflbettingterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>NFL Betting Terms & Definitions</h3></Link>
                <Link to="/sportsbookterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Sportsbook Terms & Definitions</h3></Link>
            </div>

            <div>
                <div ref={dropdownRef} className="relative mt-4 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpen(!open)} className='relative text-sm text-left font-bold'>Sports Analytics:</h3>
                    <h3 onClick={() => setOpen(!open)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { open && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The process of using data and statistical models to analyze and predict sports
                            outcomes, performance, and trends to gain insights.
                        </p>
                    )}
                </div>

                <div ref={droptwoRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpentwo(!opentwo)} className='relative text-sm text-left font-bold'>Predictive Models:</h3>
                    <h3 onClick={() => setOpentwo(!opentwo)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { opentwo && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Algorithms or statistical models that use historical data to forecast future
                            outcomes, such as game results or player performances.
                        </p>
                    )}
                </div>

                <div ref={dropthreeRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenthree(!openthree)} className='relative text-sm text-left font-bold'>Data-Driven Insights:</h3>
                    <h3 onClick={() => setOpenthree(!openthree)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openthree && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Conclusions drawn from analyzing data to help make more informed decisions. In sports
                            betting, this includes trends, statistics, and performance analysis.
                        </p>
                    )}
                </div>

                <div ref={dropfourRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfour(!openfour)} className='relative text-sm text-left font-bold'>Betting Trends:</h3>
                    <h3 onClick={() => setOpenfour(!openfour)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openfour && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Patterns observed in how teams or players perform under certain conditions or how
                            betting lines have moved over time.
                        </p>
                    )}
                </div>

                <div ref={dropfiveRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfive(!openfive)} className='relative text-sm text-left font-bold max-w-18'>Historical Data:</h3>
                    <h3 onClick={() => setOpenfive(!openfive)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openfive && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Past sports statistics and game results used to identify trends and inform
                            predictions for future outcomes.
                        </p>
                    )}
                </div>

                <div ref={dropsixRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpensix(!opensix)} className='relative text-sm text-left font-bold max-w-18'>Return on Investment (ROI):</h3>
                    <h3 onClick={() => setOpensix(!opensix)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opensix && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A measure of how profitable a bet is, calculated by dividing the profit by the
                            total amount wagered. Positive ROI means the bettor is making a profit.
                        </p>
                    )}
                </div>

                <div ref={dropsevenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenseven(!openseven)} className='relative text-sm text-left font-bold max-w-18'>Win Probability:</h3>
                    <h3 onClick={() => setOpenseven(!openseven)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openseven && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A statistical calculation estimating the likelihood that a team will win a given
                            game, expressed as a percentage.
                        </p>
                    )}
                </div>

                <div ref={dropeightRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpeneight(!openeight)} className='relative text-sm text-left font-bold max-w-18'>Advanced Metrics:</h3>
                    <h3 onClick={() => setOpeneight(!openeight)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openeight && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            In-depth statistics beyond traditional stats (like points scored) used to evaluate
                            performance, such as Expected Points Added (EPA) or Player Efficiency Rating (PER).
                        </p>
                    )}
                </div>

                <div ref={dropnineRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpennine(!opennine)} className='relative text-sm text-left font-bold max-w-18'>Power Ratings:</h3>
                    <h3 onClick={() => setOpennine(!opennine)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opennine && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A numerical ranking system used to evaluate team strength based on performance
                            metrics. These ratings are often used to create point spreads.
                        </p>
                    )}
                </div>

                <div ref={droptenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenten(!openten)} className='relative text-sm text-left font-bold max-w-18'>Line Movement:</h3>
                    <h3 onClick={() => setOpenten(!openten)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openten && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The shift in betting lines or odds, usually in response to betting action,
                            injuries, or other influential factors.
                        </p>
                    )}
                </div>
            </div>

            <div>
                <div className="relative ml-5 mt-9 h-19.5 w-20.4 bg-green rounded-2xl">
                <img src={faq_styled} className='absolute mt-0 ml-19.17 h-19.5 rounded-tr-2xl'/>
                    <h3 className="relative pt-8 ml-4 max-w-16 text-left text-white text-xl font-bold">Get PickBetta for just $10 a week</h3>
                    <p className="relative pt-3 ml-4 max-w-19.3 text-left text-white text-base font-medium">
                    Your first week is always free. Start your trial now and see the difference!
                    </p>
                    <button className="relative p-2 w-13 ml-4 mt-4 float-left font-bold text-green bg-white rounded">Start Now!</button>
                </div>
            </div>
        </div>
    )
}