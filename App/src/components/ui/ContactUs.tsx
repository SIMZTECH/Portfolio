/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import HashLoader from "react-spinners/HashLoader";

type contactMeType={
  name:string,
  email:string,
  subject:string,
  message:string
}

function ContactUs() {
  const [loading,setLoading] = React.useState<boolean>(false);
  const [dataStatus,setDataStatus] = React.useState<boolean>(false);
  const [textChange,setOnChangeText] = React.useState<contactMeType>({
    name: '',
    email:'',
    subject:'',
    message:''
  });

  const handleInputChange=async(e:any)=>{
    setOnChangeText({...textChange,[e.target.name]:e.target.value})

  };

  const submitHandler=async(e:any)=>{
    e.preventDefault();

    // handle loader
    loaderHandler();
  };

  const loaderHandler=useCallback(()=>{

    setLoading(true);

    setTimeout(()=>{
      setLoading(false);
      // set data status
      setDataStatus(true);
    },2000)
      
  },[]);

  
  return (
    <section id="contacts-us">
      <div className="container">
        <div className="flex items-center flex-col">
          <div className="w-full sm:max-w-6xl p-3">
            <h1 
              data-aos="fade-down"
              data-aos-duration="1500"
              className="heading justify-start w-full text-start"
            >
                My current operation Area.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[35px] sm:mt-[55px]">
              <div 
                data-aos="fade-right"
                data-aos-duration="1500"
                className='flex items-center justify-center p-1'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.2372177773077!2d28.27891757432794!3d-15.417742913791786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f35ec1495a91%3A0x16528558a5265cf8!2sSociety%20Business%20Park!5e0!3m2!1sen!2szm!4v1699361293021!5m2!1sen!2szm"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className='w-full h-full border-none rounded-lg shadow-xl p-1'
                ></iframe>
              </div>
              {/* form */}
              <div>
                {dataStatus?(
                  <div className='w-full flex items-center justify-center h-[400px]'>
                    <span className=' w-[50%] text-center text-headingColor leading-7 font-medium text-[24px]'>Your message has been sent 😎</span>
                  </div>
                ):(
                  <form
                 onSubmit={submitHandler}
                 data-aos="fade-left"
                 data-aos-duration="1500"
                >
                  <div className=' bg-[#e5e3f5] px-2 py-3 rounded-md mb-3'>
                    <input 
                     type='text'
                     name='name'
                     required
                     value={textChange.name}
                     onChange={handleInputChange}
                     placeholder='Enter Your Name'
                     className='px-3 placeholder:text-textColor text-[17px] w-full bg-transparent focus:outline-none'
                    />
                  </div>
                  <div className=' bg-[#e5e3f5] px-2 py-3 rounded-md mb-3'>
                    <input 
                     type='email'
                     name='email'
                     required
                     value={textChange.email}
                     onChange={handleInputChange}
                     placeholder='Enter Your Email'
                     className='px-3 placeholder:text-textColor text-[17px] w-full bg-transparent focus:outline-none'
                    />
                  </div>
                  <div className=' bg-[#e5e3f5] px-2 py-3 rounded-md mb-3'>
                    <input 
                     type='text'
                     name='subject'
                     required
                     value={textChange.subject}
                     onChange={handleInputChange}
                     placeholder='Subject'
                     className='px-3 placeholder:text-textColor text-[17px] w-full bg-transparent focus:outline-none'
                    />
                  </div>
                  <div className=' bg-[#e5e3f5] px-2 py-3 rounded-md mb-3'>
                    <textarea 
                     rows={5}
                     name='message'
                     required
                     value={textChange.message}
                     onChange={handleInputChange}
                     placeholder='Leave your message here'
                     className='px-3 placeholder:text-textColor text-[17px] w-full bg-transparent focus:outline-none'
                    />
                  </div>
                  <button 
                    type='submit'
                    className='py-2 bg-textColor w-full mt-3 text-white text-[18px] rounded-md font-light tracking-wider'
                  >
                     {loading?<HashLoader color='white' size={25} />:` Send message`}
                  </button>

                </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs