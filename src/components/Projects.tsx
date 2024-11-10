import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data = [
    {
        id: 0,
        title:"TODO LIST",
        desc:"A React ans Typescript app for managing and organizing our dealy routine task more efficiently.By using this we cant forget any of our task which help us to achieve our GOALS. ",
        img:"/my todo list.jpg",
        tags: ["React", "Node", "Css", "Typescript"],
    },
    {
        id: 1,
        title:"COUNTDOWN TIMER",
        desc:"A Next.js and Typescript powered website to track time which is consumed by us in different tasks to be performed.By using this we can manage our time efficientlly and can easly track the time taken to perform certain task and progress OURSELVES.",
        img:"/countdown timer.jpg",
        tags: ["Next.js", "Node", "Css", "Typescript"],
    },
    {
        id: 2,
        title:"WEATHER WIDGET",
        desc:"A Next.js and Typescript based tool for fetching and discribing the accurate condition of weather of your locality.The webpage fetches data from the internet confirms it and the shows it to you for your safety.This process is done within seconds and you can see the most ACCURATE WEATHER.",
        img:"/weather widget.jpg",
        tags: ["Next.js", "Node", "Css", "Typescript"],
    },
    {
        id: 3,
        title:"CURRENCY CONVERTER",
        desc:"A simple Html and Typescript powered tool for converting huge amounts of different currencys to another currencys.We can convert upto all currency present in the world to any currency we want it does not require any 3rd-party website to perform the task.It is very useful for huge currency converions in SECONDS.",
        img:"/currency convertor.jpg",
        tags: ["Html", "Node", "Css", "Typescript"],
    },
    {
        id: 4,
        title:"STATIC INTERECTIVE RESUME",
        desc:"A Typescript-based interective resume built with html and css.In this i have made the hackathone given by the giaic program GOVERNOR SINDH AI INITIATIVE OF WEB-DEVELOPMENT AND METAVERSE.I have made this webpage using typescript,node,html and css.",
        img:"/static resume.jpg",
        tags: ["Next.js", "Node", "Css", "Typescript"],
    },
    {
        id: 5,
        title:"CALCULATOR",
        desc:"A basic html,css and typescripy calculator .I made this to acknowledge my capabilities and also we can calculate numbers. It was made by me on demand of governor initiative of artificial inteligence course.",
        img:"/calculator.jpg",
        tags: ["Html", "Node", "Css", "Javascript"],
    },

];

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
     <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
    />))}
     </div>
    </div>
  )
}

export default projects
