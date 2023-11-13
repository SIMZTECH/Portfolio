/* eslint-disable @typescript-eslint/no-explicit-any */
import {RiAppsLine} from 'react-icons/ri';
import {FiArrowUpRight} from 'react-icons/fi';
import {BiSolidMessage,BiSolidPhoneCall} from 'react-icons/bi';
import heroImg01 from '../../assets/portfolioImg01.png';
import heroImg02 from '../../assets/portfolioImg02.png';
import { socialLinks,socialType } from '../../assets/data/SocialLinks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ribbon02 from '../../assets/ribbon02.png';
import CountUp from 'react-countup';


function Hero() {
  return (
    <section id="about">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-9 gap-5">
          <div className="flex flex-col md:col-span-2 mb-2 pb-3">
            <div className=" md:mb-5 mb-3">
              <h1
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                className=" text-headingColor font-[600] text-[1.6rem] md:text-[2.5rem] "
              >
                Hey There, <br />
                I'm Rodgers Simpemba
              </h1>
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="flex gap-4 mt-6 mb-3"
              >
                <div className=" md:pl-4 text-headingColor text-2xl">
                  <RiAppsLine />
                </div>
                <p className="text-[16px] md:text-[18px] leading-7 text-textColor font-light">
                  Am a <span className=' text-headingColor uppercase font-bold text-[19px]'>Full Stack Developer, </span>
                  Highly specialized in JavaScript, Java and PHP
                  Programming Languages. I also have extensive knowledge about 
                  computer hardware troubleshooting, and database design. Personally, I aim to leverage my abilities 
                  to successfully fill the vacancy an i am that kind of an individual who 
                  can be relied upon to help any team achieve its goals. 
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="flex items-center md:mt-9 mb-5 md:mb-3 md:gap-12 px-5 lg:px-3 justify-between md:justify-normal"
            >
              <button
                className="w-[110px] md:w-[130px] h-[38px]  md:h-[45px] rounded-sm  bg-subheadingColor 
                 text-white font-normal md:font-[500] text-[15px] md:text-[18px] hover:bg-headingColor ease-in duration-200 cursor-pointer"
              >
                Hire Me
              </button>

              <a href='#projects' className="flex font-normal md:font-[500] text-[15px] md:text-[18px] justify-center items-center 
               gap-2 w-[110px] md:w-[130px] h-[38px]  md:h-[45px] text-headingColor border-b-[2px] border-headingColor md:leading-9">
                <span>Portfolio</span>
                <FiArrowUpRight />
              </a>
            </div>
            <div className=" md:mt-16 mt-[30px] flex flex-col md:flex-row md:gap-5 gap-3 items-center">
              <h2 className=" text-headingColor font-medium">Check out my</h2>
              <div className="flex flex-1 items-center gap-4">
                {socialLinks.map((item:socialType, index:number) => (
                  <a
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-duration="1500"
                    href={item.url}
                    key={index}
                    className="flex items-center hover:bg-headingColor ease-in duration-200 
                    justify-center text-white text-[25px] bg-textColor w-8 h-8 rounded-full cursor-pointer"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative col-span-2">
            <div className='w-full flex items-end justify-end'>
              <figure className='w-[270px] md:w-full h-full'>
                <img src={heroImg01} alt="w-full" />
              </figure>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="absolute bg-white  rounded-md  shadow-md sm:top-1/2 z-10 top-1/3 px-2 sm:px-3"
            >
              <div className="w-full h-full flex flex-col md:space-y-2 md:py-5 space-y-1 py-4 p-4 md:p-3 rounded-md relative ">
                <div className="w-10 h-10 rounded-full bg-subheadingColor flex items-center justify-center self-center">
                  <img
                    src={heroImg02}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex items-center justify-center flex-col leading-5 md:leading-7">
                  <h1 className=" text-headingColor text-[13px] sm:text-[18px]">
                    Native-Camp
                    <sup className=" text-[8px] sm:text-[12px] text-headingColor">TM</sup>
                  </h1>
                  <h2 className=" text-textColor text-[11px] sm:text-[16px]">Software Developer</h2>
                </div>
                <div className="flex justify-between gap-4 mt-2">
                  <span>
                    <h4 className=" text-headingColor text-[12px] font-medium sm:text-[16px]">FOLLOWER</h4>
                    <p className="text-center text-headingColor font-semibold text-[14px] sm:text-[17px] mt-2">
                      <CountUp start={0} end={380} suffix="+" />
                    </p>
                  </span>
                  <span>
                    <h4 className=" text-headingColor text-[12px] font-medium sm:text-[16px]">
                      FOLLOWING
                    </h4>
                    <p className="text-center text-headingColor font-semibold text-[14px] sm:text-[17px] mt-2">
                      <CountUp start={0} end={80} suffix="+" />
                    </p>
                  </span>
                </div>
                <div className="absolute flex items-center -top-3 md:-top-5 -right-5 gap-3 transform -translate-x-1 -translate-y-1">
                  <span className="bg-white p-1 text-[20px] md:text-[25px] text-subheadingColor rounded-md shadow-md">
                    <BiSolidMessage />
                  </span>
                  <span className="bg-white p-1 text-[20px] md:text-[25px] text-subheadingColor rounded-md shadow-sm">
                    <BiSolidPhoneCall />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8 md:justify-between">
            <p 
            data-aos="fade-down"
            data-aos-duration="1500"
            className=" text-textColor text-[15px] text-center md:text-start md:text-[17px] leading-6 md:leading-7">
              I design and implement very beutiful simple things, And i love
              what i do.
            </p>
            <div 
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="flex items-center gap-3 md:mt-8 py-2 px-3 bg-white shadow-md">
              <span className="h-7 w-7 md:h-8 md:w-8 rounded-md bg-subheadingColor"></span>
              <h3 className=' text-textColor text-[14px] md:text-[16px]'>Bsc. Computer Science</h3>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex items-center justify-center flex-col gap-2">
              <figure>
                <img src={ribbon02} alt="" className="w-[70px] h-[90px] md:w-[80px] md:h-[100px]" />
              </figure>
              <p className='px-5 md:px-3 text-center text-[12px] md:text-[14px] text-textColor font-semibold'>
                NATIVE-CAMP CERTIFIED SOFTWARE DEVELOPER & UX/UI DESIGNER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;