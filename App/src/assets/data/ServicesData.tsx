import React from 'react';
import {TbWorldWww} from 'react-icons/tb';
import {RiApps2Line} from 'react-icons/ri';
import {BiVideoRecording} from 'react-icons/bi';
import {PiBrandyLight} from 'react-icons/pi';

export type servicesDataType={
    id:string,
    title:string,
    projects_total:number,
    bg_color:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon:any
}

export const ServicesData:servicesDataType[]=[
    {
        id:"01",
        title:"Website Design",
        projects_total:10,
        bg_color:"#4a4468",
        icon:<TbWorldWww />
    },
    {
        id:"02",
        title:"Mobile App Design",
        projects_total:5,
        bg_color:"#cbcad8",
        icon:<RiApps2Line />
    },
    {
        id:"03",
        title:"Video & Audio Editing",
        projects_total:15,
        bg_color:"#7562e0",
        icon:<BiVideoRecording />
    },
    {
        id:"04",
        title:"Brand Identity",
        projects_total:3,
        bg_color:"#120845",
        icon:<PiBrandyLight />
    },
];

