import {useRouter} from 'next/router'
import {useState,useEffect,useRef} from 'react'
import Link from 'next/link'
import {Select} from '@chakra-ui/react'
import array from '../../functions/array'
import axios from 'axios'

import ReactMarkdown from 'react-markdown'
export default function project({data}){
    const router = useRouter()
    let {id} = router.query
     const [project,setProject] = useState({
        id:null,
        title:null,
        content:null,
        thumb:null,
        website:null,
    })
    useEffect(async()=>{
    const res =await axios.get('https://horma-portfolio.herokuapp.com/projects/'+id)
    const data = await res.data
        setProject(data) 
    })
   


    return(
        <div className="w-full relative z-10   min-h-screen  bg-gray-10 dark:bg-gray-800 flex justify-center items-center">
            <div className=" w-4/5 lg:w-1/2  my-40 ">
                    <div className="w-full mt-10">
                    <div className=" flex justify-between text-gray-800 dark:text-gray-100 text-md"><a href={project.website}  >{`${project.website}`}</a></div>
                        <div className="w-full  flex justify-between ">
                        <h1 className='text-3xl text-purple-800 dark:text-purple-400 py-10'>{project.title}</h1>
                        </div>
                        
                        
                        <div className='text-gray-800   dark:text-gray-100 text-base text-md'  >
                            <div className='relative z-10  '    dangerouslySetInnerHTML={{__html:project.content}} />
                        </div>
                        
                    </div>
                        
                        
            </div>
        </div>
    )
}


