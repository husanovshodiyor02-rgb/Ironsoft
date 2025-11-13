import React from 'react'
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";
import Img4 from "../assets/img/img4.png";
import Img5 from "../assets/img/img5.png";
import Img6 from "../assets/img/img6.png";
import Img7 from "../assets/img/img7.png";
import Img8 from "../assets/img/img8.png";
import Img9 from "../assets/img/img9.png";
import Img10 from "../assets/img/img10.png";
import Img11 from "../assets/img/img11.png";

const Showcase = () => {
  return (
    <section className="bg-[#0c151c]">
      <div className="container1">
        <div className="flex flex-col lg:flex-row items-center justify-between py-10">
          <div>
            <div className="flex items-center gap-3 md:pt-30 pt-10">
              <img src={Img1} alt="" className="w-20 h-20" />
              <h1 className="font-normal text-4xl leading-[117%] text-white">
                Your Website <br /> good enough?
              </h1>
            </div>
            <br />
            <br />
            <div className="border w-auto h-[76px] p-5 rounded-[20px] border-solid border-[#018abe] bg-white hover:bg-[#eeeaea] transition-transform duration-500 ease-in-out hover:scale-103 flex items-center md:gap-13 gap-5">
              <h2 className="font-normal md:text-[30px] text-[25px] leading-[91%] text-[#0c151c]">
                Check this now!
              </h2>
              <div className="cursor-pointer">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 78 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="39" cy="39" r="39" fill="#018ABE" />
                  <path
                    d="M47.4885 28.956L47.5072 28.9374C47.5321 28.9375 47.5538 28.9407 47.5724 28.947C47.591 28.9533 47.6127 28.9565 47.6376 28.9566L47.47 28.9373C47.6935 28.9382 47.9076 28.9795 48.1122 29.0611C48.3167 29.1427 48.4994 29.2646 48.6602 29.4267C48.6849 29.4517 48.7065 29.4797 48.725 29.5108C48.7435 29.542 48.7651 29.57 48.7899 29.5949L48.6602 29.4267C48.8209 29.5889 48.9381 29.7757 49.0117 29.9871C49.0853 30.1985 49.1279 30.4099 49.1394 30.621L49.0867 47.3313C49.0734 47.5423 49.0259 47.7501 48.9443 47.9547C48.8627 48.1593 48.7409 48.342 48.5787 48.5027C48.2544 48.8242 47.8594 48.9871 47.3937 48.9913C46.9279 48.9956 46.5343 48.8355 46.2128 48.5113C46.052 48.3491 45.9286 48.1623 45.8426 47.9508C45.7565 47.7393 45.7202 47.528 45.7335 47.3169L45.8063 34.6307L31.8872 48.4315C31.5505 48.7653 31.1523 48.9313 30.6928 48.9293C30.2333 48.9274 29.8366 48.758 29.5027 48.4213C29.1812 48.097 29.0214 47.7051 29.0234 47.2456C29.0253 46.7861 29.1947 46.3894 29.5315 46.0555L43.4505 32.2548L30.7642 32.2192C30.5406 32.2183 30.3297 32.1739 30.1313 32.0861C29.933 31.9983 29.7535 31.8734 29.5927 31.7112C29.4567 31.574 29.3487 31.4214 29.2686 31.2534C29.1886 31.0854 29.1428 30.9082 29.1312 30.7219L29.0947 30.5355C29.0957 30.3119 29.137 30.0979 29.2186 29.8933C29.3002 29.6887 29.422 29.506 29.5842 29.3453C29.7463 29.1845 29.93 29.0642 30.1353 28.9844C30.3405 28.9045 30.5549 28.8651 30.7785 28.866L47.47 28.9373L47.4885 28.956Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <h3 className="font-normal text-2xl leading-[292%] tracking-[0.16em] uppercase text-white md:pt-45 pt-15">
              <strong className="border-b w-[68px] h-0 border-solid border-b-[#018abe]">
                They
              </strong>{" "}
              Trust Us
            </h3>
            <br />
            <div className="flex items-center gap-5 sm:pb-0 pb-10 overflow-x-auto">
              <img
                src={Img5}
                alt=""
                className="w-[70px] h-[35px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <img
                src={Img6}
                alt=""
                className="w-[30px] h-[35px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <img
                src={Img7}
                alt=""
                className="w-[120px] h-[35px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <img
                src={Img8}
                alt=""
                className="w-[85px] h-[35px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:mt-10">
              <div>
                <img
                  src={Img2}
                  alt=""
                  className="w-[241px] h-[420px] transition-transform duration-500 ease-in-out hover:scale-105 mb-20"
                />
                <div className="border w-[241px] h-[104px] border-solid border-[#3d4449] px-6 py-3">
                  <img src={Img9} alt="" />
                  <h4 className="font-normal text-xl leading-[133%] text-white pt-2">
                    Web Development
                  </h4>
                </div>
              </div>
              <div>
                <img
                  src={Img3}
                  alt=""
                  className="w-[241px] h-[420px] transition-transform duration-500 ease-in-out hover:scale-105 mt-8 mb-12"
                />
                <div className="border w-[241px] h-[104px] border-solid border-[#3d4449] px-6 py-3">
                  <img src={Img10} alt="" />
                  <h4 className="font-normal text-xl leading-[133%] text-white pt-2">
                    SEOptimisation
                  </h4>
                </div>
              </div>
              <div>
                <img
                  src={Img4}
                  alt=""
                  className="w-[241px] h-[420px] transition-transform duration-500 ease-in-out hover:scale-105 mb-20"
                />
                <div className="border w-[241px] h-[104px] border-solid border-[#3d4449] px-6 py-3">
                  <img src={Img11} alt="" />
                  <h4 className="font-normal text-xl leading-[133%] text-white pt-2">
                    PPC and SMM
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase