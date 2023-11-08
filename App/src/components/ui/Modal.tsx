/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { projectDataType,ProjectsData } from '../../assets/data/ProjectsData';
import {AiFillStar, AiOutlineClose} from 'react-icons/ai';

type propsType={
    projectId:string,
    callback:Function
}

function Modal({projectId,callback}:propsType) {
  const foundProject:projectDataType = ProjectsData.find((project)=>project.id==projectId);


  return (
    <div className="fixed h-full w-full left-0 top-0 bg-headingColor bg-opacity-30 z-10 ">
      <div className="bg-white sm:w-[450px] md:w-[500px] w-[330px] absolute left-1/2 sm:top-1/4 md:top-1/3 top-1/4 transform -translate-x-1/2 sm:-translate-y-1/4 md:-translate-y-1/3 -translate-y-1/4 rounded-lg">
        <div className="relative w-full sm:px-4 px-2 py-2 sm:py-2">
          <figure className='relative'>
            <img src={foundProject.image} alt="" className="rounded-lg" />
            {/* close button */}
            <button 
              onClick={()=>callback(false)}
              className='absolute z-40 sm:top-2 sm:right-2 top-1 right-2 sm:w-8 sm:h-8 w-7 h-7 bg-white rounded-full 
              flex items-center justify-center text-[20px] text-headingColor font-medium leading-7'><AiOutlineClose/></button>
          </figure>
          <div className="flex flex-col space-y-2 py-2">
            <h2 className="text-[20px] sm:text-[23px] sm:leading-7 leading-5 font-normal sm:font-medium text-headingColor">
              {foundProject.title}
            </h2>
            <p className="text_para ">{foundProject.desc}</p>
            <div className="flex flex-col  gap-1 sm:gap-2">
              <h4 className="text-[16px] sm:text-[15px] text-headingColor leading-5 sm:leading-7 sm:font-medium font-normal">
                Technologies
              </h4>
              <div className='flex items-center gap-1 md:justify-between flex-1'>
                {foundProject.technologies.map((item, index) => (
                  <span
                    className="md:px-2 px-1 py-1 bg-blue-100 rounded-sm text-headingColor text-[12px] sm:text-[15px]"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex px-2 flex-col gap-1'>
                  <h5>Ratings</h5>
                  <div className='flex items-center gap-2 px-2 py-1 bg-blue-50 rounded-md text-headingColor font-medium'>
                    {[...Array(foundProject.ratings).keys()].map((_,index)=>(
                      <span className='flex items-center justify-center text-[16px] text-yellow-600' key={index}>
                        <AiFillStar />
                      </span>
                    ))
                    }
                  </div>
                </div>
                <div className='flex px-2 flex-col gap-1'>
                  <h5>Duration</h5>
                  <p className='px-2  bg-blue-50 rounded-md text-headingColor text-[16px] font-medium'>{foundProject.duration}</p>
                </div>
                <div className='flex px-2 flex-col gap-1'>
                  <h5>Complexity</h5>
                  <p className='px-2  bg-blue-50 rounded-md text-headingColor text-[16px] font-medium'>{foundProject.complexity}</p>
                </div>

              </div>
          </div>
          <button className='flex items-center justify-center w-[100px] cursor-pointer hover:bg-subheadingColor ease-in duration-200 
            h-10 text-[16px] bg-textColor text-white  leading-7 tracking-wider mt-2 mb-2 mx-auto'
          >
            Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal