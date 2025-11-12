import React from 'react'
import Img12 from "../assets/img/img12.png";
import Img13 from "../assets/img/img13.png";
import Img14 from "../assets/img/img14.png";
import Img15 from "../assets/img/img15.png";

const Case = () => {
  return (
    <section className="bg-[#0c151c]">
      <h3 className="font-bold text-base leading-[125%] uppercase text-center text-white pt-12">
        Our projects
      </h3>
      <h1 className="font-normal text-[78px] leading-[87%] text-center text-white py-5">
        Case studies
      </h1>
      <p className="font-light text-base leading-[150%] text-center text-[rgba(255,255,255,0.7)]">
        When it comes to creating a high quality website and adjusting the
        marketing strategy, experience <br /> matters a lot. Explore our
        portfolio to view some of the projects we've successfully completed!
      </p>

      <div className="flex items-center overflow-x-auto gap-5 mt-8">
        <div>
          <img
            src={Img12}
            alt=""
            className="w-[400px] h-[270px] transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="border w-[153px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              Building Style Guide
            </div>
            <div className="border w-[61px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              React
            </div>
          </div>
          <h2 className="font-normal text-[26px] leading-[112%] text-white pt-3">
            Corporate website for an assemble <br /> modular houses enterprise
          </h2>
        </div>
        <div>
          <img
            src={Img13}
            alt=""
            className="w-[410px] h-[300px] transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="flex items-center gap-4">
            <div className="border w-[153px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              Wordpress
            </div>
            <div className="border w-[61px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              PWA
            </div>
          </div>
          <h2 className="font-normal text-[26px] leading-[112%] text-white pt-3">
            Modern look for the the <br /> software development company
          </h2>
        </div>
        <div>
          <img
            src={Img14}
            alt=""
            className="w-[400px] h-[270px] transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="border w-[153px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              Building Style Guide
            </div>
            <div className="border w-[61px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              React
            </div>
          </div>
          <h2 className="font-normal text-[26px] leading-[112%] text-white pt-3">
            Corporate website for an assemble <br /> modular houses enterprise
          </h2>
        </div>
        <div>
          <img
            src={Img15}
            alt=""
            className="w-[400px] h-[270px] transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="flex items-center gap-4 mt-4">
            <div className="border w-[153px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              Wordpress
            </div>
            <div className="border w-[61px] h-[37px] px-3 py-2 rounded-[40px] border-solid border-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
              WPA
            </div>
          </div>
          <h2 className="font-normal text-[26px] leading-[112%] text-white pt-3">
            Corporate website for an assemble <br /> modular houses enterprise
          </h2>
        </div>
      </div>

    <div className='flex justify-center py-10'>
        <button className="w-[191px] h-11 px-11 py-2 rounded-xl bg-[#018abe] font-normal text-base leading-[250%] text-center text-white flex items-center gap-1">
        See more
        <div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.77408 2.08679L9.78239 2.07854C9.79344 2.07859 9.8031 2.08001 9.81137 2.0828C9.81964 2.0856 9.82929 2.08702 9.84034 2.08707L9.76583 2.07847C9.86522 2.07889 9.96039 2.09725 10.0513 2.13352C10.1423 2.16981 10.2235 2.22399 10.295 2.29608C10.306 2.30717 10.3156 2.31963 10.3238 2.33347C10.332 2.34731 10.3417 2.35978 10.3527 2.37087L10.295 2.29608C10.3665 2.36817 10.4186 2.45122 10.4513 2.54523C10.484 2.63924 10.503 2.73319 10.5081 2.82708L10.4846 10.2566C10.4787 10.3504 10.4576 10.4428 10.4213 10.5338C10.3851 10.6247 10.3309 10.706 10.2588 10.7774C10.1146 10.9204 9.93898 10.9928 9.7319 10.9947C9.52483 10.9965 9.34981 10.9254 9.20686 10.7812C9.13538 10.7091 9.08052 10.6261 9.04227 10.532C9.00402 10.438 8.98785 10.3441 8.99378 10.2502L9.02614 4.60982L2.8376 10.7457C2.68788 10.8942 2.51086 10.968 2.30656 10.9671C2.10226 10.9662 1.92588 10.8909 1.77743 10.7412C1.63448 10.597 1.56344 10.4228 1.56431 10.2185C1.56518 10.0142 1.64048 9.83782 1.7902 9.68937L7.97875 3.55344L2.33828 3.53764C2.23889 3.53722 2.1451 3.51749 2.05692 3.47846C1.96874 3.43943 1.88891 3.38388 1.81743 3.31179C1.75695 3.25079 1.70893 3.18294 1.67336 3.10825C1.63778 3.03355 1.61741 2.95478 1.61224 2.87193L1.59603 2.78903C1.59646 2.68964 1.61481 2.59447 1.65109 2.50351C1.68737 2.41256 1.74155 2.33134 1.81364 2.25987C1.88573 2.18839 1.96741 2.1349 2.05867 2.0994C2.14993 2.0639 2.24526 2.04636 2.34465 2.04678L9.76583 2.07847L9.77408 2.08679Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    </div>
      
    </section>
  );
}

export default Case