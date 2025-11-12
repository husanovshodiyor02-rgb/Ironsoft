import React from 'react'
import Ava1 from "../assets/img/ava1.png";
import Ava2 from "../assets/img/ava2.png";
import Ava3 from "../assets/img/ava3.png";
import G from "../assets/img/g.png";
import In from "../assets/img/in.png";

const Why = () => {
  return (
    <section className="bg-[#0c151c]">
      <div className="w-full h-auto rounded-[120px_120px_0_0] bg-white py-20">
        <div className="container1">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <div className="transition-transform duration-500 ease-in-out hover:scale-105">
                <h3 className="font-bold text-base leading-[125%] uppercase text-[#0c151c]">
                  Our advantages
                </h3>
                <h1 className="font-normal text-[55px] leading-[87%] text-[#0c151c] pt-3 pb-5">
                  Why <br /> Iron <span className="text-[#0089bd]">Soft</span>{" "}
                </h1>
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  Team of 12 passionate engineers developing <br /> and setting
                  with care to make sure our <br /> clients are 100% happy.
                </p>
                <div className="flex items-center gap-2 pt-3">
                  <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-black">
                    more About us
                  </p>
                  <div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7773 5.48438H11.7891C11.7969 5.49219 11.8027 5.5 11.8066 5.50781C11.8105 5.51562 11.8164 5.52344 11.8242 5.53125L11.7773 5.47266C11.8477 5.54297 11.9023 5.62305 11.9414 5.71289C11.9805 5.80273 12 5.89844 12 6C12 6.01562 11.998 6.03125 11.9941 6.04688C11.9902 6.0625 11.9883 6.07812 11.9883 6.09375L12 6C12 6.10156 11.9785 6.19727 11.9355 6.28711C11.8926 6.37695 11.8398 6.45703 11.7773 6.52734L6.52734 11.7891C6.45703 11.8516 6.37695 11.9023 6.28711 11.9414C6.19727 11.9805 6.10156 12 6 12C5.79688 12 5.62109 11.9277 5.47266 11.7832C5.32422 11.6387 5.25 11.4648 5.25 11.2617C5.25 11.1602 5.26953 11.0625 5.30859 10.9688C5.34766 10.875 5.40234 10.7969 5.47266 10.7344L9.46875 6.75H0.75C0.539062 6.75 0.361328 6.67773 0.216797 6.5332C0.0722656 6.38867 0 6.21094 0 6C0 5.79688 0.0722656 5.62305 0.216797 5.47852C0.361328 5.33398 0.539062 5.26172 0.75 5.26172H9.46875L5.47266 1.27734C5.40234 1.20703 5.34961 1.12695 5.31445 1.03711C5.2793 0.947266 5.26172 0.851562 5.26172 0.75C5.26172 0.664062 5.27539 0.582031 5.30273 0.503906C5.33008 0.425781 5.37109 0.355469 5.42578 0.292969L5.47266 0.222656C5.54297 0.152344 5.62305 0.0976562 5.71289 0.0585938C5.80273 0.0195312 5.89844 0 6 0C6.10156 0 6.19727 0.0195312 6.28711 0.0585938C6.37695 0.0976562 6.45703 0.152344 6.52734 0.222656L11.7773 5.47266V5.48438Z"
                        fill="#018ABD"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="border w-[278px] h-[314px] px-6 py-6 rounded-[48px] border-solid border-[#e2e2e2] mt-22 transition-transform duration-500 ease-in-out hover:scale-105">
                <h1 className="font-normal text-5xl leading-[67%] text-[#0089bd]">
                  04.
                </h1>
                <h2 className="font-normal text-[32px] leading-[112%] text-[#0c151c] py-4">
                  Highly process- <br /> oriented
                </h2>
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  We follow battle-tested, unique processes for <br />
                  everything that we do, ensuring high-quality, <br />
                  efficient, and debt-free delivery
                </p>
              </div>
            </div>
            <div>
              <div className="w-[278px] h-[314px] px-6 py-6 rounded-[48px] bg-[#def4fe] transition-transform duration-500 ease-in-out hover:scale-105">
                <h2 className="font-light text-xl leading-[120%] text-[#0c151c]">
                  “I’ve worked with them several times <br /> and have always
                  been happy with the <br /> results.”
                </h2>
                <div className="flex items-center gap-3 mt-13">
                  <img src={Ava1} alt="" className="w-12 h-12" />
                  <div>
                    <h4 className="font-normal text-lg leading-[120%] text-[#0c151c]">
                      Olexander Danilkovych
                    </h4>
                    <p className="font-light text-sm leading-[125%] text-[rgba(0,0,0,0.7)]">
                      co-owner of S-8 Trading
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-1">
                  <img src={G} alt="" className="w-10 h-10" />
                  <img src={In} alt="" className="w-10 h-10" />
                </div>
              </div>
              <div className="border w-[278px] h-[314px] px-6 py-6 rounded-[48px] border-solid border-[#e2e2e2] mt-12 transition-transform duration-500 ease-in-out hover:scale-105">
                <h1 className="font-normal text-5xl leading-[67%] text-[#0089bd]">
                  05.
                </h1>
                <h2 className="font-normal text-[30px] leading-[112%] text-[#0c151c] py-4">
                  Technical excel <br /> lency
                </h2>
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  We follow battle-tested, unique processes for <br />
                  everything that we do, ensuring high-quality, <br />
                  efficient, and debt-free delivery
                </p>
              </div>
            </div>
            <div>
              <div className="w-[278px] h-[314px] px-6 py-6 rounded-[48px] bg-[#def4fe] transition-transform duration-500 ease-in-out hover:scale-105">
                <h2 className="font-light text-xl leading-[120%] text-[#0c151c]">
                  "We were impressed by how promptly <br /> they could go from
                  approval of the <br /> project to delivering final outputs."
                </h2>
                <div className="flex items-center gap-3 mt-10">
                  <img src={Ava2} alt="" className="w-12 h-12" />
                  <div>
                    <h4 className="font-normal text-lg leading-[120%] text-[#0c151c]">
                      Vitaliy Stetsenko
                    </h4>
                    <p className="font-light text-sm leading-[125%] text-[rgba(0,0,0,0.7)]">
                      founder of Vital Interiors
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-1">
                  <img src={G} alt="" className="w-10 h-10" />
                  <img src={In} alt="" className="w-10 h-10" />
                </div>
              </div>
              <div className="border w-[278px] h-[314px] px-6 py-6 rounded-[48px] border-solid border-[#e2e2e2] mt-12 transition-transform duration-500 ease-in-out hover:scale-105">
                <h1 className="font-normal text-5xl leading-[67%] text-[#0089bd]">
                  06.
                </h1>
                <h2 className="font-normal text-[32px] leading-[112%] text-[#0c151c] py-4">
                  Full transparency
                </h2>
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  We follow battle-tested, unique processes for <br />
                  everything that we do, ensuring high-quality, <br />
                  efficient, and debt-free delivery
                </p>
              </div>
            </div>
            <div>
              <div className="w-[278px] h-[314px] px-6 py-6 rounded-[48px] bg-[#def4fe] transition-transform duration-500 ease-in-out hover:scale-105">
                <h2 className="font-light text-xl leading-[120%] text-[#0c151c]">
                  “Their team really listens and <br /> researches the best ways
                  to make our <br /> partnership the best it can possibly <br />{" "}
                  be."
                </h2>
                <div className="flex items-center gap-3 mt-4">
                  <img src={Ava3} alt="" className="w-12 h-12" />
                  <div>
                    <h4 className="font-normal text-lg leading-[120%] text-[#0c151c]">
                      Oleg Bolebrukh
                    </h4>
                    <p className="font-light text-sm leading-[125%] text-[rgba(0,0,0,0.7)]">
                      founder at Trident Modular
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end mt-1">
                  <img src={G} alt="" className="w-10 h-10" />
                  <img src={In} alt="" className="w-10 h-10" />
                </div>
              </div>
              <div className="border w-[278px] h-[314px] p-6 rounded-[48px] border-solid border-[#e2e2e2] bg-[#018abe] mt-12 transition-transform duration-500 ease-in-out hover:scale-105">
                <h1 className="font-normal text-[34px] leading-[91%] text-center text-white  mt-14">
                  Get a free <br /> consultation
                </h1>
                <div className="flex justify-center mt-5">
                  <div className="w-12 h-12 rounded-[100px] p-4 bg-white">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.4651 0.0900248L18.4838 0.0714749C18.5086 0.0715817 18.5304 0.0747798 18.549 0.081068C18.5676 0.0873569 18.5893 0.0905551 18.6141 0.0906604L18.4466 0.0713165C18.6701 0.0722703 18.8842 0.113548 19.0887 0.195148C19.2933 0.276748 19.476 0.398618 19.6367 0.560758C19.6615 0.585703 19.6831 0.613739 19.7016 0.644866C19.7201 0.675995 19.7417 0.704031 19.7664 0.728976L19.6367 0.560758C19.7975 0.722898 19.9147 0.909691 19.9883 1.12114C20.0619 1.33258 20.1045 1.5439 20.116 1.75508L20.0633 18.4653C20.05 18.6764 20.0025 18.8842 19.9209 19.0888C19.8393 19.2933 19.7174 19.476 19.5553 19.6368C19.231 19.9583 18.836 20.1212 18.3702 20.1254C17.9045 20.1296 17.5109 19.9696 17.1893 19.6453C17.0286 19.4831 16.9052 19.2963 16.8191 19.0848C16.7331 18.8733 16.6968 18.662 16.7101 18.451L16.7829 5.76476L2.86379 19.5655C2.52703 19.8994 2.1289 20.0653 1.66939 20.0634C1.20988 20.0614 0.813175 19.8921 0.479287 19.5553C0.157764 19.231 -0.00201538 18.8391 -5.37991e-05 18.3796C0.00190847 17.9201 0.171265 17.5234 0.508017 17.1895L14.4271 3.38879L1.74074 3.35325C1.51719 3.3523 1.30625 3.30793 1.10791 3.22014C0.909574 3.13236 0.730023 3.0074 0.569263 2.84526C0.433233 2.70806 0.325215 2.55546 0.245206 2.38746C0.165197 2.21946 0.11938 2.04228 0.107756 1.85594L0.0712937 1.66949C0.0722475 1.44594 0.113525 1.23188 0.195125 1.02731C0.276726 0.822738 0.398596 0.640071 0.560735 0.47931C0.722875 0.318548 0.906577 0.198243 1.11184 0.118392C1.3171 0.0385421 1.53151 -0.000906046 1.75505 4.91029e-05L18.4466 0.0713165L18.4651 0.0900248Z"
                        fill="#018ABE"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why