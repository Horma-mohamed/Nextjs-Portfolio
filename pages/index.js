//import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import {Center ,Box, Text , Flex, Link,List ,Grid,GridItem,Badge,ListItem,ListIcon , Input,Textarea,HStack,Button} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import {BsFillGearFill} from 'react-icons/bs'
import{AiFillYoutube}from 'react-icons/ai'
import{FaGithubSquare}from 'react-icons/fa'
import {BsLinkedin,BsFillPlayFill} from 'react-icons/bs'
import {FaFacebook,FaTwitter} from 'react-icons/fa'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { useContext, useEffect,useRef, useState } from 'react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import {useAnimation, motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import HomeProjects from '../sections/HomeProjects'
import HomePostes from '../sections/HomePostes'
import {gsap,Power2,Power1 } from 'gsap'
import HomeAboutMe from '../sections/HomeAboutMe'
import HomeContact from '../sections/HomeContact'
import ReactTypingEffect from 'react-typing-effect'
import axios from 'axios'
import TypingWriter, { AsyncTypingWriter } from "typingwriter";
import TypeWriter from '../includes/TypeWriter'
import {SiYoutube,SiGithub,SiLinkedin} from 'react-icons/si'
import navContext from '../Contexts/navContext'


export default function Home({dark,data,}) {
  const control = useAnimation()
  const context = useContext(navContext)

  //var audio =  new Audio('/audios/audio1.mp3') 
  const [socialAccount,setSocialAccount]=useState([])
  const audio = typeof Audio !== "undefined" ? new Audio("/audios/audio1.mp3") : undefined
  const under = useRef()
  const hi = useRef()
  const box = useRef()
  const [isPlay,setIsPlay] = useState(false)
  const timeline = gsap.timeline()
  useEffect( () => {
    timeline.to(box.current,{width:'175px',duration:1,},2)
    .to(under.current,{opacity:0})
    .from(hi.current,{y:60,duration:1,ease:Power2 })
    .from(under.current,{opacity:0,duration:1,ease:Power1,repeat:-1})
    context.setVisible(true)
    axios.get('https://horma-portfolio.herokuapp.com/social-accounts/').then((resp)=>resp.data).then(()=>setSocialAccount(data))
  },[])
  function playAudio(){
    if(isPlay){
        audio.play()
    }
    else{
      audio.pause()
    }
  }
  
  return (
    <div   className="home flex justify-center relative dark:bg-gray-800  " >
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/profile.png" />
      </Head>
        
        <div className="sections relative w-full md:w-2/3  pb-20 ">
          <motion.div initia  className="w-10 h-80 fixed hidden md:block top-20 space-y-4 lg:left-40 md:left-10 bg-gray-00">
            {
            //g
            }
          </motion.div>
         
        <div className='w-full mt-20 mb-20 md:mb-10 bg-gray-00 md:flex ' >
          <div  className='  w-full md:h-80  text-4xl text-gray-800 p-4 font-mono  overflow-hidden' >
            <div ref={hi} className=' w-full'>
            <h1  className=' hi  -7xl inline-block  mt-10 dark:text-gray-100 ' > Hi,I'm Mohamed. </h1>
            
            <br />
            <span className="text-gray-800 dark:text-gray-100">I'm  <ReactTypingEffect
            className=' dark:text-gray-100 text-3xl'
            typingDelay={4}
            text={['a Fullstack developer ','a Web Developer' ,'an Artist']}
            /> </span>
            {/* <TypeWriter text='Hi , Im Mohamed ' c=' |' delayChar={1000} delay={0}/> */}
            {/*<span> I'm A Web Dev Muhammed</span>
            <ReactTypingEffect
            className='hi dark:text-gray-100'
            typingDelay='10s'
            text={['a Fullstack web developer ','a Web Developer']}
            />
            
            */}
            <span className=" text-gray-800 dark:text-gray-100 opacity-100" id="title"></span>
            
            <span ref={under} className='text-gray-800 hidden' >_</span>
            </div>
            
            <div style={{zIndex:1000}} ref={box} className="box h-1 hidden bg-gray-800  dark:bg-gray-100  absolute bottom-0 left-0 " ></div>
          </div>
            
          <div className="w-full  flex justify-center mr-20">
            <img className=' w-80 md:w-72  md:absolute top-5 md:right-5  right-20' src='/assets/img.png'/>
          </div>
        </div>
        <div style={{paddingBottom:40}} className="space-y-20 mt-1">
        <HomeProjects/>
        <HomePostes Data={data} />
        </div>
        </div>
    </div>
  )
}

export async function getStaticProps(){ 
  
  const res= await fetch('https://horma-portfolio.herokuapp.com/posts/')
  const data = await res.json()  
  return{
      props:{
          data,   
      },
      revalidate:1
  }
}









