import {RiYoutubeLine} from 'react-icons/ri';
import {BiLogoFacebookCircle,BiLogoGithub,BiLogoInstagram,BiLogoLinkedin} from 'react-icons/bi';

export type socialType={
    id:string,
    icon:any,
    url:string,
    name:string
}

export const  socialLinks:socialType[] = [
    {
        id:"01",
        icon:<BiLogoFacebookCircle />,
        url:'https://web.facebook.com/profile.php?id=100006558468416',
        name:'facebook'
    },
    {
        id:"02",
        icon:<BiLogoGithub />,
        url:'https://github.com/SIMZTECH',
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
        url:'https://linkedin.com/in/rodgers-simpemba-20498a140',
        name:'linked-in'
    }

];
