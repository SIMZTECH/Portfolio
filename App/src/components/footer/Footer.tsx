import { route,socialLinks} from '../../assets/data/PathRouteData';


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className=" bg-textColor pt-12"
    >
      {/* footer top */}
      <div 
         data-aos="fade-up"
         data-aos-duration="2000"
        className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:1/2">
            <h2 className="text-[24px] leading-10 text-white font-[500] mb-5 md:text-[1.5rem]">
              Do you want to make excellent products?
            </h2>
            <button
              className="w-[110px] md:w-[130px] h-[38px]  md:h-[45px] rounded-sm  bg-headingColor  
                 text-white font-normal md:font-[500] text-[15px] md:text-[18px] hover:bg-subheadingColor 
                 ease-in duration-200 cursor-pointer "
            >
              Hire Me
            </button>
          </div>

          <div className="w-full sm:1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              unde, magnam debitis consequuntur esse deserunt earum autem vitae
              doloremque. Tempora in assumenda quos hic rerum eos. Eos
              reiciendis culpa non.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              {socialLinks.map((item, index) => (
                <span className="w-[33px] h-[33px] bg-[#2a2f3f] p-1 rounded-[50px] cursor-pointer text-center group hover:bg-headingColor ease-in duration-200">
                  <a
                    href={item.url}
                    key={index}
                    className="text-gray-400 font-[500] text-[25px] flex items-center justify-center group-hover:text-white"
                  >
                    {item.icon}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <ul className="flex items-center flex-wrap gap-10 ">
            {route.map((item, index) => (
              <li key={index}>
                <a href={item.path} className=" text-gray-400 font-[600]">
                  {item.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* footer bottom */}
      <div className=" bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-3">
                <span
                  className=" w-7 h-7 md:w-9 md:h-9 rounded-[8px] text-white bg-subheadingColor 
                  font-[400] lg:leading-7 leading-6 flex items-center justify-center md:text-[25px] text-[15px]"
                >
                  R
                </span>
                <div className=" leading-6 flex flex-col">
                  <h3 className=" text-gray-300 font-[400] lg:text-[16px] text-[15px]">
                    Rodgers Simpemba
                  </h3>
                  <p className=" text-[13px] lg:text-[15px] md:text-[15px] text-gray-300">
                    Portfolio
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by Rodgers - All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer