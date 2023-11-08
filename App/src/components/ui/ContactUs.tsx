import React from 'react';

type contactMeType={
  name:string,
  email:string,
  subject:string,
  message:string
}

function ContactUs() {
  const [textChange,setOnChangeText] = React.useState<contactMeType>({
    name: '',
    email:'',
    subject:'',
    message:''
  });

  const handleInputChange=async(e)=>{
    setOnChangeText({...textChange,[e.target.name]:e.target.value})

  };

  
  return (
    <section id="contacts-us">
      <div className="container">
        <div className="flex items-center flex-col">
          <div className="w-full sm:max-w-6xl p-3">
            <h1 
              data-aos="fade-down"
              data-aos-duration="1500"
              className="heading"
            >
                Contact Me
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
                <form
                 data-aos="fade-left"
                 data-aos-duration="1500"
                >
                  <div className=' bg-[#e5e3f5] px-2 py-3 rounded-md mb-3'>
                    <input 
                     type='text'
                     name='name'
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
                     value={textChange.name}
                     onChange={handleInputChange}
                     placeholder='Leave your message here'
                     className='px-3 placeholder:text-textColor text-[17px] w-full bg-transparent focus:outline-none'
                    />
                  </div>
                  <button 
                    type='submit'
                    className='py-2 bg-textColor w-full mt-3 text-white text-[18px] rounded-md font-light tracking-wider'
                  >
                      Send message
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs