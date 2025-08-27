import React from "react";
import circleImg from "../../images/circle-img.png";
import FaqIcon from "../../images/Faq-icon.png";

export function Faq(props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#111827] w-full md:h-[373px] pt-10 md:pt-28 text-white">
        <div className="px-5 md:px-10 md:w-[655px] h-[173px] relative">
          <img
            src={circleImg}
            alt="circle"
            className="absolute top-0 left-[40px]"
          />
          <h1 className="font-extrabold text-3xl md:text-6xl uppercase pt-3 md:w-[655px] md:h-[90px] tracking-wider">
            FAQ
          </h1>
          <p className="text-sm md:text-lg md:h-[52px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      {/* First Question */}
      <div className="mt-10 md:mt-24 px-5 md:px-10 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 md:h-[469px]">
        {/* Left Side Image/Box */}
        <div className="md:w-[655px] md:h-[469px] bg-[#C4C4C4] hover:bg-amber-400">
          <img
            src="https://images.unsplash.com/photo-1602872029796-f4ab2010b10b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwdXN1YWxseSUyMGFza2VkJTIwcXVlc3Rpb24lMjBjbGllbnRzfGVufDB8fDB8fHww"
            className="md:w-[655px] md:h-[469px] transition hover:scale-110 cursor-pointer"
            alt=""
            srcset=""
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-[655px] md:h-[469px]">
          {/* Heading */}
          <div className="md:h-[177px]">
            <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] md:w-[243px] md:h-[26px]">
              First Question Answer
            </h3>
            <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-5 md:h-[136px] leading-10 md:leading-[70px]">
              QUESTION ANSWER TRENDING WEEKLY
            </h1>
          </div>

          {/* Sub Text */}
          <div className="md:h-[52px] mt-2">
            <p className="text-sm md:text-lg text-[#6E6E6E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-4 md:h-[195px]">
            {/* Question 1 */}
            <div className="flex justify-between h-[45px] items-center">
              <h3 className="font-extrabold text-sm md:text-xl uppercase text-[#1B1717] tracking-wider">
                How Long Day Needed ?
              </h3>
              <div>
                <img src={FaqIcon} alt="faq icon" />
              </div>
            </div>
            <div className="border-[#DADADA] border-[1px] mt-3"></div>

            {/* Question 2 */}
            <div className="flex justify-between h-[45px] items-center mt-5">
              <h3 className="font-extrabold text-sm md:text-xl uppercase text-[#1B1717] tracking-wider">
                How To Claim Insurance ?
              </h3>
              <div>
                <img src={FaqIcon} alt="faq icon" />
              </div>
            </div>
            <div className="border-[#DADADA] border-[1px] mt-3"></div>

            {/* Question 3 */}
            <div className="flex justify-between h-[45px] items-center mt-5">
              <h3 className="font-extrabold text-sm md:text-xl uppercase text-[#1B1717] tracking-wider">
                Can I Request People Working ?
              </h3>
              <div>
                <img src={FaqIcon} alt="faq icon" />
              </div>
            </div>
            <div className="border-[#DADADA] border-[1px] mt-3"></div>
          </div>
        </div>
      </div>
      {/* Second Question */}
      <div className="mt-10 md:mt-24 px-5 md:px-10 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 md:h-[469px]">
        {/* Left Side Content */}
        <div className="md:w-[655px] md:h-[469px]">
          {/* Heading */}
          <div className="md:h-[177px]">
            <h3 className="font-extrabold text-sm md:text-lg uppercase text-[#757575] md:w-[260px] md:h-[26px]">
              Second Question Answer
            </h3>
            <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] mt-5 md:h-[136px] leading-10 md:leading-[70px]">
              USUALLY ASKED QUESTION CLIENTS
            </h1>
          </div>

          {/* Sub Text */}
          <div className="md:h-[52px] mt-2">
            <p className="text-sm md:text-lg text-[#6E6E6E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* FAQ List */}
          <div className="mt-4 md:h-[195px]">
            {/* Question 1 */}
            <div className="flex justify-between h-[45px] items-center">
              <h3 className="font-extrabold text-sm md:text-xl uppercase text-[#1B1717] tracking-wider">
                Where I Get Meeting Day ?
              </h3>
              <div>
                <img src={FaqIcon} alt="faq icon" />
              </div>
            </div>
            <div className="border-[#DADADA] border-[1px] mt-3"></div>

            {/* Question 2 */}
            <div className="flex justify-between h-[45px] items-center mt-5">
              <h3 className="font-extrabold text-sm md:text-xl uppercase text-[#1B1717] tracking-wider">
                Can Homco Pick Me To Office ?
              </h3>
              <div>
                <img src={FaqIcon} alt="faq icon" />
              </div>
            </div>
            <div className="border-[#DADADA] border-[1px] mt-3"></div>

            {/* Question 3 */}
            <div className="flex justify-between h-[45px] items-center mt-5">
              <h3 className="font-extrabold text-sm md:text-xl uppercase text-[#1B1717] tracking-wider">
                Can I Credit This Price ?
              </h3>
              <div>
                <img src={FaqIcon} alt="faq icon" />
              </div>
            </div>
            <div className="border-[#DADADA] border-[1px] mt-3"></div>
          </div>
        </div>

        {/* Right Side Image/Box */}
        <div className="md:w-[655px] md:h-[469px] bg-[#C4C4C4] hover:bg-amber-700">
          <img
            src="https://plus.unsplash.com/premium_photo-1661903998734-356d03c6080a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGludGVyaW9yJTIwZGVzaWduJTIwdXN1YWxseSUyMGFza2VkJTIwcXVlc3Rpb24lMjBjbGllbnRzfGVufDB8fDB8fHww"
            className="md:w-[655px] md:h-[469px] transition hover:scale-110 cursor-pointer"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
}
