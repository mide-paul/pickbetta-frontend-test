import { useState, useRef } from "react";
import faq_styled from "./../assets/images/faq_styled.png";

export const Terms = () => {
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
    <div className="terms">
      <div className="relative bg-green-light w-screen sm:h-19.3 sm:mt-3 xl:h-23.3 xl:-mt-8 flex flex-col items-center justify-center">
        <h3 className="ss:text-xl ss:text-dark ss:font-extrabold ss:pt-11 
          sm:text-5xl sm:text-dark sm:font-extrabold sm:pt-11 sm:max-w-40 sm:text-center font-montserrat 
          xl:text-dark xl:text-7xl xl:mt-8 xl:pt-7 xl:font-g xl:max-w-50
          xx1:text-dark-900 xx1:text-7xl xx1:mt-15 xx1:pt-7 xx1:max-w-50
          xx2:text-dark-900 xx2:text-8xl xx2:mt-15 xx:pt-7 xx2:max-w-50
          xxl:text-dark-900 xxl:text-8xl xxl:mt-15 xx:pt-7 xxl:max-w-50
          xx3:text-dark-900 xx3:text-8xl xx3:mt-15 xx3:pt-7 xx3:max-w-50          
          ">
          Terms & Conditions
        </h3>
        <p className="ss:text-sm ss:text-dark ss:pb-5 
          sm:text-center sm:text-base text-dark sm:mt-4 sm:max-w-20 font-montserrat xl:text-dark-light xl:mt-3">
          Version 1.1 | September 2024
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-screen h-auto sm:gap-6 md:gap-4 xl:gap-0 xl:h-screen">
        <div
          className="hidden md:block flex flex-col w-full md:w-1/4 ml-5 mt-5 md:pl-1 relative bg-green-light 
            fixed top-0 left-0 max-h-37 xl:max-h-35 xx:max-h-30 xx1:max-h-33 xx2:max-h-31 overflow-y-auto"
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
            Nature of Products / Limitation of Liability
          </p>
          <p
            ref={(el) => (questionsRef.current[1] = el)}
            onClick={() => handleQuestionClick(1)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 1 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Use / Copyright
          </p>          
          <p
            ref={(el) => (questionsRef.current[2] = el)}
            onClick={() => handleQuestionClick(2)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 2 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Account Registrations and Security
          </p>
          <p
            ref={(el) => (questionsRef.current[3] = el)}
            onClick={() => handleQuestionClick(3)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 3 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Payment/Fees and Subscription Renewal
          </p>
          <p
            ref={(el) => (questionsRef.current[4] = el)}
            onClick={() => handleQuestionClick(4)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 4 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Disclosure and Removal of Information
          </p>
          <p
            ref={(el) => (questionsRef.current[5] = el)}
            onClick={() => handleQuestionClick(5)}            
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 5 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Consent to Electronic Communications and Solicitation
          </p>
          <p
            ref={(el) => (questionsRef.current[6] = el)}
            onClick={() => handleQuestionClick(6)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 6 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Third-Party Content, Sites, and Services
          </p>          
          <p
            ref={(el) => (questionsRef.current[7] = el)}
            onClick={() => handleQuestionClick(7)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 7 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Modifications to the Terms and Conditions
          </p>
          <p
            ref={(el) => (questionsRef.current[8] = el)}
            onClick={() => handleQuestionClick(8)}
            className={`text-left text-base font-montserrat pl-3 sm:mt-5 xl:text-lg relative cursor-pointer ${
              activeQuestionIndex === 8 ? "pl-4 text-green font-bold" : "text-gray"
            }`}
          >
            Entire Agreement
          </p>
        </div>

        <div className="flex flex-col w-full md:w-3/4 px-5 pt-4">
          <div className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              Our Terms & Conditions
            </h3>
            <p className="mt-3">
              PickBetta is a service provided by [Company Name], a subsidiary of [Parent Company Name], and PickBetta (“PickBetta”). By using the PickBetta site and any of our features, services, or products, you agree to all our terms and conditions as outlined below (the “Agreement”). If you do not agree with any of these terms, please discontinue your use of the website and any of our features, services, or products immediately.
            </p>
            <p className="mt-3">
              For the purposes of this Agreement: i) the “Website” shall mean the site PickBetta.com; ii) “Products” shall collectively mean all publications, tables, commentary, information, and/or instructions found on the Website or otherwise provided by PickBetta; iii) “Subscription Services” shall mean registered access to PickBetta’s subscription program whereby users pay a fee to access, download, and store Products; and iv) “Services” shall mean collectively the Subscription Services and other new or existing services offered by PickBetta on the Website.
            </p>
          </div>        
          <div ref={(el) => (answersRef.current[0] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              1. Nature of Products / Limitation of Liability
            </h3>
            <p className="mt-3">
              ALL PRODUCTS (AS DEFINED ABOVE) AND SERVICES (AS DEFINED ABOVE) ARE PROVIDED “AS-IS.” WE DO NOT PROVIDE ANY EXPRESS OR IMPLIED WARRANTIES OF MERCHANTABILITY, SUITABILITY, OR COMPLETENESS FOR ANY OF THE PRODUCTS OR SERVICES FOR YOUR PARTICULAR NEEDS. THE PRODUCTS AND SERVICES ARE USED AT YOUR OWN RISK. IN NO EVENT WILL:
              i) PICKBETTA, ITS AGENTS, PARTNERS, OR AFFILIATES; OR
              ii) THE PROVIDERS, AUTHORS, OR PUBLISHERS OF ITS PRODUCTS, BE RESPONSIBLE OR LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER USED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THESE PRODUCTS OR THE USE OF THIS SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. THESE PRODUCTS AND SERVICES ARE NOT INTENDED AS A SUBSTITUTE FOR COMMON SENSE AND THEY SHOULD ONLY BE A STARTING POINT FOR YOU. PRODUCTS MAY REQUIRE MODIFICATION TO SUIT YOUR PARTICULAR NEEDS AND YOUR STATE, PROVINCIAL, OR TERRITORIAL LAW REQUIREMENTS.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[1] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              2. Use / Copyright
            </h3>
            <p className="mt-3">
              The Products are for private use only (or for use on behalf of one client) and cannot be resold or distributed without our written consent. Most of the Products are copyrighted by us. However, some Products may be based on public domain materials or be copyrighted by third parties. We make no claims as to those materials.
            </p>
            <ul className="list-disc">
              <li className="font-semibold ml-5 my-5">
                Product Use Outside of Defined Area
              </li>
            </ul>            
            <p className="mt-3">
              We make no representations and give no warranties, express or implied, that making the Products available in any particular jurisdiction outside the United States, U.K., Canada, and Australia is permitted under such jurisdiction’s applicable laws or regulations. Accordingly, if making the Products or any part available in your jurisdiction or to you (by reason of nationality, residence, or otherwise) is prohibited, those Products are not offered for sale to you. You accept that if you are a resident outside the United States, U.K., Canada, and Australia, you must satisfy yourself that you are lawfully able to purchase the Products. We accept no liability, to the extent permitted by applicable law, for any costs, losses, or damages resulting from or related to the purchase or attempted purchase of the Products by persons: i) in jurisdictions outside the United States, U.K., Canada, or Australia; ii) who are nominees of or trustees for citizens, residents, or nationals of other countries; or iii) in the United States, U.K., Canada, or Australia who purchase products designed for jurisdictions other than their own.
            </p>
            <ul className="list-disc">
              <li className="font-bold ml-5 my-5">
                No Unlawful or Prohibited Use
              </li>
            </ul>            
            <p className="mt-3">
              You agree not to use the Website, its Products, and/or its Services for any unlawful purpose or as prohibited by our terms, conditions, and notices set forth in this Agreement and elsewhere on the Website. You also agree that when using the Website, its Products, and/or its Services, you will not:
            </p>
            <p className="mt-3">
              <br />
              1. Violate any applicable laws or regulations.
              <br />
              2. Attempt to interfere with any other person’s use of the Website               or the Services.
              <br />
              3. Use the Website or the Services in a manner that results in excessive bandwidth, data transfer, or server usage, as determined by PickBetta.
              <br />
              4. Use the Website or the Services in any manner which could damage, disable, overburden, or impair the PickBetta Website,computer systems, servers, and networks, or interfere with any other party’s use and enjoyment of the Website.
              <br />
              5. Copy or duplicate or permit any third party to copy or duplicate any portion of the Website or our Products or to swap, rent, sub-license, transfer, sell, upload, download, display, or offer any portion of our Website or our Products to any third party.
              <br />
              6. Download multiple Products for purposes of creating a database or to create a commercial or non-commercial website or product, in whole or in part.
              <br />
              7. Misrepresent your identity or impersonate any person.
              <br />
              8. Charge others to use the Services either directly or indirectly.
              <br />
              9. Attempt to modify, translate, adapt, edit, copy, decompile, disassemble, or reverse engineer any software used or provided by PickBetta in connection with the PickBetta Website or Services.
              <br />
              10. Obtain or attempt to obtain any data through any means from the Website or the Services, except if we intend to provide or make it available to you.
              <br />
              11. Use the Website or Services for any unlawful purpose or to violate any federal, state, or international law, code of conduct, or other guidelines which may be applicable to the Services or the Website.
              <br />
              12. Copy, sell, transfer, distribute, publish, or assign your license to the Services in any format to any third party.
              <br />
              13. Send, receive, or download messages or materials that are inappropriate or violate the intellectual property rights of PickBetta or others.      
            </p>
            <p className="mt-3">
              All judgments concerning the applicability of these guidelines shall be at the sole and exclusive discretion of PickBetta. PickBetta reserves the right, in its sole discretion, to determine whether and what action to take in response to any violation. Any action or inaction in a particular instance shall not dictate or limit PickBetta’s response to a future complaint.
            </p>            
          </div>
          <div ref={(el) => (answersRef.current[2] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              3.  Account Registrations and Security
            </h3>
            <p className="mt-3">
              Access to some of the Services, such as the Subscription Service, requires registration and the payment of a fee. In order to register, you agree to provide us with accurate and up-to-date information. You also represent that you have the legal right to use the email address(es) you provide.
            </p>
            <p className="mt-3">
              The account you register is only to be used by the person or organization who registered it. You agree not to disclose the account log-in or access code to any third party or authorize them to access or use the Services on your behalf. You shall immediately notify PickBetta of any unauthorized use of your user ID or password or any other breach of security. PickBetta cannot and will not be liable for any damage or loss
            </p>
          </div>
          <div ref={(el) => (answersRef.current[3] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              4. Payment/Fees and Subscription Renewal
            </h3>
            <p className="mt-3">
              We reserve the right to change the Subscription Service’s fees or applicable charges and to institute new charges at any time.
            </p>
            <ul className="list-disc">
              <li className="font-semibold ml-5 my-5">
                Account Cancellation
              </li>
            </ul>            
            <p className="mt-3">
              If your account is paid in full, you may cancel your account and terminate this Agreement. We recommend exporting or saving any important documents and data because you will lose access to all content stored in your account after cancellation.
            </p>
            <ul className="list-disc">
              <li className="font-semibold ml-5 my-5">
                Termination and Access Restriction
              </li>
            </ul>            
            <p className="mt-3">
              The rights granted by PickBetta to use the Subscription Services are predicated upon a user’s: a) acknowledgment and acceptance of these Terms and Conditions of Use; b) payment for the access granted; and c) not sharing the access granted with any other person or entity. 
            </p>
            <p className="mt-3">
              If you violate or if we have grounds to suspect that you violated our guidelines set forth in these Terms and Conditions of Use and/or other use parameters included on the Website, we may suspend or terminate your account and refuse use of the Services (or any portion thereof). 
            </p>
            <p className="mt-3">
              PickBetta also reserves the right, in its sole discretion, to terminate your access to the Website and Services or any portion thereof at any time, without cause and/or without notice. 
            </p>
            <p className="mt-3">
              In the event that a user fails to pay for the access granted, or shares the access granted with any person or entity, or misuses the system by any means actionable under a federal, state, or local statute, code, regulation, law, or civil action, PickBetta will consider the user’s access as having been acquired by fraud or misrepresentation and will terminate the user’s access. In such a case, PickBetta retains the right to seek civil or criminal redress, the entire cost of which shall be borne solely by the user.
            </p>                                    
            <ul className="list-disc">
              <li className="font-semibold ml-5 my-5">
                Refund of Charges
              </li>
            </ul>            
            <p className="mt-3">
              Except as specifically set forth in this section, all Subscription Services are prepaid. To cancel a current subscription and request a refund for the unused portion, call [Phone Number].
            </p>                        
          </div>
          <div ref={(el) => (answersRef.current[4] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              5. Disclosure and Removal of Information
            </h3>
            <p className="mt-3">
              We will not disclose any of your personal information to third parties without your permission except in the following circumstances: i) to protect ourselves from liability; ii) to respond to a legal process or comply with the law; or iii) in accordance with our Privacy Policy.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[5] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              6.  Consent to Electronic Communications and Solicitation
            </h3>
            <p className="mt-3">
              By registering with PickBetta, you understand that we may send you communications from PickBetta including but not limited to: i) notices about your use of the Services, including any notices concerning violations of use; ii) updates; and iii) promotional information and materials regarding the Products and Services, via electronic mail. We give you the opportunity to opt-out of receiving electronic mail from us by following the opt-out instructions provided in the message.
            </p>
          </div>
          <div ref={(el) => (answersRef.current[6] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              7. Third-Party Content, Sites, and Services
            </h3>
            <p className="mt-3">
              The Website may contain links to other Internet sites, resources, and/or sponsors of the Website. We do not verify, warrant, endorse, or take responsibility for the availability, accuracy, completeness, or quality of the content contained in these outside sites. PickBetta is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by PickBetta of the site or any association with its operators. 
            </p>
            <p className="mt-3">
              The Services and Products may contain features and functionalities linking you or providing you with certain functionality and access to third-party content, including websites, directories, servers, networks, systems, information and databases, applications, software, programs, products or services, and the Internet as a whole. We may also provide some content to you as part of the Services.
            </p>
            <ul className="list-disc">
              <li className="font-semibold ml-5 my-5">
                Assignment
              </li>
            </ul>            
            <p className="mt-3">
              Except as specifically set forth in this section, all Subscription Services are prepaid. To cancel a current subscription and request a refund for the unused portion, call [Phone Number].
            </p>            
          </div>
          <div ref={(el) => (answersRef.current[7] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              8. Modifications to the Terms and Conditions
            </h3>
            <p className="mt-3">
              We may alter these Terms and Conditions of Use from time to time and post the new version on our Website, following which all use of the Website, Services, and Products will be governed by that version. You must check the Terms and Conditions of Use on the Website regularly.
            </p>
          </div>          
          <div ref={(el) => (answersRef.current[8] = el)} className="answer text-left text-base text-gray font-montserrat sm:mt-5 xl:mt-10">
            <h3 className="text-xl font-bold text-dark">
              9. Entire Agreement
            </h3>
            <p className="mt-3">
              These Terms and Conditions of Use, together with our Privacy Policy, any product disclaimers, and any payment method instructions, if any, constitute the entire agreement between you and us. You acknowledge that you have not entered into this agreement in reliance upon any statement, warranty, or representation made by PickBetta or any other person or entity, and you irrevocably and unconditionally waive any rights to claim damages and/or to rescind these Terms and Conditions of Use by reason of any misrepresentation (other than a fraudulent misrepresentation) that is not contained in the Terms and Conditions of Use, our Privacy Policy, any product disclaimers, and payment method instructions.
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
