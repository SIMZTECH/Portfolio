/* eslint-disable @typescript-eslint/no-explicit-any */
import project01 from '../project01.png';
import project02 from '../project02.png';
import project03 from '../project03.png';
import project04 from '../project04.png';

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
        title:"Lapanzi Company Profile",
        category:"Web Design",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["React","Vite", "Node Js","Express Js","Tailwind Css"],
        complexity:"medium",
        duration:"2 days",
        demoUrl:"/",
        image:project01,
        ratings:2
    },
    {
        id:"02",
        title:"Emzit Women Safety System",
        category:"Mobile Application",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["React Native","Java","C++","Tailwind Css","Figma"],
        complexity:"hard",
        duration:"6 months",
        demoUrl:"/",
        image:project02,
        ratings:4
    },
    {
        id:"03",
        title:"Brain Teaser Quiz App",
        category:"Mobile Application",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["React Native","Java","Tailwind Css","Figma"],
        complexity:"intermediate",
        duration:"1 month",
        demoUrl:"/",
        image:project01,
        ratings:3
    },
    {
        id:"04",
        title:"Warehouse Invetory Management System",
        category:"Web Design",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["Springboot","Java","Bootstrap-5","HML5","Css","JavaScript"],
        complexity:"hard",
        duration:"2 months",
        demoUrl:"/",
        image:project02,
        ratings:4
    },
    {
        id:"05",
        title:"Zesco Issue Tracker",
        category:"Web Design",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["Springboot","Java","Bootstrap-5","HML5","Css","JavaScript"],
        complexity:"medium",
        duration:"2 months",
        demoUrl:"/",
        image:project02,
        ratings:2
    },
    {
        id:"06",
        title:"Tourism of Zambia Guide",
        category:"Web Design",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["PHP","Bootstrap-5","HML5","Css","JavaScript"],
        complexity:"simple",
        duration:"2 weeks",
        demoUrl:"/",
        image:project03,
        ratings:3
    },
    {
        id:"07",
        title:"My Weather App",
        category:"Mobile Application",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["React Expo","Java","Tailwind Css","Figma"],
        complexity:"intermediate",
        duration:"1 month",
        demoUrl:"/",
        image:project01,
        ratings:1
    },
    {
        id:"08",
        title:"My Weather App",
        category:"Mobile Application",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["React Expo","Java","Tailwind Css","Figma"],
        complexity:"intermediate",
        duration:"1 month",
        demoUrl:"/",
        image:project01,
        ratings:2
    },
    {
        id:"09",
        title:"My Seedlongs Garden",
        category:"Web Design",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["React Expo","Java","Tailwind Css","Figma"],
        complexity:"intermediate",
        duration:"1 month",
        demoUrl:"/",
        image:project04,
        ratings:2
    },
    {
        id:"10",
        title:"Ama Trade Store UI Design",
        category:"Other",
        desc:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus consequuntur 
        a perferendis repellendus quisquam officiis obcaecati nam tempora voluptates sed nesciunt, 
        nobis vitae ut cum iure beatae dolorum eius?`,
        technologies:["Adobe photoshop","Figma"],
        complexity:"intermediate",
        duration:"3 days",
        demoUrl:"/",
        image:project02,
        ratings:3
    },



];

