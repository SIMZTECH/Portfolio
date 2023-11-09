import { servicesDataType } from '../../assets/data/ServicesData';
type propType={
    item:servicesDataType
};

function ServiceItem({item}:propType) {
  return (
    <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
        className='flex flex-col sm:flex-row gap-2 sm:gap-5 items-center w-full py-1 px-2'>
        <span 
            style={{background:item.bg_color}}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-[20px] sm:text-[25px]`}>
            {item.icon}
        </span>
        <div className='flex flex-col justify-center leading-5'>
            <h1 className=' text-headingColor font-[600] text-[15px] sm:text-[17px]'>{item.title}</h1>
            <p className=' text-textColor text-[14px] sm:text-[15px] text-center sm:text-start'>{item.projects_total} Projects</p>
        </div>
    </div>
  )
}

export default ServiceItem