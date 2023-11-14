import React, { useEffect } from 'react';
import { ProjectsData,projectDataType } from '../../assets/data/ProjectsData';
import ProjectItem from './ProjectItem';
import Modal from './Modal';

function Projects() {
  const [projects,setProjects] = React.useState<projectDataType[]>(ProjectsData);
  const [showCount,setShowCount] = React.useState<number>(6);
  const [currentTab,setCurrentTab] = React.useState<string>("All");
  const [isModalOpen,setIsModalOpen] = React.useState<boolean>(false);
  const [projectId,setProjectID] = React.useState<string>('');

  const currentTabHandler=(flag:string)=>{
    setCurrentTab(flag);
  };

  useEffect(()=>{

    if(currentTab==="All"){
      setProjects(ProjectsData);
    }

    if(currentTab==="Mobile Apps"){
      const filteredData = ProjectsData.filter((item)=>item.category==="Mobile Application")
      setProjects(filteredData);
    }

    if(currentTab==="Websites"){
      const filteredData = ProjectsData.filter((item)=>item.category==="Web Design")
      setProjects(filteredData);
    }

    if(currentTab==="Editing"){
      const filteredData = ProjectsData.filter((item)=>item.category==="Editing")
      setProjects(filteredData);
    }

    if(currentTab==="Other"){
      const filteredData = ProjectsData.filter((item)=>item.category==="Other")
      setProjects(filteredData);
    }

  },[currentTab]);


  return (
    <section id="projects">
      <div className="container">
        <div className="flex items-center flex-col">
          <div className="w-full sm:max-w-6xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
              <div>
                <h1 
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="heading">My Latest Works</h1>
                <p 
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="100"
                  className=" text-textColor sm:text-[16px] text-[14px]">
                  Perfect solution for digital experience
                </p>
              </div>
              <div 
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex items-center gap-2 sm:gap-3 sm:flex-wrap">
                <button 
                  onClick={()=>currentTabHandler("All")}
                  className={`flex group hover:bg-subheadingColor ${currentTab==="All"?'bg-subheadingColor text-white':''} hover:text-white ease-in duration-200 text-textColor 
                  font-medium text-[12px] sm:text-[16px] items-center justify-center px-3 rounded-sm py-1 border border-solid border-subheadingColor`}>
                  All
                </button>
                <button 
                  onClick={()=>currentTabHandler("Mobile Apps")}
                  className={`flex hover:bg-subheadingColor ${currentTab==="Mobile Apps"?'bg-subheadingColor text-white':''} hover:text-white ease-in duration-200 text-textColor font-medium 
                  text-[12px] sm:text-[16px] items-center justify-center px-2 sm:px-3 rounded-sm py-1 border border-solid border-subheadingColor`}>
                  Apps
                </button>
                <button 
                  onClick={()=>currentTabHandler("Websites")}
                  className={`flex hover:bg-subheadingColor ${currentTab==="Websites"?'bg-subheadingColor text-white':''} hover:text-white ease-in duration-200 text-textColor 
                  font-medium text-[12px] sm:text-[16px] items-center justify-center px-3 rounded-sm py-1 border border-solid border-subheadingColor`}>
                  Websites
                </button>
                <button 
                  onClick={()=>currentTabHandler("Editing")}
                  className={`flex hover:bg-subheadingColor hover:text-white ease-in duration-200 text-textColor font-medium ${currentTab==="Editing"?'bg-subheadingColor text-white':''} 
                  text-[12px] sm:text-[16px] items-center justify-center px-3 rounded-sm py-1 border border-solid border-subheadingColor`}>
                  Editing
                </button>
                <button 
                  onClick={()=>currentTabHandler("Other")}
                  className={`flex hover:bg-subheadingColor hover:text-white ease-in duration-200 text-textColor ${currentTab==="Other"?'bg-subheadingColor text-white':''} 
                  font-medium text-[12px] sm:text-[16px] items-center justify-center px-3 rounded-sm py-1 border border-solid border-subheadingColor`}>
                  Other
                </button>
              </div>
            </div>
            {/* projects container */}
            <>
              {projects.length>0 ? (
                <div className=" mt-8 flex items-center flex-wrap gap-3 sm:gap-4">
                  {projects.slice(0, showCount).map((item, index) => (
                    <ProjectItem item={item} key={index} callback={setIsModalOpen} setId={setProjectID}/>
                  ))}
                </div>
              ) : (
                <div className="mt-8 flex items-center justify-center py-5">
                  <span className=' text-headingColor font-medium text-[16px] sm:text-[19px]'>No {currentTab} Projects Available</span>
                </div>
              )}
            </>
            {/* show more btn */}
            <div className="flex items-center justify-center mt-6">
              {showCount <= projects.length && (
                <button
                  onClick={() => setShowCount((prev) => prev + 3)}
                  className="flex items-center justify-center py-2 px-4 self-center group hover:bg-headingColor 
            bg-textColor text-white text-[15px] sm:text-[17px] font-light rounded-md cursor-pointer ease-in duration-200"
                >
                  Load more
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {isModalOpen &&<Modal projectId={projectId} callback={setIsModalOpen} />}

    </section>
  );
}

export default Projects