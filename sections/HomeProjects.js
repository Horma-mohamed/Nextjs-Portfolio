import { motion } from "framer-motion"
import { useEffect, useRef,useState } from "react"
import { BsArrowRight } from 'react-icons/bs'
import array from "../functions/array"
import useMouse from '../functions/useMouse'
import Link from 'next/link'
export default function(){
    const pro = useRef()
    //const {x,y}= useMouse()
    const [projects,setProjects]=useState([])
    const [mousePosition,setMousePosition]=useState({
        x:null,
        y:null
    })
    const variantsTitle={
        hidden:{
            translateX:'-10px',
            translateY:-10,
            opacity:0
        },
        visible:{
            translateX:0,
            translateY:0,
            opacity:1,
            transition:{
                duration:0.5,
            },
        }
    }

    useEffect(()=>{
        fetch('https://horma-portfolio.herokuapp.com/projects/')
        .then(res=>res.json())
        .then(data=> setProjects(data))

    })

    
    
    return(
        <section className="w-full   " >
            <h1 className="text-3xl font-mono font-semibold  px-4 py-8 dark:text-gray-100 text-gray-800">
                <motion.span variants={variantsTitle} initial='hidden'  animate='visible' >
                Selected Projects
                </motion.span>
            </h1>
            <div className=" relative w-full grid grid-cols-1 md:grid-cols-2 gap-y-2">
                {
                projects.map((project,i)=>(
                        <Link href={`/projects/${project.id}`}>
                           <a >
                           <div  className=" group relative w-full h-24 flex justify-center   bg-gray-00   ">
                            <div ref={pro}  className="  absolute right-14 overflow-hidden  duration-300  opacity-0 group-hover:opacity-100 w-40  bg-gray-400">
                                    <img src={project.thumb} alt="img not found" srcset="" />
                            </div>
                            <div className="w-5/6 relative space-y-2 ">
                            <h1 className="text-xl dark:text-gray-100 text-gray-800 ">
                                {project.title}
                            </h1>
                            <p className="text-md text-purple-600 drk:text-gray-300 font- mb-2 font-sans  ">
                                {project.category.name}
                            </p>

                            <hr  className="  border-gray-800 dark:border-gray-200   " />
                            <BsArrowRight className='absolute group-hover:translate-x-5 transform duration-200 right-5 top-5 text-xl dark:text-gray-300 ' />
                            </div>
                        </div>
                           </a>
                        </Link>
                    ))
                }
                
            </div>
        </section>
    )
}