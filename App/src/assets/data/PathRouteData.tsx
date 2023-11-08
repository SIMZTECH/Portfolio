import {RiYoutubeLine} from 'react-icons/ri';
import {BiLogoFacebookCircle,BiLogoGithub,BiLogoInstagram,BiLogoLinkedin} from 'react-icons/bi';

export type cuRouteType={
    id:string
    display:string,
    path:string
  };
  
  export const route:cuRouteType[] =[
    {
      id:"01",
      display:"About",
      path:"#about"
    },
    {
      id:"02",
      display:"Services",
      path:"#services"
    },
    {
      id:"03",
      display:"Portfolio",
      path:"#projects"
    },
    {
      id:"04",
      display:"Works",
      path:"#work-experience"
    },
    {
      id:"05",
      display:"Contact Me",
      path:"#contacts-us"
    },
  ];

  export type socialType={
    id:string,
    icon:any,
    url:string,
    name:string
  }
  
  export const socialLinks:socialType[]=[
    {
        id:"01",
        icon:<BiLogoFacebookCircle />,
        url:'',
        name:'facebook'
    },
    {
        id:"02",
        icon:<BiLogoGithub />,
        url:'',
        name:'github'
    },
    {
        id:"03",
        icon:<RiYoutubeLine/>,
        url:'',
        name:'youtube'
    },
    {
        id:"04",
        icon:<BiLogoInstagram />,
        url:'',
        name:'instagram'
    },
    {
        id:"05",
        icon:<BiLogoLinkedin />,
        url:'',
        name:'linked-in'
    }
  ];
  