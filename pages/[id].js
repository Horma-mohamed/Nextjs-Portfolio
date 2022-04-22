import { useState,useEffect, useContext } from "react"
import { useRouter } from "next/router"
import axios from 'axios'
import navContext from "../Contexts/navContext"

import {GrReturn } from 'react-icons/gr'


function Post(){
    const [post,setPost]=useState({})
    const [comments,setComments]=useState([])
    const router = useRouter()
    const {id} = router.query
    useEffect(async()=>{
        const res = await axios.get(`https://horma-portfolio.herokuapp.com/posts/${id}`)
        const data = await res.data
        setPost(data)
    })
    return(
        <>
        
        <div className="w-screen min-h-screen bg-white dark:bg-gray-800 relative " >

            <div className="w-full flex justify-center items-center mb-40 ">
            <div className="lg:w-1/2 w-4/5  mt-40   ">
                <div className="w-full max-h-80 overflow-hidden">
                    <img className="w-full"  src={post.thumb} alt="" />
                </div>
                <h1 className="text-gray-800 m-1 dark:text-gray-100 text-2xl lg:text-4xl">
                    {post.title}
                </h1>
                <div className="mt-4 w-full font-sans text-gray-800 dark:text-gray-100 text-justify  " dangerouslySetInnerHTML={{__html: post.content }} />
            </div>
           
            </div>
            <div className="w-full flex justify-center">
            <div className="lg:w-1/2 w-4/5  mt-40" >
       
    </div>
            </div>
        </div>
       
    </>
    )
}
export default Post