import aboutus_image from './../assets/images/aboutus_image.svg'
import faq_styled from  './../assets/images/faq_styled.png'
import amanda from  './../assets/images/amanda.svg'
import facebook from './../assets/icons/facebook.svg';
import message from './../assets/icons/message.svg';
import instagram from './../assets/icons/instagram.svg';
import youtube from './../assets/icons/youtube.svg';
import fisher from  './../assets/images/fisher.png'

export const Aboutus = () => {
  return (
    <div className="about">
      <div>
        <h3 className="relative   ss:text-3xl ss:text-dark ss:font-extrabold ss:mt-10 ss:ml-0 ss:max-w-26 ss:text-center       sm:text-3xl sm:text-dark sm:font-extrabold sm:mt-11 sm:ml-0 sm:max-w-26 sm:text-center   md:text-3xl md:text-dark md:font-extrabold md:mt-8 md:ml-16 md:max-w-26 md:text-center              x:text-center x:text-dark-gray-900 x:text-4xl x:mt-11 x:ml-29 x:font-g x:max-w-28       xl:text-center xl:text-dark-gray-900 xl:text-5xl xl:mt-11 xl:ml-32 xl:font-g xl:max-w-28  font-montserrat">
          About Us
        </h3>
        <p
          className="relative     ss:text-center ss:text-base ss:text-gray ss:mt-4 ss:ml-2      sm:text-center sm:text-base sm:text-gray sm:mt-4 sm:ml-5     md:text-center md:text-base md:text-gray md:mt-4 md:ml-10  md:max-w-40.5           max-w-20 font-montserrat
       xl:text-center xl:max-w-72 xl:ml-13 "
        >
          The Story Behind PickBetta: From Frustration to Empowerment
        </p>
        <img
          src={aboutus_image}
          alt=""
          className="relative    ss:h-15 ss:mt-6 ss:ml-2 ss:w-20       sm:h-15 sm:mt-6 sm:ml-5 sm:w-20.5    md:h-15 md:mt-6 md:ml-17 md:w-20.5     xl:ml-33 xl:w-25 xl:mt-12.5"
        />
        <p className="relative      ss:mt-6 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3          sm:mt-6 sm:ml-5 sm:text-base  sm:text-left sm:max-w-19.4    md:mt-6 md:ml-8 md:mr-5  md:text-base md:text-left md:max-w-66.1        xl:text-center xl:max-w-66.4 xl:ml-16 xl:-mt-19.5    text-gray  font-montserrat">
          For over 40 years, I’ve been where you are—deep in the trenches of
          sports betting, constantly searching for that edge. Like so many
          bettors, I fell into the trap of paying thousands to so-called
          "expert" handicappers, hoping they held the key to consistent wins.
          Every Saturday and Sunday morning, I’d scramble, desperate for someone
          to advise me who to pick. I was chasing picks like a dog chasing its
          tail, never getting anywhere.
        </p>
      </div>
      <div>
        <h3 className="relative    ss:ml-4 ss:mt-6 ss:text-xl ss:font-extrabold ss:text-left      sm:ml-5 sm:mt-6 sm:text-xl sm:font-extrabold sm:text-left   md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left       font-montserrat xl:ml-35 xl:mt-19.5">
          The Pain of Paying for Picks
        </h3>
        <p
          className="relative   ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3      sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5     font-montserrat
        xl:ml-35 xl:max-w-47"
        >
          The cycle was exhausting. I’d pay for picks, win some, lose some, and
          when the losses started to pile up, I’d jump to the next "expert." It
          was a never-ending loop—spending more money on picks and losing even
          more on the actual bets. I started to wonder: How do I even know these
          handicappers are putting in the work? Are they really grinding out the
          research, or are they just recycling the same surface-level insights?
          And that’s when it hit me. Think about it—your "expert" handicapper,
          the one you faithfully pay for advice, is getting his insights from
          somewhere. Why not cut out the middleman and get the same, if not
          better, information yourself? Why am I betting my hard-earned dollars
          on someone else’s thinking, research, and work ethic when I could be
          making my own decisions with the right data?
        </p>
      </div>
      <div>
        <h3
          className="relative    ss:ml-4 ss:mt-5 ss:text-xl ss:text-left        sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left  md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left    font-montserrat
        xl:ml-35 xl:mt-5 xl:mb-5"
        >
          The Turning Point
        </h3>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3     sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat
        xl:ml-35 xl:max-w-47"
        >
          I realized I had to change my approach. It was time to stop chasing
          picks and start chasing data. The only way to truly succeed in
          betting—consistently hitting that 60% winning percentage—is to make
          data-driven decisions. Once I made that shift, everything changed. I
          stopped relying on questionable advice and started trusting the
          numbers. But, there was a problem. The data I needed wasn’t just hard
          to find—it was practically hidden under lock and key. In the secretive
          world of sports data, the real insights, the ones that could actually
          give you an edge, are never sold to the public. Remember I said that!
          Good game is (usually) sold, not told, but in this (Mafioso-ran)
          business, they keep the best data for themselves. Instead of offering
          you the raw, actionable information, they sell you their "pick"—their
          interpretation of what the data says. In other words, they hide the
          data from you and make you pay for their version of it. That’s when
          the idea for PickBetta was born. I realized it was time to break the
          mold, to create a platform that puts the power back in your hands by
          giving you direct access to the same high-quality data the pros use,
          so you can make your own informed decisions.
        </p>
      </div>
      <div>
        <h3 className="relative   ss:ml-4 ss:mt-5 ss:text-xl  ss:text-left ss:max-w-20          sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-20    md:max-w-30  md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left      font-montserrat xl:ml-35 xl:mt-5 xl:mb-5 xl:max-w-25">
          The Problem with Paying for Picks
        </h3>
        <p
          className="relative   ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.4    sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
         xl:ml-35 xl:max-w-45"
        >
          Paying for picks might seem like a shortcut to success, but it rarely
          translates into a winning strategy. It’s a game of hit or miss, and
          when you start missing, you’re back to square one, searching for
          another so-called expert. The truth is, no one cares more about your
          success than you do. And no one should have more control over your
          bets than you. The problem with paying for picks is that you’re
          betting on someone else’s judgment—and when they’re wrong, it’s your
          bankroll that takes the hit.
        </p>
      </div>
      <div>
        <h3 className="relative   ss:ml-4 ss:mt-5 ss:text-xl  ss:text-left ss:max-w-20        sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-20    md:max-w-30 md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left        font-montserrat xl:ml-35 xl:mt-5 xl:mb-5 xl:max-w-25">
          Our Solution: Data Empowerment
        </h3>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3     sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
        xl:ml-35 xl:max-w-42"
        >
          At PickBetta, we have officially broken this cycle. We believe you’re
          fully capable of making your own winning decisions—you just need the
          same data that the pros have. That’s why we’ve built a
          state-of-the-art digital sports data warehouse, with nearly a
          century’s worth of stats and insights at your fingertips. Our goal is
          simple: to level the playing field by giving you access to the same
          data that the so-called experts use, so you can make informed,
          confident picks without relying on anyone else. With PickBetta, you’re
          not just buying into a newsletter—you’re investing in your ability to
          bet smarter and win more consistently.
        </p>
      </div>
      <div>
        <h3 className="relative  ss:ml-4 ss:mt-5 ss:text-xl ss:text-left ss:max-w-20      sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-20   md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left      font-montserrat xl:ml-35 xl:mt-5 xl:mb-5 xl:max-w-25">
          A New Way to Bet
        </h3>
        <p
          className="relative   ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3      sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
        xl:ml-35 xl:max-w-42"
        >
          We’ve been through the frustrations, the wasted money, and the missed
          opportunities. We’ve seen firsthand that spending money on picks does
          not equal success. The only way to achieve a 60% winning percentage is
          to make data-driven decisions, and that’s exactly what PickBetta
          empowers you to do. Stop chasing picks. Start chasing data. With
          PickBetta, you’re in control. You make the decisions. You create your
          own success. We’re just here to provide the tools to help you do it
          better. PickBetta was created out of necessity—my necessity, and
          likely yours too. I wanted a platform that I could trust implicitly, a
          place where the data was not just accurate but genuinely useful. I
          envisioned a site that would cut through the noise and give bettors
          like us exactly what we need to make smarter, more confident
          decisions.
        </p>
      </div>
      <div>
        <h3 className="relative  ss:ml-4 ss:mt-6 ss:text-xl  ss:text-left ss:max-w-21       sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-21   md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left    font-montserrat xl:ml-35 xl:mt-5 xl:mb-5 xl:max-w-25">
          Here’s what drives PickBetta:
        </h3>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3        sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4     md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5 font-montserrat
        xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            1. Transparency Over Profit:
          </span>{" "}
          We’re not here to sell you on a pick. We’re here to provide you with
          the facts—plain and simple. You deserve to know that the data you’re
          using is trustworthy and that the platform you’re relying on isn’t
          just another money-making scheme.
        </p>
      </div>
      <div>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3   sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat
        xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            2. Empowerment Through Information:{" "}
          </span>
          We believe that the best bettor is an informed bettor. That’s why we
          focus on delivering data that is not only accurate but also
          actionable. With PickBetta, you have the power to make your own
          decisions, based on the most relevant information available.
        </p>
      </div>
      <div>
        <p
          className="relative ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3       sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
        xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            3. A Commitment to Excellence:{" "}
          </span>
          After decades in the betting world, I know what works and what
          doesn’t. PickBetta is designed to offer the best of what I’ve
          learned—the kind of resource I wish I had when I started. It’s a
          platform built by a bettor, for bettors, with a singular focus on
          helping you bet better.
        </p>
      </div>
      <div>
        <h3 className="relative  ss:ml-4 ss:mt-5 ss:text-xl  ss:text-left ss:max-w-20       sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-20   md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left    font-montserrat xl:ml-35 xl:mt-7 xl:mb-5 xl:max-w-25">
          The Future of Betting
        </h3>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3      sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat
        xl:ml-35 xl:max-w-50"
        >
          PickBetta is more than just a tool—it’s a movement. It’s about
          shifting the focus from unreliable picks to solid, fact-checked data
          that empowers bettors to succeed on their own terms.
        </p>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3       sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat
        xl:ml-35 xl:max-w-42 xl:mt-7"
        >
          We’ve all been frustrated by the typical betting sites that seem more
          interested in profits than people. With PickBetta, we’re changing the
          game. We’re here to support you with the information you need, without
          the pressure of making a sale or pushing a narrative. Because at the
          end of the day, betting should be about making informed choices—and
          we’re here to help you make the best ones possible.
        </p>
      </div>
      <div>
        <h3 className="relative   ss:ml-4 ss:mt-6 ss:text-xl ss:text-left ss:max-w-20       sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-20     md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left      font-montserrat xl:text-center xl:text-dark-gray-900 xl:text-4xl xl:mt-10 xl:ml-12 xl:font-g xl:max-w-14 ">
          Mission
        </h3>
        <p className="relative  ss:ml-4 ss:mt-5 ss:text-xl ss:font-normal ss:text-left ss:max-w-20    sm:ml-5 sm:mt-6 text-gray sm:text-xl sm:font-normal sm:text-left sm:max-w-20   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat xl:ml-35 xl:max-w-42 xl:-mt-7">
          Offer Value in a Competitive Industry:
        </p>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3       sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
         xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            1. Focus on Data Integrity and Transparency: <br />
          </span>
          Fact-Checked Data: We ensure that all data is meticulously verified
          and sourced from reputable sources. We emphasize the reliability and
          accuracy of your information. Transparency in Analysis: We clearly
          explain the reasoning behind any analysis or insight, allowing our
          users to understand the logic and methodology.
        </p>
        <p
          className="relative ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3       sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat
         xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            2. User Empowerment Over Pick Selling: <br />
          </span>
          Data-Driven Decisions: Instead of selling picks, we provide the tools
          and information that you need to make your own informed decisions.
          This approach empowers you rather than creating dependency.
          Educational Content: We offer content that educates users on how to
          interpret data, understand trends, and develop their own betting
          strategies.
        </p>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3       sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
         xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            3. Advanced Analytical Tools: <br />
          </span>
          Customizable Dashboards: Build your own dashboard with the stats and
          trends that you care about most. Predictive Analytics: We use
          proprietary machine learning to offer probability-based insights that
          help you identify the most likely outcomes based on historical data
          and current conditions.
        </p>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3       sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
         xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            4. Personalized User Experience: <br />
          </span>
          Location-Based Insights: We provide data and analysis tailored to your
          location, reflecting local conditions, team popularity, and regional
          betting trends. Time-Sensitive Indicators: We offer insights that are
          timely and relevant to the current state of the season, adjusting for
          factors like playoff races, injuries, and weather.
        </p>
      </div>
      <div>
        <h3 className="relative  ss:ml-4 ss:mt-5 ss:text-xl ss:font-extrabold ss:text-left ss:max-w-20      sm:ml-5 sm:mt-6 sm:text-xl sm:font-extrabold sm:text-left sm:max-w-20  md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left      font-montserrat xl:ml-35 xl:mt-5 xl:mb-5 xl:max-w-25">
          How are we unique?
        </h3>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3      sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4   md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
        xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            1. Fact-First Approach: <br />
          </span>
          Commitment to Accuracy: We are the most trustworthy source of sports
          betting information, with a strict adherence to fact-checking and data
          integrity. No Picks, Just Data: PickBetta does not sell picks.
          Instead, we offer the tools and insights bettors need to make their
          own decisions confidently.
        </p>
        <p
          className="relative  ss:mt-4 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3      sm:mt-4 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat
        xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50"
        >
          <span className="text-x font-bold text-gray-dark">
            2. Comprehensive and Tailored Insights: <br />
          </span>
          All-in-One Platform: We offer everything for a bettor in one
          place—stats, analysis, trends, and tools—eliminating the need to visit
          multiple sites for information.
        </p>
      </div>
      <div>
        <h3 className="relative  ss:ml-4 ss:mt-5 ss:text-xl  ss:text-left ss:max-w-20     sm:ml-5 sm:mt-6 sm:text-xl font-extrabold sm:text-left sm:max-w-20   md:ml-8 md:mt-6 md:text-xl md:font-extrabold md:text-left     font-montserrat xl:text-left xl:text-dark-gray-900 xl:text-4xl xl:mt-10 xl:ml-12 xl:font-g xl:max-w-20">
          Unique Value Proposition (UVP):
        </h3>
        <p className="relative    ss:ml-4 ss:mt-3  ss:text-xl ss:font-normal ss:text-left ss:max-w-20       sm:ml-5 sm:mt-3 text-gray sm:text-xl sm:font-normal sm:text-left sm:max-w-20  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5    font-montserrat xl:ml-35 xl:max-w-42 xl:-mt-13 xl:text-dark-gray-900 xl:font-extrabold">
          Why PickBetta?
        </p>
        <p className="relative  ss:mt-2 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3     sm:mt-2 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50">
          <span className="text-x font-bold text-gray-dark">
            1. Integrity Over Influence: <br />
          </span>
          We don’t sell you picks. We equip you with the most accurate,
          relevant, and actionable data, so you can make smarter bets.
        </p>
        <p className="relative  ss:mt-2 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3    sm:mt-2 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5  font-montserrat xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50">
          <span className="text-x font-bold text-gray-dark">
            2. 100% Fact-Checked: <br />
          </span>
          Every stat, every trend, rigorously verified to ensure you’re betting
          with the best information available.
        </p>
        <p className="relative  ss:mt-2 ss:ml-4 ss:text-base  ss:text-left ss:max-w-19.3    sm:mt-2 sm:ml-5 sm:text-base text-gray sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-left md:max-w-46.5   font-montserrat xl:ml-37 xl:mt-5 xl:mb-5 xl:max-w-50">
          <span className="text-x font-bold text-gray-dark">
            3. Custom-Tailored Experience: <br />
          </span>
          From personalized dashboards to real-time alerts, PickBetta offers a
          betting experience that’s as unique as you are.
        </p>
      </div>

      <div>
        <div>
          <h3 className="relative    ss:ml-4 ss:text-dark ss:mt-4 ss:text-xl ss:text-left       sm:ml-5 sm:text-dark sm:mt-5 sm:text-xl sm:text-left    md:ml-19.6 md:mt-6 md:text-2xl md:font-extrabold md:text-left    font-bold xl:text-dark xl:mt-12 xl:text-3xl xl:text-center">
            Meet the Team
          </h3>
          <p className="relative   ss:ml-4 ss:mt-5 ss:text-gray ss:text-base ss:text-left ss:max-w-19.3        sm:ml-5 sm:mt-5 sm:text-gray sm:text-base sm:text-left sm:max-w-19.4  md:mt-4 md:ml-8 md:mr-5 md:text-base  md:text-center md:max-w-46.5   font-medium xl:mt-5 xl:ml-19.1 xl:text-gray xl:text-base xl:text-center xl:max-w-60">
            Just take a look - each member of the team is watching your every
            gesture and will hear your every whisper.
          </p>
        </div>

        <div className=" ss:flex ss:flex-col    sm:flex sm:flex-col xl:flex-row xl:flex-wrap">
          <div className="relative  ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent         sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray   md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray  sm:bg-transparent rounded xl:mt-7">
            <img
              src={amanda}
              className="relative ss:mt-3 ss:ml-8 ss:h-16 ss:w-15   sm:mt-3 sm:ml-8 sm:h-16 sm:w-15"
            />
            <h3 className="relative ss:mt-5 ss:text-center ss:text-dark ss:text-sm   sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative   ss:mt-1 ss:text-center ss:text-dark ss:text-sm     sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative   ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1      sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute  ss:mt-3 ss:ml-10     sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5  sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative  ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative   ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent   sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent  md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray      rounded xl:mt-7">
            <img
              src={fisher}
              className="relative ss:mt-3 ss:ml-5 ss:h-16 ss:w-18      sm:mt-3 sm:ml-5 sm:h-16 sm:w-18"
            />
            <h3 className="relative  ss:mt-5 ss:text-center ss:text-dark ss:text-sm     sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative   ss:mt-1 ss:text-center ss:text-dark ss:text-sm      sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative   ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1        sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute ss:mt-3 ss:ml-10  sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative  ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative  ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent  sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent  md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray       rounded xl:mt-7">
            <img
              src={amanda}
              className="relative      ss:mt-3 ss:ml-8 ss:h-16 ss:w-15   sm:mt-3 sm:ml-8 sm:h-16 sm:w-15"
            />
            <h3 className="relative   ss:mt-5 ss:text-center ss:text-dark ss:text-sm        sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative  ss:mt-1 ss:text-center ss:text-dark ss:text-sm    sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative  ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1     sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute ss:mt-3 ss:ml-10    sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5 sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative ss:h-4.5  sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative  ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent  sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent   md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray     rounded xl:mt-7">
            <img
              src={fisher}
              className="relative  ss:mt-3 ss:ml-5 ss:h-16 ss:w-18  sm:mt-3 sm:ml-5 sm:h-16 sm:w-18"
            />
            <h3 className="relative  ss:mt-5 ss:text-center ss:text-dark ss:text-sm   sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative   ss:mt-1 ss:text-center ss:text-dark ss:text-sm  sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1      sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute  ss:mt-3 ss:ml-10   sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative  ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent   sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent   md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray       rounded xl:ml-10 xl:mt-8">
            <img
              src={amanda}
              className="relative ss:mt-3 ss:ml-8 ss:h-16 ss:w-15 sm:mt-3 sm:ml-8 sm:h-16 sm:w-15"
            />
            <h3 className="relative  ss:mt-5 ss:text-center ss:text-dark ss:text-sm    sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative   ss:mt-1 ss:text-center ss:text-dark ss:text-sm   sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1    sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute  ss:mt-3 ss:ml-10     sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5     sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative   ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent   sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent   md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray   rounded xl:mt-8">
            <img
              src={fisher}
              className="relative  ss:mt-3 ss:ml-5 ss:h-16 ss:w-18    sm:mt-3 sm:ml-5 sm:h-16 sm:w-18"
            />
            <h3 className="relative  ss:mt-5 ss:text-center ss:text-dark ss:text-sm   sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative   ss:mt-1 ss:text-center ss:text-dark ss:text-sm    sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative   ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1    sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute   ss:mt-3 ss:ml-10    sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative  ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent   sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent  md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray     rounded xl:mt-8">
            <img
              src={amanda}
              className="relative   ss:mt-3 ss:ml-8 ss:h-16 ss:w-15    sm:mt-3 sm:ml-8 sm:h-16 sm:w-15"
            />
            <h3 className="relative  ss:mt-5 ss:text-center ss:text-dark ss:text-sm    sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative   ss:mt-1 ss:text-center ss:text-dark ss:text-sm    sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative  ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1    sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute  ss:mt-3 ss:ml-10     sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative  ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>

          <div className="relative  ss:mt-5 ss:ml-4 ss:h-23 ss:w-19.3 ss:border ss:border-gray ss:bg-transparent  sm:mt-5 sm:ml-7 sm:h-23 sm:w-19.3 sm:border sm:border-gray sm:bg-transparent  md:mt-8 md:ml-19 md:h-23 md:w-19.3 md:border md:border-gray     rounded xl:mt-8">
            <img
              src={fisher}
              className="relative  ss:mt-3 ss:ml-5 ss:h-16 ss:w-18   sm:mt-3 sm:ml-5 sm:h-16 sm:w-18"
            />
            <h3 className="relative  ss:mt-5 ss:text-center ss:text-dark ss:text-sm      sm:mt-5 sm:text-center sm:text-dark sm:text-sm font-bold">
              Amanda Fisher
            </h3>
            <h3 className="relative  ss:mt-1 ss:text-center ss:text-dark ss:text-sm         sm:mt-1 sm:text-center sm:text-dark sm:text-sm font-medium">
              Founder
            </h3>
            <p className="relative  ss:ml-3 ss:mt-1 ss:text-center ss:text-gray ss:text-sm ss:max-w-19.1   sm:ml-3 sm:mt-1 sm:text-center sm:text-gray sm:text-sm sm:max-w-19.1 font-medium">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="absolute  ss:mt-3 ss:ml-10    sm:mt-3 sm:ml-10.5 lg:mt-19.6 flex gap-2 xl:ml-8 xl:mt-1">
              <img
                src={facebook}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={message}
                alt="for facebook link"
                className="relative ss:h-4.5    sm:h-4.5 xl:h-5.1"
              />
              <img
                src={instagram}
                alt="for facebook link"
                className="relative ss:h-4.5  sm:h-4.5 xl:h-5.1"
              />
              <img
                src={youtube}
                alt="for facebook link"
                className="relative ss:h-4.5   sm:h-4.5 xl:h-5.1"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative ss:ml-3 ss:mr-3 ss:mt-9 ss:h-19.5 ss:w-20.4  ss:rounded-2xl     sm:ml-5 sm:mt-9 sm:h-19.5 sm:w-20.4 bg-green sm:rounded-2xl   md:ml-5 md:mr-5  md:mt-9 md:h-19.5 md:w-45  md:rounded-2xl         xl:ml-9 xl:mt-9 xl:h-19.5 xl:w-80 xl:rounded-3xl">
          <img
            src={faq_styled}
            className="absolute sm:mt-0 ss:ml-19.17 ss:h-19.5 ss:rounded-tr-2xl   sm:mt-0 sm:ml-19.17 sm:h-19.5 sm:rounded-tr-2xl   sm:mt-0 md:ml-41 md:h-19.5 md:rounded-tr-3xl      xl:ml-66.2 xl:w-17 xl:rounded-tr-3xl xl:rounded-br-3xl"
          />
          <h3 className="relative ss:pt-8 ss:ml-4 ss:max-w-16  ss:text-xl        sm:pt-8 sm:ml-4 sm:max-w-16 text-left text-white sm:text-xl  md:pt-8 md:ml-4 md:max-w-30  md:text-xl    font-bold font-montserrat xl:text-5xl xl:pt-8 xl:ml-10 xl:max-w-55">
            Get PickBetta for just $10 a week
          </h3>
          <p className="relative ss:pt-3 ss:ml-4 ss:max-w-19.3   ss:text-base       sm:pt-3 sm:ml-4 sm:max-w-19.3   md:pt-3 md:ml-4 md:max-w-30 text-left text-white sm:text-base font-medium font-montserrat xl:pt-3 xl:ml-10 xl:max-w-50 xl:text-xl">
            Your first week is always free. Start your trial now and see the
            difference!
          </p>
          <button className="relative ss:p-2 ss:w-13 ss:ml-4 ss:mt-4     sm:p-2 sm:w-13 sm:ml-4 sm:mt-4  md:p-2 md:w-13 md:ml-4 md:mt-4  float-left font-bold text-green bg-white rounded font-montserrat xl:p-2 xl:w-17 xl:ml-10 xl:mt-4">
            Start Now!
          </button>
        </div>
      </div>
    </div>
  );
}