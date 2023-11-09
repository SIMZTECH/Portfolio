import { ServicesData} from '../../assets/data/ServicesData';
import ServiceItem from './ServiceItem';
import CountUp from 'react-countup';

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="w-full sm:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col space-y-4 sm:space-y-8">
              {ServicesData.map((item, index) => (
                <ServiceItem key={index} item={item} />
              ))}
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-8">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                className="heading sm:text-start"
              >
                What do i help?
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className=" leading-5 text-center sm:text-start sm:leading-7 text-textColor text-[15px] sm:text-[17px]"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos laboriosam quaerat officiis ipsum, harum inventore
                aperiam fugit fugiat eveniet doloremque labore nostrum ut modi!
                Delectus et consequuntur placeat eum omnis!
              </p>
              <div className="flex flex-wrap gap-3">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                  className="flex flex-col basis-[45%] text-center sm:text-start"
                >
                  <span className=" text-headingColor text-[25px] font-semibold leading-9">
                    <CountUp start={0} end={20} suffix="+" />
                  </span>
                  <p className=" text-textColor font-medium text-[15px]">
                    Projects Completed
                  </p>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                  className="flex flex-col basis-[45%] text-center sm:text-start"
                >
                  <span className=" text-headingColor text-[25px] font-semibold leading-9">
                    <CountUp start={0} end={25} suffix="+" />
                  </span>
                  <p className=" text-textColor font-medium text-[15px]">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services