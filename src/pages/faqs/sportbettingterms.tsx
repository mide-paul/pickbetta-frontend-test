import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import search from './../../assets/icons/search.png'
import line from './../../assets/images/line_green.png'
import faq_styled from './../../assets/images/faq_styled.png'

export const Sportbettingterms = () => {
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
                <Link to="/pickbettaterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>PickBetta Terms & Sports Analytics</h3></Link>
                <div>
                <h3 className='relative mt-5 ml-5 text-left text-sm text-green font-extrabold'>Sports Betting Terms</h3>
                <img src={line} className='relative mt-2 ml-5 h-1 w-12.2'/>
                </div>
                <Link to="/nflbettingterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>NFL Betting Terms & Definitions</h3></Link>
                <Link to="/sportsbookterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Sportsbook Terms & Definitions</h3></Link>
            </div>

            <div>
                <div ref={dropdownRef} className="relative mt-4 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpen(!open)} className='relative text-sm text-left font-bold'>Point Spread:</h3>
                    <h3 onClick={() => setOpen(!open)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { open && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet where the sportsbook sets a margin of victory for the favorite. Bettors
                            wager on whether the favorite will win by more than the spread or the underdog
                            will keep the game close.
                        </p>
                    )}
                </div>

                <div ref={droptwoRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpentwo(!opentwo)} className='relative text-sm text-left font-bold'>Moneyline:</h3>
                    <h3 onClick={() => setOpentwo(!opentwo)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { opentwo && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet on which team will win the game outright, regardless of the point spread.
                            The odds reflect the likelihood of each team winning.
                        </p>
                    )}
                </div>

                <div ref={dropthreeRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenthree(!openthree)} className='relative text-sm text-left font-bold'>Over/Under (Total):</h3>
                    <h3 onClick={() => setOpenthree(!openthree)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openthree && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet on whether the total combined points scored by both teams will be over or
                            under a number set by the sportsbook.
                        </p>
                    )}
                </div>

                <div ref={dropfourRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfour(!openfour)} className='relative text-sm text-left font-bold'>Prop Bet (Proposition Bet):</h3>
                    <h3 onClick={() => setOpenfour(!openfour)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openfour && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A wager on specific outcomes  within a game that don’t directly affect the final
                            result, such as a player’s rushing yards or whether a certain event will occur.
                        </p>
                    )}
                </div>

                <div ref={dropfiveRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfive(!openfive)} className='relative text-sm text-left font-bold max-w-18'>Parlay:</h3>
                    <h3 onClick={() => setOpenfive(!openfive)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openfive && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet that combines two or more individual bets into one. To win, all selections
                            must be correct, but the payout is higher than betting on each game individually.
                        </p>
                    )}
                </div>

                <div ref={dropsixRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpensix(!opensix)} className='relative text-sm text-left font-bold max-w-18'>Teaser:</h3>
                    <h3 onClick={() => setOpensix(!opensix)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opensix && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A type of parlay where you adjust the point spread or total in your favor, but
                            the payout is lower compared to a standard parlay.
                        </p>
                    )}
                </div>

                <div ref={dropsevenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenseven(!openseven)} className='relative text-sm text-left font-bold max-w-18'>Sharp Money:</h3>
                    <h3 onClick={() => setOpenseven(!openseven)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openseven && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Bets placed by professional or well-informed bettors, often affecting the betting
                            lines due to the credibility of their wagers.
                        </p>
                    )}
                </div>

                <div ref={dropeightRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpeneight(!openeight)} className='relative text-sm text-left font-bold max-w-18'>Public Money:</h3>
                    <h3 onClick={() => setOpeneight(!openeight)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openeight && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Bets placed by casual or recreational bettors. When a lot of public money comes
                            in on one side, it can influence the line.
                        </p>
                    )}
                </div>

                <div ref={dropnineRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpennine(!opennine)} className='relative text-sm text-left font-bold max-w-18'>Juice (Vigorish):</h3>
                    <h3 onClick={() => setOpennine(!opennine)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opennine && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The fee or commission that a sportsbook charges on bets. It’s typically built into
                            the odds (e.g., -110 odds, meaning you must bet $110 to win $100).
                        </p>
                    )}
                </div>

                <div ref={droptenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenten(!openten)} className='relative text-sm text-left font-bold max-w-18'>Live Betting:</h3>
                    <h3 onClick={() => setOpenten(!openten)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openten && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A type of wager placed during the course of a game with odds that change in
                            real-time based on the action and events as the game progresses.
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