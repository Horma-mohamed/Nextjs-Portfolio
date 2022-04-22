//import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from 'react-icons/bs'
import array from "../functions/array"
import {GiStarFormation} from 'react-icons/gi'
import {useEffect,useState,useRef} from 'react'
import gsap from "gsap"
import moment from 'moment'
import readingTime from 'reading-time'
import axios from 'axios'
import {useInView} from 'react-intersection-observer'
import { postsListUrl } from "../utils/constans"

 function Home({data}){
    console.log((data))
    const container=useRef()
    const [ref,inView] = useInView()
    let pageNum = postsListUrl.substring(postsListUrl.length -1,)
    
    useEffect(async()=>{
        
        if(inView){
            gsap.timeline().from('.post',{x:-10,y:-10,opacity:0.3,duration:0.5,delay:0.2,stagger:0.3 })
        }

    },[])
    return(
        <section className="w-full py-4 mt-20" >
            <h1 className="text-2xl font-mono font-semibold underline p-4 text-gray-800 dark:text-gray-100">
                <span>
                Leastest Posts
                </span>
            </h1>
           
                <div  ref={ref} style={{rowGap:'20px'}} className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 ">
                {
                    data&&
                    data.results.map((post,index)=>(
                        <Link key={post.id} href={`${post.id}`}>
                        <a>
                        <div   className=" post w-full flex justify-center  ">
                            <div className="w-5/6 relative md:w-11/12 min-h-80 pb-2 rounded-md shadow-lg bg-gray-100 dark:bg-slate-700 overflow-hidden  " >
                            <div className={post.featured ?"absolute z-20   top-5 right-5 flex justify-center md:justify-between items-center w-7 h-7 bg-gray-800 bg-opacity-50 rounded-full md:w-24  md:h-7 md:pr-2":'hidden'}> 
                            <GiStarFormation className="text-amber-600 text-2xl " />
                            <div className=" text-gray-400 hidden md:inline " >
                                <p className=" text-md m-0.5 font-sans font-bold">Featured</p>
                            </div>
                            </div>
                                    
                            <div className="w-full h-40 overflow-hidden ">
                                <img className="w-full h-full" src={post.album.thumb} alt="" srcset="" />
                            </div>
                            <div className="w-full p-4 space-y-4">
                            <i className="text-purple-600 dark:text-purple-300 font-sans ">{post.category.name}</i>
                            <h1 className="text-gray-800 dark:text-gray-100 font- text-2xl">
                                { post.title }
                            </h1>
                            <h1 className="text-gray-600 font-sans pb-2 dark:text-gray-300 font- text-md space-x-4">
                                <span className="font-sans">{moment(post.created_at, "YYYYMMDD").fromNow()}</span>
                                <span className="font-sans" >{readingTime(post.content).text}</span>
                            </h1>
                            </div>
                            </div>
                        </div>
                        </a>
                        </Link>
                    ))
                    //:<div></div>
                    
                    
                }
                
            </div>
          
            <div className="w-full flex justify-center  mt-20">
                <div className='w-4/5 lg:w-2/5 flex justify-between' >
                <button disabled={data?.previous!= null ?false:true} onClick={ data?.previous != null ?()=>setPage(data.previous): ()=>{alert('this page dont has a previous')}} className={data?.previous != null ?`p-2 bg-gray-200 dark:bg-gray-600 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-300 transform duration-100  dark:hover:bg-gray-700`:"p-2 bg-gray-200 cursor-not-allowed opacity-60 dark:bg-gray-600 rounded-md text-gray-800 dark:text-gray-100  transform duration-100  dark:hover:bg-gray-700"}>Previous</button>
                <h1 className="text-xl text-gray-800 text-center  dark:text-gray-400 underline underline-offset-1">Page {pageNum=='/' ? 1 : pageNum} of {data?.count}</h1>
                <button disabled={data?.next!= null ?false:true} onClick={ data?.next != null ?()=>setPage(data.next): ()=>{alert('this page dont has a next')}} className={data?.next != null ?`p-2 bg-gray-200 dark:bg-gray-600 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-300 transform duration-100  dark:hover:bg-gray-700`:"p-2 bg-gray-200 cursor-not-allowed opacity-60 dark:bg-gray-600 rounded-md text-gray-800 dark:text-gray-100  transform duration-100  dark:hover:bg-gray-700"}>Next</button>
                </div>
            </div>
        </section>
    )
}


export async function getStaticProps(){
    const res= await fetch('http://localhost:8000/posts/')
    const data = await res.json()  
    return{
        props:{
            data,
        },
        revalidate:1
    }
}

export default Home