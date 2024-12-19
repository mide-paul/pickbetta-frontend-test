import { useState, useRef } from "react";
import faq_styled from "./../assets/images/faq_styled.png";

export const Privacy = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const questionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const answersRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleQuestionClick = (index: number) => {
    setActiveQuestionIndex(index);

    answersRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setTimeout(() => {
      window.scrollBy(0, -130);
    }, 1000);
  };

  const calculateSliderTop = () => {
    if (activeQuestionIndex !== null && questionsRef.current[activeQuestionIndex]) {
      const questionElement = questionsRef.current[activeQuestionIndex];
      return questionElement?.offsetTop || 0;
    }
    return 0;
  };

  const calculateSliderHeight = () => {
    if (activeQuestionIndex !== null && questionsRef.current[activeQuestionIndex]) {
      const questionElement = questionsRef.current[activeQuestionIndex];
      return questionElement?.offsetHeight || 0;
    }
    return 0;
  };

  return (
    <div className="privacy">
      <div className="relative bg-green-light w-screen sm:h-19.3 sm:mt-3 xl:h-23.3 xl:-mt-8 flex flex-col items-center justify-center">
        <h3 className="ss:text-2xl ss:text-dark ss:font-extrabold ss:pt-11 
          sm:text-5xl sm:text-dark sm:font-extrabold sm:pt-11 sm:max-w-26 sm:text-center font-montserrat 
          xl:text-dark-900 xl:text-7xl xl:mt-15 xl:pt-7 xl:max-w-32  
          xx1:text-dark-900 xx1:text-7xl xx1:mt-15 xx1:pt-7 xx1:max-w-32
          xx2:text-dark-900 xx2:text-8xl xx2:mt-15 xx:pt-7 xx2:max-w-32
          xxl:text-dark-900 xxl:text-8xl xxl:mt-15 xx:pt-7 xxl:max-w-32
          xx3:text-dark-900 xx3:text-8xl xx3:mt-15 xx3:pt-7 xx3:max-w-32
          ">
          Privacy Policy
        </h3>
        <p className="ss:text-sm ss:text-dark ss:pb-5 
          sm:text-center sm:text-base text-dark sm:mt-4 sm:max-w-20 font-montserrat xl:text-dark-light xl:mt-3">
          Version 1.1 | September 2024
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-screen h-auto sm:gap-6 md:gap-4 xl:gap-0 xl:h-screen">
        <div
          className="hidden md:block flex flex-col w-full md:w-1/4 ml-5 mt-5 md:pl-1 relative bg-green-light 
            fixed top-0 left-0 max-h-29 xl:max-h-27 xx1:max-h-25 xx2:max-h-23 overflow-y-auto"
          style={{
            zIndex: 10, 
            width: "25%",
          }}
        >
          <div className="absolute top-0 left-0 w-0.4 bg-gray h-full"></div>

          <div
            className="absolute left-0 w-0.4 bg-green"
            style={{
              transition: "top 0.3s ease-in-out", 
              top: `${calculateSliderTop()}px`, 
              height: `${calculateSliderHeight()}px`, 
            }}
          ></div>

          <p
            ref={(el) => (questionsRef.current[0] = el)}
            onClick={() => handleQuestionClick(0)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 0 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Why Do We Collect Personal Information?
            
          </p>
          <p
            ref={(el) => (questionsRef.current[1] = el)}
            onClick={() => handleQuestionClick(1)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 1 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            What Information Do We Collect?
          </p>
          <p
            ref={(el) => (questionsRef.current[2] = el)}
            onClick={() => handleQuestionClick(2)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 2 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            When Do We Disclose/Share Your Information?
          </p>
          <p
            ref={(el) => (questionsRef.current[3] = el)}
            onClick={() => handleQuestionClick(3)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 3 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            How Do We Protect Your Personal Information?
          </p>
          <p
            ref={(el) => (questionsRef.current[4] = el)}
            onClick={() => handleQuestionClick(4)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 4 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Integrity of Your Personal Information
          </p>
          <p
            ref={(el) => (questionsRef.current[5] = el)}
            onClick={() => handleQuestionClick(5)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 5 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Cookies and Other Technologies
          </p>
          <p
            ref={(el) => (questionsRef.current[6] = el)}
            onClick={() => handleQuestionClick(6)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 6 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            PickBetta's Commitment to Your Privacy
          </p>
        </div>

        <div className="flex flex-col w-full md:w-3/4 px-5 pt-4">
          <div className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              Our Policy
            </h3>
            <p className="mt-3">
              PickBetta's privacy policy covers the collection and use of personal information that may be collected by PickBetta anytime you interact with PickBetta, such as when you visit our website, purchase PickBetta products and services, or contact our sales or support associates. Please take a moment to read the following to learn more about our information practices, including what type of information is gathered, how it is used and for what purposes, to whom we disclose the information, and how we safeguard your personal information. Your privacy is a priority at PickBetta, and we go to great lengths to protect it.
            </p>
          </div>        
          <div ref={(el) => (answersRef.current[0] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              1. Why Do We Collect Personal Information?
            </h3>
            <p className="mt-3">
              We collect personal information because it helps us deliver a superior level of customer service. It enables us to give you convenient access to our products and services and focus on categories of greatest interest to you. In addition, your personal information helps us keep you informed about the latest product announcements, updates, special offers, and events that you might be interested in.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[1] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              2. What Information Do We Collect?
            </h3>
            <p className="mt-3">
              There are several situations in which your personal information can help us provide better service. For example, we may ask for your personal information when you’re discussing a service issue on the phone with an associate, downloading a product, registering your products, or purchasing a product. At such times, we may collect personal information relevant to the situation, such as your name, mailing address, phone number, email address, and contact preferences; your credit card information; and information about the PickBetta products you own, such as invoice numbers and dates of purchase. We also collect information regarding customer activities on our website and on related websites, which helps us determine how best to provide useful information to customers and understand which parts of our websites and services are of most interest to them.          
            </p>
            <p className="mt-3">
              The PickBetta website allows you to create a "User ID" based on your personal information. This convenient service saves you time and allows for easier use of our web services. Here’s how it works: You create a personal profile—providing your name, phone number, email address, and in some cases your mailing address or credit card number—and choose a password for security. The system saves your information and assigns you a personal User ID. The next time you order from the PickBetta Store or purchase any of our products, all you need to do is enter your User ID and Password; the system looks up the information it needs to assist you. In addition, if you update the information associated with your User ID, it will be available for all your transactions with PickBetta globally.
            </p>
            <p className="mt-3">
              If you use a bulletin board or chat room on a PickBetta website, you should be aware that any information you share is visible to other users. Personally identifiable information you submit to one of these forums can be read, collected, or used by other individuals to send you unsolicited messages. PickBetta is not responsible for the personally identifiable information you choose to submit in these forums.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[2] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              3. When Do We Disclose/Share Your Information?
            </h3>
            <p className="mt-3">
              PickBetta takes your privacy very seriously. Be assured that PickBetta does not sell or rent your contact information to other marketers. To help us provide superior service, your personal information may be shared with legal entities within the PickBetta group globally, who will safeguard it in accordance with PickBetta's privacy policy. There are also times when it may be advantageous for PickBetta to make certain personal information about you available to companies that PickBetta has a strategic relationship with or that perform work for PickBetta to provide products and services to you on our behalf. These companies may help us process information, extend credit, fulfill customer orders, deliver products to you, manage and enhance customer data, provide customer service, assess your interest in our products and services, or conduct customer research or satisfaction surveys. These companies are also obligated to protect your personal information in accordance with PickBetta's policies. Without such information being made available, it would be difficult for you to purchase products, have products delivered to you, receive customer service, provide us feedback to improve our products and services, or access certain services, offers, and content on the PickBetta website.
            </p>
            <p className="mt-3">
              At times, we may be required by law or litigation to disclose your personal information. We may also disclose information about you if we determine that for national security, law enforcement, or other issues of public importance, disclosure is necessary.              
            </p>
          </div>
          <div ref={(el) => (answersRef.current[3] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              4. How Do We Protect Your Personal Information?
            </h3>
            <p className="mt-3">
              PickBetta takes precautions—including administrative, technical, and physical measures—to safeguard your personal information against loss, theft, and misuse, as well as unauthorized access, disclosure, alteration, and destruction.
            </p>
            <p className="mt-3">
              The PickBetta Online Store and website use Secure Sockets Layer (SSL) encryption on all web pages where personal information is required. To make purchases from PickBetta, you must use an SSL-enabled browser such as Safari, Netscape Navigator 3.0 or later, or Internet Explorer. Doing so protects the confidentiality of your personal and credit card information while it's transmitted over the Internet.
            </p>
            <p className="mt-3">
              You can help us by also taking precautions to protect your personal data when you are on the Internet. Change your passwords often using a combination of letters and numbers, and make sure you use a secure web browser like Safari.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[4] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              5. Integrity of Your Personal Information
            </h3>
            <p className="mt-3">
              PickBetta has safeguards in place to keep your personal information accurate, complete, and up to date for the purposes for which it is used. Naturally, you always have the right to access and correct the personal information you have provided. You can request a copy of your personal information, your product registration history, and your interactions with our sales and support agents by contacting us at the email address below.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[5] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              6. Cookies and Other Technologies
            </h3>
            <p className="mt-3">
              As is standard practice on most websites, PickBetta's website may use "cookies" and other technologies to help us understand which parts of our websites are the most popular, where our visitors are going, and how much time they spend there. We also use cookies and other technologies to ensure that our online advertising is bringing customers to our products and services. We use cookies and other technologies to study traffic patterns on our website, to make it even more rewarding, as well as to study the effectiveness of our customer communications. We use cookies to customize your experience and provide greater convenience each time you interact with us.
            </p>
            <p className="mt-3">
              As is true of most websites, we gather certain information automatically and store it in log files. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data.
            </p>
            <p className="mt-3">
              We use this information, which does not identify individual users, to analyze trends, administer the site, track users' movements around the site, and gather demographic information about our user base as a whole. PickBetta will not use the information collected to market directly to any person.
            </p>
            <p className="mt-3">
              In some of our email messages, we use a "click-through URL" linked to content on the PickBetta website. When a customer clicks one of these URLs, they pass through our web server before arriving at the destination web page. We track this click-through data to help us determine interest in particular topics and measure the effectiveness of our customer communications. If you prefer not to be tracked, simply avoid clicking text or graphic links in the email.
            </p>
            <p className="mt-3">
              In addition, we use pixel tags—tiny graphic images—to tell us what parts of our website customers have visited or to measure the effectiveness of searches customers perform on our site.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[6] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              7. PickBetta's Commitment to Your Privacy
            </h3>
            <p className="mt-3">
              As we said, PickBetta takes protecting your privacy very seriously. To make sure your personal information is secure, we communicate these guidelines to PickBetta employees and strictly enforce privacy safeguards within the company. In addition, PickBetta supports industry initiatives—such as the Online Privacy Alliance—to preserve privacy rights on the Internet and in all aspects of electronic commerce. We do not knowingly solicit personal information from minors or send them requests for personal information.
            </p>
            <p className="mt-3">
              PickBetta's website has links to the sites of other companies. PickBetta is not responsible for their privacy practices. We encourage you to learn about the privacy policies of those companies.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="relative ss:mt-9 ss:h-19.5 ss:w-19.25 ss:rounded-2xl 
          sm:mt-9 sm:h-19.5 sm:w-20.4 bg-green sm:rounded-2xl 
          x:mt-9 x:h-19.5 x:w-55 x:rounded-3xl xl:mt-9 xl:h-19.5 xl:w-144 xl:rounded-3xl">
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
  );
};
