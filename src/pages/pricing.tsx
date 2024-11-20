import check from './../assets/icons/check_green.png';
import faq_styled from './../assets/images/faq_styled.png';

export const Pricing = () => {
    return (
      <div className="pricing">
        <div className="relative h-90 w-full overflow-hidden">
          <div>
            <h3 className="relative sm:text-4xl sm:text-dark sm:font-extrabold sm:mt-11 sm:ml-5 sm:max-w-20 sm:text-center font-montserrat xl:text-center xl:text-dark-gray-900 xl:text-5xl xl:mt-15 xl:ml-32 xl:font-g xl:max-w-28">
              Pricing
            </h3>
            <p
              className="relative mt-3 text-sm text-gray text-center ml-9 max-w-19 font-montserrat
            xl:text-center xl:max-w-72 xl:ml-13"
            >
              Choose the pricing plan that works best for you and start your
              membership now.
            </p>
          </div>

          <div className="flex flex-col ">
            <div className="relative sm:ml-5 sm:mt-5 sm:h-21 sm:w-20.5 bg-white shadow rounded-xl xl:ml-15 xl:mt-10">
              <h3 className="relative text-4xl text-dark font-extrabold pt-4 max-w-20 text-center font-montserrat">
                $10/wk
              </h3>
              <h3 className="relative text-xl text-dark font-extrabold pt-3 max-w-20 text-center font-montserrat">
                Basic Plan
              </h3>
              <h3 className="relative text-base text-gray font-medium pt-3 max-w-20 text-center font-montserrat">
                Billed weekly
              </h3>

              <div>
                <img src={check} className="relative mt-5.2 ml-5 " />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  Access to all basic features
                </p>
              </div>

              <div>
                <img src={check} className="relative mt-3 ml-5 " />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  Basic reporting and analytics
                </p>
              </div>

              <button className="relative mt-4 text-base text-green font-extrabold h-7 w-19.5 border rounded-xl hover:bg-gray-lighter font-montserrat">
                Choose plan
              </button>
            </div>

            <div className="relative sm:ml-5 sm:mt-4 sm:h-22.5 sm:w-20.5 bg-white shadow rounded-xl xl:ml-35 xl:-mt-21">
              <h3 className="relative text-4xl text-dark font-extrabold pt-4 max-w-20 text-center font-montserrat">
                $30/mth
              </h3>
              <h3 className="relative text-xl text-dark font-extrabold pt-3 max-w-20 text-center font-montserrat">
                Most Popular Plan
              </h3>
              <h3 className="relative text-base text-gray font-medium pt-3 max-w-20 text-center font-montserrat">
                Billed monthly
              </h3>

              <div>
                <img src={check} className="relative mt-5.2 ml-5" />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  200+ integrations
                </p>
              </div>

              <div>
                <img src={check} className="relative mt-3 ml-5 " />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  Advanced reporting and analytics
                </p>
              </div>

              <button className="relative mt-4 text-base text-green font-extrabold h-7 w-19.5 border rounded-xl hover:bg-gray-lighter font-montserrat">
                Choose plan
              </button>
            </div>

            <div className="relative sm:ml-5 sm:mt-4 sm:h-23.5 sm:w-20.5 bg-white shadow rounded-xl xl:ml-60 xl:-mt-23">
              <h3 className="relative text-4xl text-dark font-extrabold pt-4 max-w-20 text-center font-montserrat">
                $300/season
              </h3>
              <h3 className="relative text-xl text-dark font-extrabold pt-3 max-w-20 text-center font-montserrat">
                Premium Plan
              </h3>
              <h3 className="relative text-base text-gray font-medium pt-3 max-w-20 text-center font-montserrat">
                Billed seasonally
              </h3>

              <div>
                <img src={check} className="relative mt-5.2 ml-5 " />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  Advanced custom fields
                </p>
              </div>

              <div>
                <img src={check} className="relative mt-3 ml-5 " />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  Audit log and data history
                </p>
              </div>

              <div>
                <img src={check} className="relative mt-3 ml-5 " />
                <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left font-montserrat">
                  Unlimited individual users
                </p>
              </div>

              <button className="relative mt-4 text-base text-green font-extrabold h-7 w-19.5 border rounded-xl hover:bg-gray-lighter font-montserrat">
                Choose plan
              </button>
            </div>
          </div>

          <div> 
            <div className="relative sm:ml-5 sm:mt-9 sm:h-19.5 sm:w-20.4 bg-green sm:rounded-2xl xl:ml-9 xl:mt-9 xl:h-19.5 xl:w-80 xl:rounded-3xl">
              <img
                src={faq_styled}
                className="absolute sm:mt-0 sm:ml-19.17 sm:h-19.5 sm:rounded-tr-2xl xl:ml-66.2 xl:w-17 xl:rounded-tr-3xl xl:rounded-br-3xl"
              />
              <h3 className="relative sm:pt-8 sm:ml-4 sm:max-w-16 text-left text-white sm:text-xl font-bold font-montserrat xl:text-5xl xl:pt-8 xl:ml-10 xl:max-w-55">
                Get PickBetta for just $10 a week
              </h3>
              <p className="relative sm:pt-3 sm:ml-4 sm:max-w-19.3 text-left text-white sm:text-base font-medium font-montserrat xl:pt-3 xl:ml-10 xl:max-w-50 xl:text-xl">
                Your first week is always free. Start your trial now and see the
                difference!
              </p>
              <button className="relative sm:p-2 sm:w-13 sm:ml-4 sm:mt-4 float-left font-bold text-green bg-white rounded font-montserrat xl:p-2 xl:w-17 xl:ml-10 xl:mt-4">
                Start Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}