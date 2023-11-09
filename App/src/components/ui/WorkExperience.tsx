import { formatDate } from '../../util/Utilities';
import {FaComputer, FaWpforms} from 'react-icons/fa6';
import {GiWorld} from 'react-icons/gi';
import {FaNetworkWired} from 'react-icons/fa';

function WorkExperience() {
  return (
    <section id="work-experience">
      <div className="container">
        <div className="flex items-center flex-col">
          <h1
            data-aos="fade-up" 
            data-aos-duration="1500" 
            className=" text-headingColor text-[25px] sm:text-[35px] font-medium mb-1 sm:mb-3">
            My Work Experience
          </h1>
          <div className="w-full sm:max-w-6xl  relative mt-3 sm:mt-8">
            {/* middle line */}
            <div className=" w-[0.8px] h-full bg-textColor absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            {/* 1st */}
            <div className="w-full flex gap-4 relative mb-8">
              {/* icon custom */}
              <div
                className="absolute w-8 h-8 rounded-full border -top-1 left-1/2 transform -translate-x-1/2
                            border-dotted border-subheadingColor flex items-center justify-center bg-white"
              >
                <span className="w-6 h-6 rounded-full bg-[#7562e0] flex items-center justify-center text-white">
                  <FaComputer />
                </span>
              </div>
              <div className="w-1/2">
                <div className=' w-[90%] pl-0 sm:pl-16'>
                  <div 
                    data-aos="fade-right" 
                    data-aos-duration="1500" 
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[16px] sm:text-[20px] font-medium'>Self-Employed, R&S Bussiness Center</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>{formatDate("05-30-2016",'')} - {formatDate("08-30-2018",'')}</p>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="w-1/2 text-start flex justify-end">
                <div className='  w-[90%]'>
                  <div 
                    data-aos="fade-left" 
                    data-aos-duration="1500"
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[17px] sm:text-[20px] font-medium'>Computer Typist</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                        eos saepe doloremque cum porro consequatur 
                        neque rerum tempora obcaecati! Fugiat minima odio illum a placeat 
                        inventore perferendis nulla sunt dolores!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd */}
            <div className="w-full flex gap-4 relative mb-8">
              {/* icon custom */}
              <div
                className="absolute w-8 h-8 rounded-full border -top-1 left-1/2 transform -translate-x-1/2
                            border-dotted border-subheadingColor flex items-center justify-center bg-white"
              >
                <span className="w-6 h-6 rounded-full bg-[#7562e0] flex items-center justify-center text-white">
                  <FaWpforms />
                </span>
              </div>
              <div className="w-1/2">
                <div className=' w-[90%] pl-0 sm:pl-16'>
                  <div 
                    data-aos="fade-right" 
                    data-aos-duration="1500" 
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[16px] sm:text-[20px] font-medium'>Shreeji Investments</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>{formatDate("11-02-2018",'')} - {formatDate("08-30-2019",'')}</p>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="w-1/2 text-start flex justify-end">
                <div className='  w-[90%]'>
                  <div 
                    data-aos="fade-left" 
                    data-aos-duration="1500"
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[17px] sm:text-[20px] font-medium'>Data Entry Clerk</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                        eos saepe doloremque cum porro consequatur 
                        neque rerum tempora obcaecati! Fugiat minima odio illum a placeat 
                        inventore perferendis nulla sunt dolores!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd */}
            <div className="w-full flex gap-4 relative mb-8">
              {/* icon custom */}
              <div
                className="absolute w-8 h-8 rounded-full border -top-1 left-1/2 transform -translate-x-1/2
                            border-dotted border-subheadingColor flex items-center justify-center bg-white"
              >
                <span className="w-6 h-6 rounded-full bg-[#7562e0] flex items-center justify-center text-white">
                  <GiWorld />
                </span>
              </div>
              <div className="w-1/2">
                <div className=' w-[90%] pl-0 sm:pl-16'>
                  <div 
                    data-aos="fade-right" 
                    data-aos-duration="1500" 
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[16px] sm:text-[20px] font-medium'>Seventh Day Adventist Church</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>{formatDate("09-02-2022",'')} - {formatDate("12-25-2022",'')}</p>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="w-1/2 text-start flex justify-end">
                <div className='  w-[90%]'>
                  <div 
                    data-aos="fade-left" 
                    data-aos-duration="1500"
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[17px] sm:text-[20px] font-medium'>Web Manager</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                        eos saepe doloremque cum porro consequatur 
                        neque rerum tempora obcaecati! Fugiat minima odio illum a placeat 
                        inventore perferendis nulla sunt dolores!
                    </p>
                  </div>
                </div>
              </div>
            </div>

             {/* 4th */}
             <div className="w-full flex gap-4 relative mb-8">
              {/* icon custom */}
              <div
                className="absolute w-8 h-8 rounded-full border -top-1 left-1/2 transform -translate-x-1/2
                            border-dotted border-subheadingColor flex items-center justify-center bg-white"
              >
                <span className="w-6 h-6 rounded-full bg-[#7562e0] flex items-center justify-center text-white">
                  <FaNetworkWired />
                </span>
              </div>
              <div className="w-1/2">
                <div className=' w-[90%] pl-0 sm:pl-16'>
                  <div 
                    data-aos="fade-right" 
                    data-aos-duration="1500" 
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[16px] sm:text-[20px] font-medium'>Emsef Enterprise</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>{formatDate("09-25-2023",'')} - To Date</p>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="w-1/2 text-start flex justify-end">
                <div className='  w-[90%]'>
                  <div 
                    data-aos="fade-left" 
                    data-aos-duration="1500"
                    className='flex flex-col space-y-1'>
                    <h2 className=' text-headingColor text-[17px] sm:text-[20px] font-medium'>IT Assistant</h2>
                    <p className=' text-textColor text-[13px] sm:text-[15px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                        eos saepe doloremque cum porro consequatur 
                        neque rerum tempora obcaecati! Fugiat minima odio illum a placeat 
                        inventore perferendis nulla sunt dolores!
                    </p>
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

export default WorkExperience