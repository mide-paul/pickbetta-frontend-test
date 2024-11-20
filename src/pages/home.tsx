//import { Link } from "react-router-dom";
import home_image from './../assets/images/home_image.png'
import home_image2 from './../assets/images/home_image2.png'
import home_image3 from './../assets/images/home_image3.png'
import presentation from './../assets/icons/presentation.png'
//import writing from './../assets/icons/writing.png'
import analysis from './../assets/icons/analysis.png'

export const Home = () => {

    return (
      <div className="home">
        <div>
          <h3 className="relative text-3xl text-dark font-extrabold mt-6 -ml-1 max-w-26 text-center">
            Your ultimate source for <span className="italic text-green-deep"> fact-checked </span>sports <span className="italic text-green-deep">betting data</span>
          </h3>
        </div>

        <div>
          <p className="relative mt-3 text-sm text-gray text-center ml-7 max-w-19">We don’t advise you to pick, we advise you to pickbetta!</p>
        </div>
        <div>
          <img src={home_image} alt="" className="relative mt-4 ml-5.2 w-19.4" />
          <p className="relative text-center text-base text-gray mt-4 ml-5 max-w-19.5">Experience the power of verified data- Try pickbetta free for one week. We’re so
            confident in the value that we deliver that we’re giving you the chance to fact-check
            our data yourself. See the difference that accurate, reliable insights can make in your
            betting strategy.
          </p>
          <p className="relative mt-3 ml-0.1 text-dark text-base font-bold max-w-22">
          Try PickBetta free for a week—just $10 a week after. Start winning smarter today!
          </p>
          <button className="relative h-7 w-19.5 -ml-0.5 bg-green-deep rounded text-white mt-4">Download now!</button>
        </div>

        <div>
          <h3 className="relative ml-5 mt-8 text-xl font-extrabold text-left">Who We Are</h3>
          <p className="relative mt-4 ml-5 text-base text-gray text-left max-w-19.5">
          We are sports bettors, just like you. After decades of placing bets, scrolling countless sites
          for reliable information, and dealing with the frustrations of biased picks and unreliable data,
          we knew there had to be a better way. That’s why we created PickBetta—a platform designed by
          bettors, for bettors. We understand what you need because we’re in the game with you. We place
          multiple bets daily during year round.
          </p>
          <img src={home_image2} alt="" className="relative mt-4 ml-5.2 w-19.4" />
        </div>

        <div>
          <h3 className="relative ml-5 mt-8 text-xl font-extrabold text-left">Why Create PickBetta</h3>
          <p className="relative mt-4 ml-5 text-base text-gray text-left max-w-19.4">
          The betting community deserves better than the usual fluff and unreliable picks that saturate
          the market. We built PickBetta to fill a crucial gap—a state-of-the-art digital sports data
          warehouse that delivers only the most accurate, fact-checked information. Our goal is to empower
          you with the data you need to make informed, confident betting decisions. No fluff, no gimmicks—just
          pure, valuable insights.
          </p>
          <img src={home_image3} alt="" className="relative mt-4 ml-5.2 w-19.4" />
        </div>

        <div>
          <h3 className="relative ml-5 mt-8 text-xl font-extrabold text-left">What Do We Offer</h3>
          <p className="relative mt-4 ml-5 text-base text-gray text-left max-w-19.4">
          PickBetta is your go-to source for trustworthy sports betting data. With nearly a century of
          sports data at your fingertips, our platform provides:
          </p>
        </div>

        <div>
          <div className="relative ml-5 mt-6 bg-gray-lighter h-17 w-19.5 rounded-xl">
          <img src={presentation} alt="" className="relative pt-6 ml-4" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left">Fact-Checked Insights</h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19">Every stat, trend, and
              piece of data is rigorously verified to ensure accuracy.
            </p>
          </div>
        </div>

        <div>
          <div className="relative ml-5 mt-6 bg-gray-lighter h-17 w-19.5 rounded-xl">
          <img src={presentation} alt="" className="relative pt-6 ml-4" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left">Customizable Tools</h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.6">Tailor your
              experience with personalized dashboards, real-time alerts, and interactive features.
            </p>
          </div>
        </div>

        <div>
          <div className="relative ml-5 mt-6 bg-gray-lighter h-19.2 w-19.5 rounded-xl">
          <img src={analysis} alt="" className="relative pt-6 ml-4" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left">Comprehensive Coverage</h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.6">Whether you’re into
              NFL, NCAAF, NCAAB, or NBA basketball, we’ve got you covered with detailed analysis and timely
              data.
            </p>
          </div>
        </div>

        <div>
          <h3 className="relative mt-8 ml-5 text-2xl font-extrabold text-left">How We Deliver Value</h3>
          <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.4">
          We deliver unparalleled data through a cutting-edge online mobile portal designed for ease of
          use and accessibility. Our platform is built to reach the entire betting community through the
          power of word-of-mouth. We know that once you experience the value PickBetta offers, you’ll
          spread the word—because, like us, you recognize the difference that accurate, unbiased data makes.
          </p>
          <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.4">
          <span className="text-xl font-bold">Join us at PickBetta—</span>where we don’t advise you to pick, we advise you to pick better. This
          is more than just a product; it’s a movement for a smarter, more informed betting community.
          </p>
        </div>

        <div>
          <h3 className="relative mt-8 ml-5 text-4xl font-extrabold text-left">
          Get PickBetta for just $10 a week
          </h3>
          <p className="relative mt-3 ml-5 text-xl text-gray text-left max-w-19.4">
          Your first week is always free. Start your trial now and see the difference!
          </p>
        </div>
        <button className="relative h-7 w-15 -ml-12.5 font-bold bg-green-deep rounded text-white mt-4.7">Download now!</button>
      </div>
    );
  };