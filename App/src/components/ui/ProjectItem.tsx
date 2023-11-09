/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { projectDataType } from '../../assets/data/ProjectsData';

type propsType={
    item:projectDataType,
    callback:Function,
    setId:Function,
};

function ProjectItem({item,callback,setId}:propsType) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      className="flex items-center flex-col flex-[35%] sm:flex-[35%] md: md:flex-[30%] relative z-[1] group"
    >
      <figure>
        <img src={item.image} alt="" className=" rounded-lg" />
      </figure>
      {/* opacity container */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[5] hidden  ease-in duration-150  group-hover:block">
        <div className='h-full w-full items-center justify-center  bg-headingColor rounded-lg bg-opacity-70 flex'>
          <button 
            onClick={()=>{
              callback(true);
              setId(item.id)
            }}
            className=" text-headingColor font-light sm:font-semibold py-2 px-2 sm:py-2 sm:px-4 bg-white text-[13px] 
          sm:text-[16px] subpixel-antialiased rounded-md hover:bg-headingColor hover:text-white ease-in duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem