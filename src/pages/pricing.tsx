import check from './../assets/icons/check_green.png';
import faq_styled from './../assets/images/faq_styled.png';

export const Pricing = () => {
    return (
      <div className="pricing">
        <div className="relative bg-green-light w-screen sm:h-19.3 sm:mt-3 xl:h-23.3 xl:-mt-8 flex flex-col items-center justify-center">
          <h3 className="text-3xl text-dark font-extrabold mx-2 pt-11 
            sm:text-5xl sm:text-dark sm:font-extrabold sm:pt-11 sm:max-w-40 sm:text-center font-montserrat 
            xl:text-dark xl:text-7xl xl:mt-8 xl:pt-7 xl:font-g xl:max-w-50
            xl:text-dark xl:text-7xl xl:mt-8 xl:pt-7 xl:font-g xl:max-w-50
            xx1:text-dark-900 xx1:text-7xl xx1:mt-15 xx1:pt-7 xx1:max-w-50
            xx2:text-dark-900 xx2:text-8xl xx2:mt-15 xx:pt-7 xx2:max-w-50
            xxl:text-dark-900 xxl:text-8xl xxl:mt-15 xx:pt-7 xxl:max-w-50
            xx3:text-dark-900 xx3:text-8xl xx3:mt-15 xx3:pt-7 xx3:max-w-50               
            ">
            Pricing
          </h3>
          <p className="ss:text-sm ss:text-dark ss:pb-5 ss:mx-2
            sm:text-center sm:text-base text-dark sm:mt-4 sm:mx-10 font-montserrat xl:text-dark-light xl:mt-3">
            Choose the pricing plan that works best for you and start your membership now.
          </p>
        </div>        
        <div className="relative w-full overflow-hidden">
          <div className="flex ss:flex-col sm:flex-col md:flex-col x:flex-row xl:flex-row justify-center items-center lg:space-x-1">
            <div className="relative ss:min-w-20 sm:min-w-20 md:min-w-20 x:w-full xl:w-full mt-7 md:mt-10 bg-white shadow rounded-xl ss:mx-2 p-3">
              <h3 className="mt-3 text-3xl text-dark font-extrabold text-center font-montserrat">
                $10<span className="font-extralight">/</span>wk
              </h3>
              <h3 className="mt-5 text-xl text-dark font-extrabold text-center font-montserrat">
                Basic plan
              </h3>
              <h3 className="mt-2 text-base text-gray font-medium text-center font-montserrat">
                Billed weekly
              </h3>

              <div className="flex justify-center items-center mt-5">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-center font-montserrat">
                  Access to all basic features
                </p>
              </div>

              <div className="flex justify-center items-center mt-3">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-center font-montserrat">
                  Basic reporting and analytics
                </p>
              </div>

              <button className="mt-4 p-2 text-base text-green font-extrabold w-full border rounded-xl hover:bg-gray-lighter font-montserrat">
                Choose plan
              </button>
            </div>

            <div className="relative ss:min-w-20 sm:min-w-20 md:min-w-20 x:w-full xl:w-full mt-7 md:mt-10 bg-white shadow rounded-xl ss:mx-2 p-2">
              <h3 className="mt-3 text-3xl text-dark font-extrabold text-center font-montserrat">
                $30<span className="font-extralight">/</span>mth
              </h3>
              <h3 className="mt-5 text-xl text-dark font-extrabold text-center font-montserrat">
                Most Popular Plan
              </h3>
              <h3 className="mt-2 text-base text-gray font-medium text-center font-montserrat">
                Billed monthly
              </h3>

              <div className="flex justify-center items-center mt-5">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-left font-montserrat">
                  200+ integrations
                </p>
              </div>

              <div className="flex justify-center items-center mt-3">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-left font-montserrat">
                  Advanced reporting and analytics
                </p>
              </div>

              <button className="mt-4 p-2 text-base text-green font-extrabold w-full border rounded-xl hover:bg-gray-lighter font-montserrat">
                Choose plan
              </button>
            </div>

            <div className="relative ss:min-w-20 sm:min-w-20 md:min-w-20 x:w-full xl:w-full mt-7 xl:mt-10 bg-white shadow rounded-xl ss:mx-2 p-2">
              <h3 className="mt-3 text-3xl text-dark font-extrabold text-center font-montserrat">
                $300<span className="font-extralight">/</span>season
              </h3>
              <h3 className="mt-5 text-xl text-dark font-extrabold text-center font-montserrat">
                Premium Plan
              </h3>
              <h3 className="mt-2 text-base text-gray font-medium text-center font-montserrat">
                Billed seasonally
              </h3>

              <div className="flex justify-center items-center mt-5">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-left font-montserrat">
                  Advanced custom fields
                </p>
              </div>

              <div className="flex justify-center items-center mt-3">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-left font-montserrat">
                  Audit log and data history
                </p>
              </div>

              <div className="flex justify-center items-center mt-3">
                <img src={check} className="w-5 h-5 mr-2" />
                <p className="text-base text-gray font-medium text-left font-montserrat">
                  Unlimited individual users
                </p>
              </div>

              <button className="mt-4 p-2 text-base text-green font-extrabold w-full border rounded-xl hover:bg-gray-lighter font-montserrat">
                Choose plan
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative ss:mt-9 ss:h-19.5 ss:w-19.25 ss:rounded-2xl 
              sm:mt-9 sm:h-19.5 sm:w-20.4 bg-green sm:rounded-2xl x:mt-9 x:h-19.5 x:w-55 x:rounded-3xl xl:mt-9 xl:h-19.5 xl:w-144 xl:rounded-3xl">
              <img
                src={faq_styled}
                className="absolute ss:mt-0 ss:ml-16 ss:h-19.5 ss:rounded-tr-2xl ss:rounded-br-2xl sm:mt-0 sm:ml-19.17 sm:h-19.5 sm:rounded-tr-2xl sm:rounded-br-2xl x:ml-73.6 x:rounded-tr-3xl x:rounded-br-3xl xl:ml-130 xl:w-17 xl:rounded-tr-3xl xl:rounded-br-3xl xl:visible"
              />
              <h3 className="relative ss:pt-9 ss:ml-4 ss:max-w-16 ss:text-sm sm:pt-8 sm:ml-4 sm:max-w-16 text-left text-white sm:text-xl font-bold font-montserrat x:ml-10 x:pt-7 x:text-2xl x:max-w-30 xl:text-5xl xl:pt-8 xl:ml-10 xl:max-w-55">
                Get PickBetta for just $10 a week
              </h3>
              <p className="relative ss:pt-3 ss:ml-4 ss:max-w-19.3 ss:text-sm sm:pt-3 sm:ml-4 sm:max-w-19.3 text-left text-white sm:text-base font-medium font-montserrat x:ml-10 x:mt-4 x:max-w-30 xl:pt-3 xl:ml-10 xl:max-w-50 xl:text-xl">
                Your first week is always free. Start your trial now and see the
                difference!
              </p>
              <button className="relative ss:p-2 ss:w-13 ss:ml-4 ss:mt-4 sm:p-2 sm:w-13 sm:ml-4 sm:mt-4 float-left font-bold text-green bg-white rounded font-montserrat x:ml-10 x:mt-6 xl:p-2 xl:w-17 xl:ml-10 xl:mt-4">
                Start Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}