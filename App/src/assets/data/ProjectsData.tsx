/* eslint-disable @typescript-eslint/no-explicit-any */
import project01 from '../project01.png';
import project02 from '../project02.png';
import project03 from '../project03.png';
import project04 from '../project04.png';
import project05 from '../project05.png';
import project06 from '../project06.png';

export type projectDataType={
    id:string,
    title:string,
    category:string,
    desc:string,
    technologies:Array<string>,
    complexity:string,
    duration:string,
    demoUrl:string,
    image:any,
    ratings:number
};


export const ProjectsData:projectDataType[] = [
    {
        id:"01",
        title:"Arcus Innovtion Hub",
        category:"Web Design",
        desc:`Arcus Innovation Hub is an Engineering Association founded by copperbelt university engineering students.
        The Association thrives for excellencey in innovation and research in finding ways and means to improve the lifes of people 
        using technology`,
        technologies:["React","Vite","Tailwind Css","Figma","Adobe Photoshop"],
        complexity:"easy",
        duration:"1/2 days",
        demoUrl:"/",
        image:project05,
        ratings:3
    },
    {
        id:"02",
        title:"Emzit Women Safety System",
        category:"Mobile Application",
        desc:`Emzit Women Safety System is an Android Mobile Application which was developed to curb the rapid increase 
        of anlawful activites agianst women in zambia. The mobile application uses Bluetooth Low Energy technology to exchange data
        with with a wrist custom made band....`,
        technologies:["React Native","Java","C++","Tailwind Css","Figma"],
        complexity:"hard",
        duration:"6 months",
        demoUrl:"/",
        image:project02,
        ratings:5
    },
    {
        id:"03",
        title:"Brain Teaser Quiz App",
        category:"Mobile Application",
        desc:`Brain Teaser is an Androd Quiz Moibile Application, it was developed with aim to simplify the students way of revisions during their 
        academic journies. The App uses external Restful APIs for questions`,
        technologies:["React Native","Java","Tailwind Css","Figma"],
        complexity:"intermediate",
        duration:"1 month",
        demoUrl:"/",
        image:project01,
        ratings:3
    },
    {
        id:"04",
        title:"Tourism of Zambia Guide",
        category:"Web Design",
        desc:`Tourism of zambia Guide is a website aimed at providing the manual documentation of the wonders of the world that
        our nation zambia has to local and international tourists. The platform has high resolution images of the natural resources 
        which your eyes cannot resist to see`,
        technologies:["PHP","Bootstrap-5","HML5","Css","JavaScript"],
        complexity:"intermediate",
        duration:"3 weeks",
        demoUrl:"/",
        image:project03,
        ratings:4
    },
    {
        id:"05",
        title:"My Seedlongs Garden",
        category:"Web Design",
        desc:`My Seedling garden is an ecommerce like platform, which is aimed at providing to customers the plaftorm to purchase and advertise 
        plants products, be it seeds or seedlings to plants lovers in our communities `,
        technologies:["React Expo","Java","Tailwind Css","Figma"],
        complexity:"intermediate",
        duration:"1 month",
        demoUrl:"/",
        image:project04,
        ratings:3
    },
    {
        id:"06",
        title:"Custom Made Wrist Band Simulation",
        category:"Other",
        desc:`The custom made writ band hardware device works hand in hand with the emzit mobile application. IT has 3 sensors
        which the user is required to attach on their body for the system to work properly. The communication between the emzit android mobile 
        application and the above hardware device is achieved via Bluetooth technology....`,
        technologies:["C++","DSB1820 Temp Sensor","EMG Sensor","Max30102 Pulse Sensor"],
        complexity:"complex",
        duration:"8 months",
        demoUrl:"/",
        image:project06,
        ratings:6
    },

];

