//import { Link } from "react-router-dom";
import home_image from './../assets/images/home_image.png'
import home_image2 from './../assets/images/home_image2.png'
import home_image3 from './../assets/images/home_image3.png'
import home_image4 from './../assets/images/home_image4.png'
import presentation from './../assets/icons/presentation.svg'
import writing from './../assets/icons/writing.svg'
import analysis from './../assets/icons/analysis.svg'
import faq_styled from './../assets/images/faq_styled.png'
import star from './../assets/icons/star_orange.png'
import leslie from './../assets/images/leslie.png'

export const Landingpage = () => {

  return (
    <div className="home">
      <div>
        <h3 className="relative mt-11 max-w-full text-2xl
          ss:px-2 ss:mt-11 ss:max-w-full ss:text-center ss:text-2xl 
          sm:mt-11 sm:text-center sm:text-2xl text-dark font-extrabold sm:max-w-full 
          font-montserrat          
          md:mt-15 md:max-w-full md:text-center md:text-3xl
          x:mt-15 x:max-w-full x:text-center x:text-4xl      
          x1:ml-10 x1:mt-17 x1:text-4xl x1:max-w-35 x1:text-left x1:leading-18              
          xl:ml-10 x:mt-17 xl:text-5xl xl:max-w-43 xl:text-left xl:leading-20
          xx:ml-10 xx:text-6xl xx:max-w-50 xx:text-left xx:leading-20
          xxl:ml-10 xxl:text-7xl xxl:max-w-70 xxl:text-left xxl:leading-20">
          Your ultimate source for{" "}
          <span className="ss:italic ss:text-green-deep ss:underline sm:italic sm:text-green-deep sm:underline xl:font-medium">
            {" "}
            fact-checked
          </span>{" "}
          sports{" "}
          <span className="ss:italic ss:text-green-deep ss:underline sm:italic sm:text-green-deep sm:underline xl:font-medium">
            betting data
          </span>
        </h3>
      </div>

      <div>
        <p className="relative underline font-medium
          ss:px-2 ss:mt-3 ss:text-sm ss:text-gray ss:text-center ss:max-w-full
          sm:mt-3 sm:text-sm sm:text-gray sm:text-center sm:max-w-full
          md:mt-5 md:text-sm md:text-gray md:text-center md:max-w-full
          font-montserrat 
          x:mt-5 x:text-base x:text-gray x:text-center x:max-w-full     
          x1:text-base x1:max-w-35 x1:text-left x1:ml-10 x1:text-green-deep     
          xl:text-base xl:max-w-35 xl:text-left xl:ml-10 xl:text-green-deep
          xx:text-xl xx:max-w-37 xx:text-left xx:ml-10 xx:text-green-deep
          xxl:text-xl xxl:max-w-40 xxl:text-left xxl:ml-10 xxl:text-green-deep">
          We don’t advise you to pick, we advise you to pickbetta!
        </p>
      </div>

      <div>
        <img
          src={home_image}
          alt=""
          className="relative
            ss:mt-4 ss:mx-auto ss:w-19 
            sm:mt-4 sm:mx-auto sm:w-19 
            md:mt-5 md:mx-auto md:w-27 
            x:mt-5 x:mx-auto x:w-27      
            x1:ml-50 x1:-mt-16.5 x1:w-28 x1:h-29       
            xl:ml-55 xl:-mt-18 xl:w-31 xl:h-35
            xx:ml-60 xx:-mt-19.3 xx:w-32 xx:h-37
            xx1:ml-66 xx1:-mt-19.4 xx1:w-33 xx1:h-37
            xx2:ml-75 xx2:-mt-19.3 xx2:w-34 xx2:h-37
            xxl:ml-90  xxl:-mt-19 xxl:w-32 xxl:h-33 xxl:pr-10
            xx3:ml-93 xx3:-mt-19.1 xx3:w-33 xx3:h-34"
        />
        {/* x:ml-48 x:-mt-15.5 x:w-28 x:h-29 */}
        <p className="relative 
            ss:px-2 ss:text-center ss:text-base ss:text-gray ss:mt-4 ss:mx-auto
            sm:text-center sm:text-base sm:text-gray sm:mt-4 sm:mx-auto sm:max-w-35 sm:px-2
            md:text-center md:text-base md:text-gray md:mt-7 md:mx-auto md:max-w-50
            font-montserrat
            x:text-center xtext-base x:text-gray x:mt-7 x:mx-auto x:max-w-50         
            x1:text-left x1:text-base x1:ml-10 x1:-mt-19 x1:max-w-43 x1:text-dark-gray x1:leading-20   
            xl:text-left xl:text-base xl:ml-10 xl:-mt-19.9 xl:max-w-43 xl:text-dark-gray xl:leading-20
            xx:text-left xx:text-xl xx:ml-10 xx:-mt-19.6 xx:max-w-53 xx:text-dark-gray xx:leading-20
            xx1:-mt-19.5 xx1:text-xl xx1:max-w-50 xx1:leading-20
            xx2:-mt-19.5 xx2:text-xl xx2:max-w-50 xx2:leading-20
            xxl:text-left xxl:text-2xl xxl:ml-10 xxl:-mt-19.2 xxl:max-w-60 xxl:text-dark-gray xxl:leading-20
            xx3:-mt-19.2 xx3:text-2xl xx3:max-w-60 xx3:leading-20
        ">
            Experience the power of verified data- Try pickbetta free for one
            week. We’re so confident in the value that we deliver that we’re
            giving you the chance to fact-check our data yourself. See the
            difference that accurate, reliable insights can make in your betting
            strategy.
        </p>
        {/* x:text-left x:text-base x:ml-10 x:-mt-19.2 x:max-w-43 x:text-dark-gray x:leading-20 */}
        <p className="relative 
            ss:px-2 ss:mt-3 ss:mx-auto ss:text-dark ss:text-base ss:font-bold
            sm:mt-3 sm:mx-auto sm:text-dark sm:text-base sm:font-bold sm:max-w-20
            md:mt-6 md:mx-auto md:text-dark md:text-base md:font-bold md:max-w-25
            font-montserrat
            x:mt-6 x:mx-auto x:text-dark x:text-base x:font-boldx:max-w-25   
            x1:text-left x1:text-base x1:mt-2 x1:ml-10 x1:max-w-43         
            xl:text-left xl:text-base xl:ml-10 xl:max-w-43
            xx:text-left xx:text-xl xx:ml-10 xx:max-w-51
            xxl:text-left xxl:text-xl xxl:ml-10 xxl:max-w-60
        ">
            Try PickBetta free for a week—just $10 a week after. Start winning
            smarter today!
        </p>
        {/* x:text-left x:text-base x:mt-2 x:ml-10 x:max-w-43 */}
        <button className="relative 
          ss:mt-4 ss:h-7 ss:w-19 ss:-ml-0.4 ss:bg-green-deep ss:rounded ss:text-white    
          sm:mt-4 sm:h-7 sm:w-20 sm:-ml-0.4 sm:bg-green-deep sm:rounded sm:text-white    
          md:mt-6 md:h-7 md:w-20 md:-ml-0.4 md:bg-green-deep md:rounded md:text-white      
          font-montserrat  
          x:mt-6 x:h-7 x:w-20 x:-ml-0.4 x:bg-green-deep x:rounded x:text-white  
          x1:float-left x1:ml-10.4 x1:w-15 x1:mt-5             
          xl:float-left xl:ml-10.4 xl:w-15 xl:mt-5
          xx:float-left xx:ml-10.4 xx:w-15 xx:mt-5
          xxl:float-left xxl:ml-10.4 xxl:w-15 xxl:mt-5">
          Start now!
        </button>
      </div>

      <div>
        <h3
          className="relative 
            ss:px-2 ss:mt-8 ss:mx-auto ss:text-2xl ss:font-extrabold ss:text-left
            sm:mt-8 sm:mx-auto sm:text-2xl ss:font-extrabold sm:text-left sm:max-w-35 sm:px-2
            md:px-2 md:mt-8 md:mx-auto md:text-3xl ss:font-extrabold md:text-left md:max-w-50
            font-montserrat 
            x:text-left x:text-dark-gray-900 x:text-4xl x:mt-20 x:ml-40            
            xl:text-left xl:text-dark-gray-900 xl:text-5xl xl:mt-25 xl:ml-45  

            x1:text-left x1:text-dark-gray-900 x1:text-4xl x1:mt-20 x1:ml-40
            xx: text-left xx:text-dark-gray-900 xx:text-5xl xx:mt-20 xx:ml-45
            xx1: text-left xx1:text-dark-gray-900 xx1:text-6xl xx1:mt-25 xx1:ml-49
            xx2: text-left xx2:text-dark-gray-900 xx2:text-6xl xx2:mt-25 xx2:ml-53
            xxl: text-left xxl:text-dark-gray-900 xxl:text-7xl xxl:mt-25 xxl:ml-57
            xx3: text-left xx3:text-dark-gray-900 xx3:text-7xl xx3:mt-25 xx3:ml-60               
          "
        >
          Who We Are
        </h3>

        <p
          className="relative 
            ss:px-2 ss:mt-4 ss:mx-auto ss:text-base ss:text-gray ss:text-left
            sm:mt-4 sm:mx-auto sm:text-base sm:text-gray sm:text-left sm:max-w-35 sm:px-2
            md:mt-4 md:mx-auto md:text-base md:text-gray md:text-left md:max-w-50
            font-montserrat 
            x:text-left x:text-base x:mt-2 x:ml-40 x:max-w-40            
            xl:text-left xl:text-base xl:mt-2 xl:ml-45 xl:max-w-50     
            
            x1:text-left x1:text-base x1:mt-2 x1:ml-40 x1:max-w-40
            xx:text-left xx:text-xl xx:mt-2 xx:ml-45 xx:max-w-45     
            xx1:text-left xx1:text-xl xx1:mt-2 xx1:ml-49 xx1:max-w-48    
            xx2:text-left xx2:text-xl xx2:mt-2 xx2:ml-53 xx2:max-w-48     
            xxl:text-left xxl:text-2xl xxl:mt-2 xxl:ml-57 xxl:max-w-55     
            xx3:text-left xx3:text-2xl xx3:mt-1 xx3:ml-60 xx3:max-w-65                       
          "
        >
          We are sports bettors, just like you. After decades of placing bets,
          scrolling countless sites for reliable information, and dealing with the
          frustrations of biased picks and unreliable data, we knew there had to be
          a better way. That’s why we created PickBetta—a platform designed by
          bettors, for bettors. We understand what you need because we’re in the
          game with you. We place multiple bets daily during year round.
        </p>

        <img
          src={home_image2}
          alt=""
          className="relative 
            ss:mt-4 ss:mx-auto ss:w-19.5 
            sm:mt-4 sm:mx-auto sm:w-20.5
            md:mt-4 md:mx-auto md:w-30
            x:ml-10 x:-mt-22 x:w-30
            xl:ml-10.5 xl:-mt-20 xl:w-35  
            
            x1:ml-10 x1:-mt-19.23 x1:w-30
            xx:ml-10 xx:-mt-23 xx:w-36
            xx1:ml-10 xx1:-mt-24 xx1:w-38
            xx2:ml-10 xx2:-mt-24 xx2:w-43
            xxl:ml-10 xxl:-mt-28 xxl:w-45
            xx3:ml-10 xx3:-mt-25 xx3:w-48                  
          "
        />
      </div>

      <div className="flex flex-col x1:flex-row x1:items-center x1:justify-center x1:space-x-8">
        <div className="flex-1 x1:text-center">
          <h3
            className="relative 
              ss:px-2 ss:mt-8 ss:mx-auto ss:text-2xl ss:font-extrabold ss:text-left
              sm:mt-8 sm:mx-auto sm:text-2xl sm:font-extrabold sm:text-left sm:max-w-35 sm:px-2
              md:mt-8 md:mx-auto md:text-3xl md:font-extrabold md:text-left md:max-w-50
              font-montserrat
              x:mt-12 x:mx-auto x:text-3xl x:font-extrabold x:text-center x:max-w-60
              xl:text-left xl:mt-10 xl:text-5xl xl:ml-10
              x1:text-left x1:text-4xl x1:mt-10 x1:ml-10
              xx:text-left xx:text-5xl xx:mt-10 xx:ml-10
              xx1:text-left xx1:text-6xl xx1:mt-10 xx1:ml-10
              xx2:text-left xx2:text-6xl xx2:mt-10 xx2:ml-10
              xxl:text-left xxl:text-7xl xxl:mt-10 xxl:ml-10
              xx3:text-left xx3:text-7xl xx3:mt-10 xx3:ml-10
            "
          >
            Why Create PickBetta
          </h3>

          <p
            className="relative 
              ss:px-2 ss:mt-4 ss:mx-auto ss:text-base ss:text-gray ss:text-left
              sm:mt-4 sm:mx-auto sm:text-base sm:text-gray sm:text-left sm:max-w-35 sm:px-2
              md:mt-4 md:mx-auto md:text-base md:text-gray md:text-left md:max-w-50
              x:mt-4 x:mx-auto x:text-base x:text-gray x:text-left x:max-w-60 x:px-2
              xl:text-left xl:text-base xl:ml-10 xl:max-w-55 font-montserrat
              x1:text-left x1:text-base x1:mt-2 x1:ml-10 x1:max-w-40
              xx:text-left xx:text-xl xx:mt-2 xx:ml-10 xx:max-w-45
              xx1:text-left xx1:text-xl xx1:mt-2 xx1:ml-10 xx1:max-w-48
              xx2:text-left xx2:text-xl xx2:mt-2 xx2:ml-10 xx2:max-w-48
              xxl:text-left xxl:text-2xl xxl:mt-2 xxl:ml-10 xxl:max-w-55
              xx3:text-left xx3:text-2xl xx3:mt-1 xx3:ml-10 xx3:max-w-65
            "
          >
            The betting community deserves better than the usual fluff and
            unreliable picks that saturate the market. We built PickBetta to
            fill a crucial gap—a state-of-the-art digital sports data warehouse
            that delivers only the most accurate, fact-checked information. Our
            goal is to empower you with the data you need to make informed,
            confident betting decisions. No fluff, no gimmicks—just pure,
            valuable insights.
          </p>
        </div>

        <div className="flex-shrink-0 xl:ml-8 xl:mr-8 xl:flex xl:items-center xl:justify-center">
          <img
            src={home_image3}
            alt="PickBetta"
            className="relative 
              ss:mt-4 ss:mx-auto ss:w-19.5
              sm:mt-4 sm:mx-auto sm:w-20.5
              md:mt-4 md:mx-auto md:w-30
              x:mt-4 x:mx-auto x:w-30
              xl:w-36 xl:mt-15 xl:ml-0 xl:mr-8
              x1:w-30 x1:mt-15 x1:ml-0
              xx:w-36 xx:mt-15 xx:ml-0
              xx1:w-38 xx1:mt-15 xx1:ml-0
              xx2:w-43 xx2:mt-15 xx2:ml-0
              xxl:w-45 xxl:mt-15 xxl:ml-0
              xx3:w-48 xx3:mt-15 xx3:ml-0
            "
          />
        </div>
      </div>

      <div>
        <h3 className="relative 
          ss:px-2 ss:mt-8 ss:mx-auto ss:text-2xl ss:font-extrabold ss:text-left
          sm:mt-8 sm:mx-auto sm:text-2xl ss:font-extrabold sm:text-left sm:max-w-35 sm:px-2
          md:mt-8 md:mx-auto md:text-3xl ss:font-extrabold md:text-left md:max-w-50
          font-montserrat
          x:text-center x:text-dark-gray-900 x:text-3xl x:mt-15
          xl:text-center xl:text-dark-gray-900 xl:text-4xl xl:mt-15
          
          x1:text-center x1:text-dark-gray-900 x1:text-3xl x1:mt-15   
          xx:text-center xx:text-dark-gray-900 xx:text-5xl xx:mt-15
          xx1:text-center xx1:text-dark-gray-900 xx1:text-6xl xx1:mt-15
          xx2:text-center xx2:text-dark-gray-900 xx2:text-6xl xx2:mt-15
          xxl:text-center xxl:text-dark-gray-900 xxl:text-7xl xxl:mt-15
          xx3:text-center xx3:text-dark-gray-900 xx3:text-7xl xx3:mt-15

          "
        >
          What Do We Offer
        </h3>
        <p className="relative 
          ss:px-2 ss:mt-4 ss:mx-auto ss:text-base ss:text-gray ss:text-left
          sm:mt-4 sm:mx-auto sm:text-base sm:text-gray sm:text-left sm:max-w-35 sm:px-2
          md:mt-4 md:mx-auto md:text-base md:text-gray md:text-left md:max-w-50
          font-montserrat 
          x:text-center x:text-base x:text-base x:max-w-72 x:ml-8    
          xl:text-center xl:text-base xl:text-base xl:max-w-90 xl:ml-8

          x1:text-center x1:text-base x1:max-w-72 x1:ml-8  
          xx:text-center xx:text-base xx:max-w-100 xx:ml-8  
          xx1:text-center xx1:text-xl xx1:max-w-120 xx1:ml-8  
          xx2:text-center xx2:text-xl xx2:max-w-140 xx2:ml-8  
          xxl:text-center xxl:text-2xl xxl:max-w-160 xxl:ml-8  
          xx3:text-center xx3:text-2xl xx3:max-w-180 xx3:ml-8  
          "
        >
          PickBetta is your go-to source for trustworthy sports betting data.
          With nearly a century of sports data at your fingertips, our
          platform provides:
        </p>
      </div>

      <div className="flex flex-wrap mx-2 justify-center gap-8 x:justify-between x:gap-0 x1:flex-nowrap x1:gap-10 xl:gap-12">
        <div className="relative 
          ss:mt-6 ss:bg-gray-lighter ss:mx-auto ss:h-18 ss:w-19.4 ss:rounded-xl
          sm:mt-6 sm:bg-gray-lighter sm:h-18 sm:w-20.5 sm:rounded-xl
          md:mt-6 md:bg-gray-lighter md:h-20 md:w-25 md:rounded-xl  
          x:bg-white x:h-25 x:w-1/4
          xl:h-28 xl:w-1/4 xl:bg-white
        ">
          <img
            src={presentation}
            alt=""
            className="relative 
              ss:pt-6 ss:ml-4 
              sm:pt-6 sm:ml-4   
              md:pt-6 md:ml-13 md:w-10  
              x:w-8 x:ml-6 xl:w-8 xl:ml-10"
          />
          <h3 className="relative ss:ml-5 ss:mt-4 sm:ml-5 md:ml-8 x:ml-5 xl:ml-10 
            text-xl font-extrabold text-left font-montserrat">
            Fact-Checked Insights
          </h3>
          <p className="relative ss:mt-3 ss:ml-5 sm:ml-5 md:ml-8 x:ml-5 xl:ml-10 
            text-base text-gray text-left font-montserrat">
            Every stat, trend, and piece of data is rigorously verified to ensure accuracy.
          </p>
        </div>

        <div className="relative 
          ss:mt-6 ss:bg-gray-lighter ss:mx-auto ss:h-19.25 ss:w-19.4 ss:rounded-xl
          sm:mt-6 sm:bg-gray-lighter sm:h-18 sm:w-20.5 sm:rounded-xl
          md:mt-6 md:bg-gray-lighter md:h-20 md:w-25 md:rounded-xl
          x:bg-white x:h-25 x:w-1/4
          xl:h-28 xl:w-1/4 xl:bg-white
        ">
          <img
            src={writing}
            alt=""
            className="relative ss:pt-6 ss:ml-4 sm:pt-6 sm:ml-4 md:pt-6 md:ml-13 
              x:w-8 x:ml-8 xl:w-8 xl:ml-10"
          />
          <h3 className="relative ss:ml-5 ss:mt-4 sm:ml-5 md:ml-8 x:ml-5 xl:ml-10 
            text-xl font-extrabold text-left font-montserrat">
            Customizable Tools
          </h3>
          <p className="relative ss:mt-3 ss:ml-5 sm:ml-5 md:ml-8 x:ml-5 xl:ml-10 
            text-base text-gray text-left font-montserrat">
            Tailor your experience with personalized dashboards, real-time alerts, and interactive features.
          </p>
        </div>

        <div className="relative 
          ss:mt-6 ss:bg-gray-lighter ss:mx-auto ss:h-20 ss:w-19.4 ss:rounded-xl
          sm:mt-6 sm:bg-gray-lighter sm:h-19.2 sm:w-20.5 sm:rounded-xl
          md:mt-6 md:bg-gray-lighter md:h-20 md:w-25 md:rounded-xl  
          x:bg-white x:h-25 x:w-1/4
          xl:h-28 xl:w-1/4 xl:bg-white
        ">
          <img
            src={analysis}
            alt=""
            className="relative ss:pt-6 ss:ml-4 sm:pt-6 sm:ml-4 md:pt-6 md:ml-13 
              x:w-8 x:ml-8 xl:w-8 xl:ml-10"
          />
          <h3 className="relative ss:ml-5 ss:mt-4 sm:ml-5 md:ml-8 x:ml-5 xl:ml-10 
            text-xl font-extrabold text-left font-montserrat">
            Comprehensive Coverage
          </h3>
          <p className="relative ss:mt-3 ss:ml-5 sm:ml-5 md:ml-8 x:ml-5 xl:ml-10 
            text-base text-gray text-left font-montserrat">
            Whether you’re into NFL, NCAAF, NCAAB, or NBA basketball, we’ve got you covered with detailed analysis and timely data.
          </p>
        </div>
      </div>     

      <div>
        <h3
          className="relative 
            ss:px-2 ss:mt-8 ss:mx-auto ss:text-2xl ss:font-extrabold ss:text-left
            sm:mt-8 sm:mx-auto sm:text-2xl ss:font-extrabold sm:text-left sm:max-w-35 sm:px-2
            md:mt-8 md:mx-auto md:text-3xl ss:font-extrabold md:text-left md:max-w-50     
            font-montserrat  
            x:text-left x:text-dark-gray-900 x:text-4xl x:mt-10 x:ml-40            
            xl:text-left xl:text-dark-gray-900 xl:text-5xl xl:mt-10 xl:ml-45  

            x1:text-left x1:text-dark-gray-900 x1:text-4xl x1:mt-10 x1:ml-40 x1:max-w-40
            xx:text-left xx:text-dark-gray-900 xx:text-5xl xx:mt-10 xx:ml-45 xx:max-w-45
            xx1:text-left xx1:text-dark-gray-900 xx1:text-6xl xx1:mt-10 xx1:ml-49 xx1:max-w-48
            xx2:text-left xx2:text-dark-gray-900 xx2:text-6xl xx2:mt-10 xx2:ml-53 xx2:max-w-48
            xxl:text-left xxl:text-dark-gray-900 xxl:text-7xl xxl:mt-10 xxl:ml-57 xx3l:max-w-55
            xx3:text-left xx3:text-dark-gray-900 xx3:text-7xl xx3:mt-10 xx3:ml-60 xx3:max-w-80
          "
        >
          How We Deliver Value
        </h3>
        <p className="relative 
            ss:px-2 ss:mt-4 ss:mx-auto ss:text-base ss:text-gray ss:text-left
            sm:mt-4 sm:mx-auto sm:text-base sm:text-gray sm:text-left sm:max-w-35 sm:px-2
            md:mt-4 md:mx-auto md:text-base md:text-gray md:text-left md:max-w-50
            font-montserrat 
            x:text-left x:text-base x:mt-2 x:ml-40 x:max-w-35            
            xl:text-left x:text-base xl:mt-2 xl:ml-45 xl:max-w-50     
            
            x1:text-left x1:text-base x1:mt-2 x1:ml-40 x1:max-w-40
            xx:text-left xx:text-xl xx:mt-2 xx:ml-45 xx:max-w-45     
            xx1:text-left xx1:text-xl xx1:mt-2 xx1:ml-49 xx1:max-w-48    
            xx2:text-left xx2:text-xl xx2:mt-2 xx2:ml-53 xx2:max-w-48     
            xxl:text-left xxl:text-2xl xxl:mt-2 xxl:ml-57 xxl:max-w-55     
            xx3:text-left xx3:text-2xl xx3:mt-1 xx3:ml-60 xx3:max-w-80 
          ">
          We deliver unparalleled data through a cutting-edge online mobile
          portal designed for ease of use and accessibility. Our platform is
          built to reach the entire betting community through the power of
          word-of-mouth. We know that once you experience the value PickBetta
          offers, you’ll spread the word—because, like us, you recognize the
          difference that accurate, unbiased data makes.
        </p>
        <p
          className="relative 
            ss:px-2 ss:mt-4 ss:mx-auto ss:text-base ss:text-gray ss:text-left
            sm:mt-4 sm:mx-auto sm:text-base sm:text-gray sm:text-left sm:max-w-35 sm:px-2
            md:mt-4 md:mx-auto md:text-base md:text-gray md:text-left md:max-w-50
            font-montserrat 
            x:text-left x:mt-2 x:ml-40 x:max-w-35            
            xl:text-left xl:mt-2 xl:ml-45 xl:max-w-50     
            
            x1:text-left x1:text-base x1:mt-2 x1:ml-40 x1:max-w-40
            xx:text-left xx:text-xl xx:mt-2 xx:ml-45 xx:max-w-45     
            xx1:text-left xx1:text-xl xx1:mt-2 xx1:ml-49 xx1:max-w-48   
            xx2:text-left xx2:text-xl xx2:mt-2 xx2:ml-53 xx2:max-w-48     
            xxl:text-left xxl:text-2xl xxl:mt-2 xxl:ml-57 xxl:max-w-55     
            xx3:text-left xx3:text-2xl xx3:mt-1 xx3:ml-60 xx3:max-w-80 
          "
          >
          <span className="font-bold">Join us at PickBetta—</span>
          where we don’t advise you to pick, we advise you to pick better.
          This is more than just a product; it’s a movement for a smarter,
          more informed betting community.
        </p>
        <img
          src={home_image4}
          alt=""
          className="relative 
            ss:mt-4 ss:mx-auto ss:w-19.5 
            sm:mt-4 sm:mx-auto sm:w-20.5
            md:mt-4 md:mx-auto md:w-30  


            x:ml-10 x:-mt-23 x:w-30
            xl:ml-10.5 xl:-mt-22 xl:w-35  
            
            x1:ml-10 x1:-mt-20 x1:w-30
            xx:ml-10 xx:-mt-25 xx:w-37
            xx1:ml-10 xx1:-mt-26 xx1:w-38
            xx2:ml-10 xx2:-mt-27 xx2:w-43
            xxl:ml-10 xxl:-mt-33 xxl:w-45
            xx3:ml-10 xx3:-mt-32 xx3:w-48    
          "
        />
      </div>    

      <div>
        <h3 className="relative 
          ss:px-2 ss:mt-8 ss:text-2xl ss:font-extrabold ss:text-left
          sm:mt-8 sm:text-2xl ss:font-extrabold sm:text-left sm:max-w-35 sm:px-2
          md:mt-8 md:text-3xl ss:font-extrabold md:text-left md:max-w-50      
          x:text-center x:mx-auto x:text-dark-gray-900 x:text-3xl x:mt-15
          xl:text-center xl:mx-auto xl:text-dark-gray-900 xl:text-4xl xl:mt-15
          x1:text-center x1:mx-auto x1:text-dark-gray-900 x1:text-4xl x1:mt-15
          xx:text-center xx:mx-auto xx:text-dark-gray-900 xx:text-5xl xx:mt-15
          xx1:text-center xx1:mx-auto xx1:text-dark-gray-900 xx1:text-5xl xx1:mt-15
          xx2:text-center xx2:mx-auto xx2:text-dark-gray-900 xx2:text-6xl xx2:mt-15
          xxl:text-center xxl:mx-auto xxl:text-dark-gray-900 xxl:text-6xl xxl:mt-15
          xx3:text-center xx3:mx-auto xx3:text-dark-gray-900 xx5:text-7xl xx3:mt-15
        "
        >
          The Clients' Testimonials
        </h3>
<div className="flex flex-nowrap ss:overflow-scroll ss:scroll-smooth sm:overflow-scroll sm:scroll-smooth xl:overflow-hidden xl:gap-3 xl:flex xl:justify-center xl:mx-auto">
  <div className="relative ss:ml-2 ss:mt-5 ss:h-17 ss:w-20.5 ss:min-w-20.5 ss:bg-white sm:ml-2 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl xl:w-20.5 xl:ml-4 xl:min-w-24">
    <div className="flex gap-1 xl:ml-4">
      <img src={star} alt="" className="relative ss:pt-5 ss:ml-4 sm:pt-5 sm:ml-4" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
    </div>
    <p className="relative ss:ml-4 ss:mt-5 ss:text-left ss:text-gray ss:text-sm ss:max-w-19.6 sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium xl:text-base xl:ml-6">
      “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”
    </p>
    <div>
      <img src={leslie} alt="" className="relative ss:pt-0.5 ss:ml-0 sm:pt-0.5 sm:ml-0 xl:ml-3" />
      <h3 className="relative ss:-mt-7.5 ss:ml-8.5 ss:text-left ss:text-dark ss:text-sm sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:text-dark sm:text-sm font-bold xl:text-base xl:ml-9.5">
        Leslie Alexander
      </h3>
      <h3 className="relative ss:mt-0.5 ss:ml-8.5 ss:text-left ss:text-gray ss:text-xs sm:mt-0.5 sm:ml-8.5 sm:text-left sm:text-gray sm:text-xs font-medium xl:text-sm xl:ml-9.5">
        Freelance React Developer
      </h3>
    </div>
  </div>

  <div className="relative ss:ml-5 ss:mt-5 ss:h-17 ss:w-20.5 ss:min-w-20.5 ss:bg-white sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl xl:w-20.5 xl:min-w-24">
    <div className="flex gap-1 xl:ml-4">
      <img src={star} alt="" className="relative ss:pt-5 ss:ml-4 sm:pt-5 sm:ml-4" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
    </div>
    <p className="relative ss:ml-4 ss:mt-5 ss:text-left ss:text-gray ss:text-sm ss:max-w-19.6 sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium xl:text-base xl:ml-6">
      “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”
    </p>
    <div>
      <img src={leslie} alt="" className="relative ss:pt-0.5 ss:ml-0 sm:pt-0.5 sm:ml-0 xl:ml-3" />
      <h3 className="relative ss:-mt-7.5 ss:ml-8.5 ss:text-left ss:text-dark ss:text-sm sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:text-dark sm:text-sm font-bold xl:text-base xl:ml-9.5">
        Leslie Alexander
      </h3>
      <h3 className="relative ss:mt-0.5 ss:ml-8.5 ss:text-left ss:text-gray ss:text-xs sm:mt-0.5 sm:ml-8.5 sm:text-left sm:text-gray sm:text-xs font-medium xl:text-sm xl:ml-9.5">
        Freelance React Developer
      </h3>
    </div>
  </div>

  <div className="relative ss:ml-5 ss:mt-5 ss:h-17 ss:w-20.5 ss:min-w-20.5 ss:bg-white sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl xl:w-20.5 xl:min-w-24">
    <div className="flex gap-1 xl:ml-4">
      <img src={star} alt="" className="relative ss:pt-5 ss:ml-4 sm:pt-5 sm:ml-4" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
      <img src={star} alt="" className="relative ss:pt-5 sm:pt-5 sm:ml-0" />
    </div>
    <p className="relative ss:ml-4 ss:mt-5 ss:text-left ss:text-gray ss:text-sm ss:max-w-19.6 sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium xl:text-base xl:ml-6">
      “You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”
    </p>
    <div>
      <img src={leslie} alt="" className="relative ss:pt-0.5 ss:ml-0 sm:pt-0.5 sm:ml-0 xl:ml-3" />
      <h3 className="relative ss:-mt-7.5 ss:ml-8.5 ss:text-left ss:text-dark ss:text-sm sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:text-dark sm:text-sm font-bold xl:text-base xl:ml-9.5">
        Leslie Alexander
      </h3>
      <h3 className="relative ss:mt-0.5 ss:ml-8.5 ss:text-left ss:text-gray ss:text-xs sm:mt-0.5 sm:ml-8.5 sm:text-left sm:text-gray sm:text-xs font-medium xl:text-sm xl:ml-9.5">
        Freelance React Developer
      </h3>
    </div>
  </div>
</div>





      </div>

      <div className="relative flex justify-center items-center">
        <div className="relative 
          ss:mt-9 ss:h-19.5 ss:w-19.4 ss:rounded-2xl  
          sm:mt-7 sm:h-19.5 sm:w-20.4 bg-green sm:rounded-2xl    
          md:mt-9 md:h-19.5 md:w-45 md:rounded-3xl      
          x:mt-9 x:h-19.5 x:w-55 x:rounded-3xl         
          xl:mt-12 xl:h-19.5 xl:w-144 xl:rounded-3xl
        ">
          <img
            src={faq_styled}
            className="absolute  
              ss:mt-0 ss:ml-17 ss:h-19.5 ss:rounded-tr-2xl ss:rounded-br-2xl    
              sm:mt-0 sm:ml-19.17 sm:h-19.5 sm:rounded-tr-2xl sm:rounded-br-2xl   
              md:ml-39 md:w-11 md:rounded-tr-3xl md:rounded-br-3xl       
              x:ml-67.7 x:w-11 x:rounded-tr-3xl x:rounded-br-3xl    
              xl:ml-130 xl:w-17 xl:rounded-tr-3xl xl:rounded-br-3xl"
          />
          <h3 className="relative 
            ss:pt-8 ss:ml-4 ss:max-w-16 ss:text-left  ss:text-xl   
            sm:pt-8 sm:ml-4 sm:max-w-16 
            text-left text-white sm:text-xl font-bold font-montserrat 
            x:text-4xl x:pt-8 x:ml-10 x:max-w-55    
            xl:text-5xl xl:pt-8 xl:ml-10 xl:max-w-55
          ">
            Get PickBetta for just $10 a week
          </h3>
          <p className="relative 
            ss:pt-3 ss:ml-3 ss:max-w-19.1  ss:text-base    
            sm:pt-3 sm:ml-4 sm:max-w-19.3 
            text-left text-white sm:text-base font-medium font-montserrat              
            x:ml-10 x:max-w-50 x:text-xl   
            xl:ml-10 xl:max-w-50 xl:text-xl xl:pt-3 
          ">
            Your first week is always free. Start your trial now and see the
            difference!
          </p>
          <button className="relative 
            ss:p-2 ss:w-13 ss:ml-4 ss:mt-4   
            sm:p-2 sm:w-13 sm:ml-4 sm:mt-4 
            float-left font-bold text-green bg-white rounded font-montserrat 
            x:p-2 x:w-17 x:ml-10 x:mt-4     
            xl:p-2 xl:w-17 xl:ml-10 xl:mt-4
          ">
            Start Now!
          </button>
        </div>
      </div>
    </div>
  );
};