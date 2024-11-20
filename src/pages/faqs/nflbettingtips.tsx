import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import search from './../../assets/icons/search.png'
import line from './../../assets/images/line_green.png'
import faq_styled from './../../assets/images/faq_styled.png'

export const Nflbettingtips = () => {
  const [ open, setOpen ] = useState(false);
  const [ opentwo, setOpentwo ] = useState(false);
  const [ openthree, setOpenthree ] = useState(false);
  const [ openfour, setOpenfour ] = useState(false);
  const [ openfive, setOpenfive ] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const droptwoRef = useRef<HTMLDivElement>(null)
  const dropthreeRef = useRef<HTMLDivElement>(null)
  const dropfourRef = useRef<HTMLDivElement>(null)
  const dropfiveRef = useRef<HTMLDivElement>(null)

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
    
  window.addEventListener("click",handleClickOutsideDropdown)
  window.addEventListener("click",handleClickOutsideDropdowntwo)
  window.addEventListener("click",handleClickOutsideDropdownthree)
  window.addEventListener("click",handleClickOutsideDropdownfour)
  window.addEventListener("click",handleClickOutsideDropdownfive)

    return (
        <div className="relative h-80 w-full bg-white overflow-hidden">
            <div>
                <h3 className="relative text-4xl text-dark font-extrabold mt-11 ml-5 max-w-20 text-center font-montserrat">
                Frequently Asked Questions (FAQs)
                </h3>
            </div>

            <div>
                <input className="relative text-sm mt-4 pl-6 h-6.3 w-20.5 border rounded font-montserrat" placeholder="Search for questions" />
                <img src={search} className='relative -mt-5.2 ml-6 h-4'/>
            </div>

            <div className='flex overflow-scroll scroll-smooth text-nowrap'>
                <Link to="/faqs"><h3 className='relative mt-5 ml-5 text-left text-dark font-medium text-sm font-montserrat'>General Questions</h3></Link>
                <Link to="/subscriptions"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Subscription & Pricing</h3></Link>
                <Link to="/features"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Features & Functionality</h3></Link>
                <Link to="/data"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Data & Analytics</h3></Link>
                <Link to="/generalnfl"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>General NFL Betting Questions</h3></Link>
                <Link to="/betting"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Betting Types & Strategies</h3></Link>
                <Link to="/nflbettingrules"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>NFL Betting Rules & Terms</h3></Link>
                <div>
                <h3 className='relative mt-5 ml-5 text-left text-sm text-green font-extrabold font-montserrat'>NFL Betting Tips & Insight</h3>
                <img src={line} className='relative mt-2 ml-5 h-1 w-14.5'/>
                </div>
                <Link to="/generalquestions"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>General Responsible Gambling Questions</h3></Link>
                <Link to="/financialmanagement"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Financial Management & Limits</h3></Link>
                <Link to="/timemanagement"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Time Management & Self-Control</h3></Link>
                <Link to="/understandingtheodds"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Understanding the Odds & Managing Expectations</h3></Link>
                <Link to="/pickbettaterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>PickBetta Terms & Sports Analytics</h3></Link>
                <Link to="/sportbettingterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Sports Betting Terms</h3></Link>
                <Link to="/nflbettingterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>NFL Betting Terms & Definitions</h3></Link>
                <Link to="/sportsbookterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium font-montserrat'>Sportsbook Terms & Definitions</h3></Link>
            </div>

            <div>
                <div ref={dropdownRef} className="relative mt-4 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpen(!open)} className='relative text-sm text-left font-bold font-montserrat'>Is betting on the favorite a good idea?</h3>
                    <h3 onClick={() => setOpen(!open)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { open && (
                        <p className="relative pt-2 text-sm font-medium text-left font-montserrat">
                            Betting on the favorite can be tempting because they’re expected to win,
                            but favorites don’t always cover the spread. Favorites tend to get more public
                            money, which can inflate the line and reduce value. Look for smart plays, not
                            just who’s expected to win.
                        </p>
                    )}
                </div>

                <div ref={droptwoRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpentwo(!opentwo)} className='relative text-sm text-left font-bold font-montserrat'>What’s the best strategy for betting NFL games?</h3>
                    <h3 onClick={() => setOpentwo(!opentwo)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { opentwo && (
                        <p className="relative pt-2 text-sm font-medium text-left font-montserrat">
                            The best strategy is to do your  research! Look at team trends, injuries,
                            weather, and how each team performs in different situations (like home vs.
                            away or in bad weather). Also, managing your bankroll and not betting too much
                            on any one game is key.
                        </p>
                    )}
                </div>

                <div ref={dropthreeRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenthree(!openthree)} className='relative text-sm text-left font-bold font-montserrat'>Should I bet on teams based on recent performance?</h3>
                    <h3 onClick={() => setOpenthree(!openthree)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openthree && (
                        <p className="relative pt-2 text-sm font-medium text-left font-montserrat">
                            Recent performance can be a good indicator, but it’s important to look at the
                            full picture. Sometimes teams coming off a big win are overvalued, while teams
                            coming off a loss might be undervalued. Trends, injuries, and matchups matter too.
                        </p>
                    )}
                </div>

                <div ref={dropfourRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfour(!openfour)} className='relative text-sm text-left font-bold max-w-18 font-montserrat'>How do injuries affect NFL betting?</h3>
                    <h3 onClick={() => setOpenfour(!openfour)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openfour && (
                        <p className="relative pt-2 text-sm font-medium text-left font-montserrat">
                            Injuries can have a huge impact on both the point spread and the total. A star
                            quarterback going down can shift the line by several points. Always check injury
                            reports before placing your bet, especially for key players like QBs, running
                            backs, and defensive stars.
                        </p>
                    )}
                </div>

                <div ref={dropfiveRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfive(!openfive)} className='relative text-sm text-left font-bold max-w-18 font-montserrat'>How can I avoid losing money on NFL bets?</h3>
                    <h3 onClick={() => setOpenfive(!openfive)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openfive && (
                        <p className="relative pt-2 text-sm font-medium text-left font-montserrat">
                            It’s important to bet responsibly. Set a budget and stick to it. Don’t chase
                            losses, and always do your research. It helps to focus on a few games you know
                            well rather than betting on every matchup. And remember, no bet is
                            guaranteed, so  only bet what you can afford to lose.
                        </p>
                    )}
                </div>
            </div>

            <div>
                <div className="relative ml-5 mt-9 h-19.5 w-20.4 bg-green rounded-2xl">
                <img src={faq_styled} className='absolute mt-0 ml-19.17 h-19.5 rounded-tr-2xl'/>
                    <h3 className="relative pt-8 ml-4 max-w-16 text-left text-white text-xl font-bold font-montserrat">Get PickBetta for just $10 a week</h3>
                    <p className="relative pt-3 ml-4 max-w-19.3 text-left text-white text-base font-medium font-montserrat">
                    Your first week is always free. Start your trial now and see the difference!
                    </p>
                    <button className="relative p-2 w-13 ml-4 mt-4 float-left font-bold text-green bg-white rounded font-montserrat">Start Now!</button>
                </div>
            </div>
        </div>
    )
}