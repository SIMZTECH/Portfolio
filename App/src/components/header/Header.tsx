/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useEffect,useRef} from 'react';
import "../../App.css";
import {BiPhoneCall} from 'react-icons/bi';
import {FiMenu} from 'react-icons/fi';
import { route } from '../../assets/data/PathRouteData';


function Header() {
  const [activeTab,setActiveTab]=React.useState<string>(route[0].id);
  const headRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const stickHeaderHandler=()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop>80||document.documentElement.scrollTop>80){
        headRef.current?.classList.add("sticky_header");
      }else{
        headRef.current?.classList.remove("sticky_header");
      }

    });
  };

  const toggleMenu = ()=>menuRef.current?.classList.toggle('show_menu');

  const handleClick=(e:any)=>{
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top:location-80,
      left:0
    });
  };

  useEffect(()=>{
    stickHeaderHandler();

    return ()=>window.removeEventListener("scroll",stickHeaderHandler);
  },[]);


  return (
    <header 
      ref={headRef}
      className="w-full">
      <div className="container py-3 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className=" w-7 h-7 md:w-9 md:h-9 rounded-[8px] text-white bg-subheadingColor 
            font-[400] lg:leading-7 leading-6 flex items-center justify-center md:text-[17px] text-[15px]"
            >
              R
            </span>
            <div className=" leading-5 flex flex-col">
              <h3 className=" text-headingColor font-[400] sm:text-[15px] text-[13px]">
                Rodgers Simpemba
              </h3>
              <p className=" sm:text-[13px] text-[11px] text-textColor">Portfolio</p>
            </div>
          </div>
          <div className="navigation lg:flex-1 lg:items-center lg:justify-center lg:flex" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-4 ">
              {route.map((item, index) => (
                <li
                  className={`px-5 text-center ${item.id!==activeTab?' hover:border-b-[2px] hover:border-headingColor':''} 
                  flex items-center group cursor-pointer justify-center ${item.id===activeTab?' border-b-[2px] border-solid border-headingColor':''}`}
                  key={index}
                  onClick={()=>{
                    setActiveTab(item.id);
                    handleClick;
                  }}
                >
                  <a
                    href={item.path}
                    className=" text-[16px] sm:text-[16px] text-textColor hover:text-headingColor ease-in duration-300"
                  >
                    {item.display}
                  </a>
                </li>
                
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-5">
            <div className="flex items-center gap-3">
              <span className="text-[14px] sm:text-[16px] text-textColor font-[500] hidden md:block">
                +260 969-718-806
              </span>
              <div className=" text-[20px] rounded-full bg-subheadingColor text-white shadow-lg p-3 cursor-pointer">
                <BiPhoneCall />
              </div>
            </div>
            <button 
            onClick={toggleMenu}
              className='flex items-center justify-center text-[35px] text-headingColor md:hidden'>
              <FiMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header