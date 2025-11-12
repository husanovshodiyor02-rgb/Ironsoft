import React from 'react'
import Img16 from "../assets/img/img16.png";
import Img17 from "../assets/img/img17.png";
import B1 from "../assets/img/b1.png";
import B2 from "../assets/img/b2.png";
import B3 from "../assets/img/b3.png";

const Service = () => {
  return (
    <section className="w-full h-auto rounded-[120px_120px_0_0] py-15 bg-white">
      <div className="container1">
        <h2 className="font-normal text-[48px] leading-[87%] text-center text-[#0c151c]">
          Our servises
        </h2>
        <br />
        <p className="font-light text-base leading-[150%] text-center text-[rgba(0,0,0,0.7)]">
          Partners in every phase of the product lifecycle
        </p>

        <div className="flex overflow-x-auto gap-5 mt-8">
          <div>
            <div className="w-auto h-auto rounded-[20px] bg-[#def4fe] p-6">
              <h3 className="font-normal text-3xl leading-[111%] uppercase text-[#0c151c]">
                Web Development
              </h3>
              <br />
              <div className="flex gap-5">
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  The visualized product concept is being implemented and <br />
                  executed. We will choose the technology that matches
                  <br />
                  the requirements and is sustainable to ensure future <br />
                  development potential.
                </p>
                <div className="w-12 h-12 rounded-[100px] p-3 bg-white">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4652 0.0899638L18.4839 0.0714139C18.5088 0.0715206 18.5305 0.0747188 18.5491 0.081007C18.5677 0.0872959 18.5894 0.090494 18.6143 0.0905994L18.4467 0.0712555C18.6702 0.0722093 18.8843 0.113487 19.0889 0.195087C19.2934 0.276687 19.4761 0.398557 19.6369 0.560697C19.6616 0.585642 19.6832 0.613678 19.7017 0.644805C19.7202 0.675934 19.7418 0.70397 19.7665 0.728915L19.6369 0.560697C19.7976 0.722837 19.9148 0.90963 19.9884 1.12108C20.062 1.33252 20.1046 1.54384 20.1161 1.75502L20.0634 18.4652C20.0501 18.6763 20.0026 18.8841 19.921 19.0887C19.8394 19.2933 19.7175 19.4759 19.5554 19.6367C19.2311 19.9582 18.8361 20.1211 18.3704 20.1253C17.9046 20.1295 17.511 19.9695 17.1895 19.6452C17.0287 19.4831 16.9053 19.2963 16.8193 19.0848C16.7332 18.8733 16.6969 18.662 16.7102 18.4509L16.783 5.7647L2.86391 19.5654C2.52716 19.8993 2.12902 20.0653 1.66951 20.0633C1.21 20.0614 0.813297 19.892 0.479409 19.5552C0.157887 19.231 -0.00189331 18.8391 6.82713e-05 18.3796C0.00203054 17.92 0.171387 17.5233 0.508139 17.1895L14.4272 3.38873L1.74086 3.35319C1.51731 3.35224 1.30637 3.30787 1.10803 3.22008C0.909696 3.1323 0.730145 3.00734 0.569385 2.8452C0.433356 2.708 0.325337 2.5554 0.245328 2.3874C0.165319 2.21939 0.119502 2.04222 0.107879 1.85588L0.0714158 1.66943C0.0723696 1.44588 0.113647 1.23182 0.195247 1.02725C0.276848 0.822677 0.398718 0.64001 0.560858 0.479249C0.722998 0.318487 0.906699 0.198182 1.11196 0.118331C1.31722 0.038481 1.53163 -0.000967081 1.75518 -1.19323e-05L18.4467 0.0712555L18.4652 0.0899638Z"
                      fill="#018ABE"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" w-[550px] h-[200px] rounded-[20px] p-6 bg-[rgba(223,238,245,0.4)] my-5">
              <h2 className="font-normal text-4xl leading-[111%] uppercase text-[#0c151c]">
                SEO Optimisation
              </h2>
              <p>
                The work on a digital project continues after deployment. We can{" "}
                <br />
                observe how real users interact with the product and identify{" "}
                <br />
                opportunities for optimization. We will continuously evaluate{" "}
                <br />
                performance, make updates, and make adjustments to ensure that{" "}
                <br />
                your product remains secure, up to date, and improves over time.
              </p>
            </div>
            <div className=" w-[550px] h-[200px] rounded-[20px] p-6 bg-[rgba(223,238,245,0.4)]">
              <h2 className="font-normal text-4xl leading-[111%] uppercase text-[#0c151c]">
                PCC, SMM
              </h2>
              <p>
                Our Paid Media efforts engage audiences when they are most{" "}
                <br />
                receptive, resulting in high-quality traffic and increased leads{" "}
                <br />
                and revenue.We will help you quickly increase targeted traffic{" "}
                <br />
                from paid advertising channels such as Google, Facebook, <br />
                Instagram or even LinkedIn.
              </p>
            </div>
          </div>
          <div className="border w-auto h-auto p-6 rounded-[48px] border-solid border-[#e2e2e2] bg-white">
            <div className="flex items-center gap-4">
              <img src={Img16} alt="" className="w-[150px] h-[100px]" />
              <div>
                <h3 className="font-normal text-[28px] leading-[112%] text-[#0c151c]">
                  Product Design
                </h3>
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  Product design is where we bring the idea to life with a
                  functional and <br /> aesthetic touch. We will use our
                  creative and technical skills to create an <br /> attractive
                  digital product that will convert potential users into loyal{" "}
                  <br /> customers.
                </p>
              </div>
            </div>
            <div className="w-[697px] h-[65px] bg-[#f2f8fb] flex gap-3 items-center px-2">
              <h4 className="font-normal text-xl leading-[100%] text-[#018abe]">
                USER EXPERIENCE <br /> DESIGN
              </h4>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                User Flows
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Wireframing
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                UX Writing
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Prototyping
              </div>
            </div>
            <div className="w-[697px] h-[65px] bg-[#f2f8fb] flex gap-3 items-center px-2">
              <h4 className="font-normal text-xl leading-[100%] text-[#018abe]">
                USER INTERFACE <br /> DESIGN
              </h4>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                UI Responsive Design
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Micro Interactions
              </div>
            </div>
            <div className="w-[697px] h-[65px] bg-[#f2f8fb] flex gap-3 items-center px-2">
              <h4 className="font-normal text-xl leading-[100%] text-[#018abe]">
                BRANDING
              </h4>
              <div className="px-3 py-2 md:ml-14 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Building Style Guide
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Unique assets & animations
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={Img17} alt="" className="w-[150px] h-[100px]" />
              <div>
                <h3 className="font-normal text-[28px] leading-[112%] text-[#0c151c]">
                  Web Development
                </h3>
                <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
                  The goal of front-end development is to create an intuitive
                  and <br /> enjoyable experience for the end user. We will
                  ensure that everything is <br /> accurately displayed, with
                  proper alignment on various devices, and <br /> presented
                  exactly as intended.
                </p>
              </div>
            </div>
            <div className="w-[697px] h-[65px] bg-[#f2f8fb] flex gap-3 items-center px-2">
              <h4 className="font-normal text-xl leading-[100%] text-[#018abe]">
                FRONT-END <br /> DEVELOPMENT
              </h4>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                HTML CSS JS
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                React
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Next.js
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Wordpress
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                PWA
              </div>
            </div>
            <div className="w-[697px] h-[65px] bg-[#f2f8fb] flex gap-3 items-center px-2">
              <h4 className="font-normal text-xl leading-[100%] text-[#018abe]">
                BACK-END <br /> DEVELOPMENT
              </h4>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                Node.js
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                PHP
              </div>
              <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                API Integration
              </div>
            </div>
            <div className="w-[697px] h-[65px] bg-[#f2f8fb] flex gap-10 items-center px-2">
              <h4 className="font-normal text-xl leading-[100%] text-[#018abe]">
                QUALITY <br /> ASSURANCE
              </h4>
              <div className="flex items-center gap-4">
                <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                  Manual acceptance tests
                </div>
                <div className="px-3 py-2 rounded-[40px] bg-[#8baab7] font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-white">
                  Automated unit tests
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-normal text-[48px] leading-[87%] text-center text-[#0c151c] mt-12 mb-5">
          Blog
        </h2>
      </div>
      <div className="flex gap-6 overflow-x-auto">
        <div>
          <img src={B1} alt="" className="w-[337px] h-[280px]" />
          <h3 className="font-normal text-2xl leading-[117%] text-[#0c151c]">
            IKEA.com — the problems with <br /> static content
          </h3>
          <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-[#8baab7] mb-2">
            Gustaf Nilsson Kotte in Flat Pack Tech
          </p>
          <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
            In my previous blog post, I wrote about the <br /> history of
            IKEA.com going from a <br /> monolithic e-commerce platform…
          </p>
          <p className="font-light text-base leading-[150%] text-[#8baab7] mt-2">
            12.08.23
          </p>
        </div>
        <div>
          <img src={B2} alt="" className="w-[337px] h-[280px]" />
          <h3 className="font-normal text-2xl leading-[117%] text-[#0c151c]">
            IKEA.com — the problems with <br /> static content
          </h3>
          <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-[#8baab7] mb-2">
            Gustaf Nilsson Kotte in Flat Pack Tech
          </p>
          <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
            In my previous blog post, I wrote about the <br /> history of
            IKEA.com going from a <br /> monolithic e-commerce platform…
          </p>
          <p className="font-light text-base leading-[150%] text-[#8baab7] mt-2">
            12.08.23
          </p>
        </div>
        <div>
          <img src={B3} alt="" className="w-[337px] h-[280px]" />
          <h3 className="font-normal text-2xl leading-[117%] text-[#0c151c]">
            IKEA.com — the problems with <br /> static content
          </h3>
          <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-[#8baab7] mb-2">
            Gustaf Nilsson Kotte in Flat Pack Tech
          </p>
          <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
            In my previous blog post, I wrote about the <br /> history of
            IKEA.com going from a <br /> monolithic e-commerce platform…
          </p>
          <p className="font-light text-base leading-[150%] text-[#8baab7] mt-2">
            12.08.23
          </p>
        </div>
        <div>
          <img src={B1} alt="" className="w-[337px] h-[280px]" />
          <h3 className="font-normal text-2xl leading-[117%] text-[#0c151c]">
            IKEA.com — the problems with <br /> static content
          </h3>
          <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-[#8baab7] mb-2">
            Gustaf Nilsson Kotte in Flat Pack Tech
          </p>
          <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
            In my previous blog post, I wrote about the <br /> history of
            IKEA.com going from a <br /> monolithic e-commerce platform…
          </p>
          <p className="font-light text-base leading-[150%] text-[#8baab7] mt-2">
            12.08.23
          </p>
        </div>
        <div>
          <img src={B3} alt="" className="w-[337px] h-[280px]" />
          <h3 className="font-normal text-2xl leading-[117%] text-[#0c151c]">
            IKEA.com — the problems with <br /> static content
          </h3>
          <p className="font-bold text-xs leading-[170%] tracking-[-0.02em] uppercase text-[#8baab7] mb-2">
            Gustaf Nilsson Kotte in Flat Pack Tech
          </p>
          <p className="font-light text-base leading-[150%] text-[rgba(0,0,0,0.7)]">
            In my previous blog post, I wrote about the <br /> history of
            IKEA.com going from a <br /> monolithic e-commerce platform…
          </p>
          <p className="font-light text-base leading-[150%] text-[#8baab7] mt-2">
            12.08.23
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service