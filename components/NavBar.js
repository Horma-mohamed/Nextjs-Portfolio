import {useEffect, useState, useRef, useContext} from 'react'
import {GiLightBulb} from 'react-icons/gi'
import Link from 'next/link'
import Image from 'next/image'
import {SiYoutube,SiGithub,SiLinkedin} from 'react-icons/si'
import {gsap,Power2} from 'gsap'
import navContext from '../Contexts/navContext'
import {IoIosArrowDown,IoLogoYoutube,IoLogoLinkedin,IoIosQuote} from 'react-icons/io'
import {FaGithubAlt} from 'react-icons/fa'
import {MdOutlineMail}from 'react-icons/md'
import {BsFillLightningChargeFill} from 'react-icons/bs' 
import axios from 'axios'



export default function  NavBar({dark,setDark,}){
    const visible = useContext(navContext)
    const [open,setOpen] = useState(false)
    const [scrollY,setScrollY] = useState(0)
    const [scrollY2,setScrollY2] = useState(0)
    const [visiblity,setVisiblity] = useState()
    const style = open ? ' hidden ': 'w-10 h-10'
    const [quote,setQuote] = useState()
    const [socialP,setSocialP] = useState()
    //let quote
    const DarkBtn = useRef()
    
    
    useEffect(()=>{
        setVisiblity(visible.visible?'visible':'hidden')
    },[visible.visible])
    var translate 
    
    var bg
    if(scrollY>0)
    {
       bg = 'nav'
       if(open){
           bg='  '
       }
    }
    if(scrollY>scrollY2 ){
        if(open){
            translate = ' translate-y-0 '
        }
        else{
            translate = '-translate-y-40'
        }
    }
    else{
        translate= 'translate-y-0'
    }
    let menuStyles = ' absolute top-20 p-4 bg-gray-700 bg-opacity-60  md:hidden w-screen bg-gray transform duration-500  space-y-4  '
    var icon = dark? <BsFillLightningChargeFill className='text-purple-600' /> :<BsFillLightningChargeFill className=' text-yellow-600' />
    var darkToggleStyle = ' dark:bg-gray-100 w-6 h-6 flex justify-center items-center rounded-full absolute top-0 bg-gray-600  transform duration-500 '

    const  mainTimeLine = gsap.timeline()
    const light=()=>{
        if(dark){
            gsap.to(DarkBtn.current,{rotate:'-360',duration:0.7,delay:0.2})
        }
        else{
            gsap.to(DarkBtn.current,{rotate:'360',duration:0.7,delay:0.2})
        }
    }
    useEffect(()=>{
        window.onscroll = ()=>{
             setScrollY(window.scrollY)
            setTimeout(() => {
                 setScrollY2(scrollY)
                 setScrollY(window.scrollY)
                //console.log(scrollY2,scrollY)
            }, 500);

        }
    },[scrollY])
    function randomI(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const changeQuote=()=>{
        var i = randomI(0,99)
         axios.get('https://type.fit/api/quotes').then((res)=>res).then((data)=>{
            setQuote(data.data[i])
            console.log(data.data[i].text)
            console.log(i)
        })
        //console.log(quote)

    }
    useEffect(()=>{open?changeQuote():null},[open])
    useEffect(()=>{
        axios.get('https://horma-portfolio.herokuapp.com/social-accounts/').then((res)=>res.data).then((data)=>{
            setSocialP({
                github :data[0],
                youtube: data.filter(d=>d.socialPlatform =='Youtube')[0],
                linkedin: data.filter(d=>d.socialPlatform =='Linkedin')[0],
                gmail: data.filter(d=>d.socialPlatform =='Gmail')[0]

            })
            console.log(data)

        })
    },[])
    return(



            <>
                <div style={{translate:open?0:''}}  className={ ` w-screen flex justify-center  transform duration-500   p-4 absolute z-40 ${bg} ${visiblity} ${translate} `} >
                <div className=' z-40  w-11/12 md:w-2/3 lg:w-8/12  flex justify-between items-center '   >
                    <div  className='flex space-x-14 items-center '  >
                        <div  className={` rounded-full ${style}   z-30 bg-gray-00 overflow-hidden`}>
                                <Image width='100%' height='100%' className={open ?``:``} src="/profile.png" alt=" no img found" />
                        </div>
                        <ul  className="  md:static  items-center     md:space-x-8 mx-2  md:flex hidden  ">
                        <li   className="link text-xl text-gray-800 dark:text-gray-100 relative before:absolute hover:before:w-full before:w-0 before:transform transform duration-700 before:duration-700 before:h-0.5  before:bg-gray-800 dark:before:bg-gray-100 before:bottom-1 "><Link href="/"><a >Home</a></Link></li>
                        <li  className="link text-xl text-gray-800 dark:text-gray-100 relative before:absolute hover:before:w-full before:w-0 before:transform transform duration-700 before:duration-700 before:h-0.5  before:bg-gray-800 dark:before:bg-gray-100 before:bottom-1 "><Link href="/about"><a >About</a></Link></li>
                        {/* <li  className=" link text-xl text-gray-800 dark:text-gray-100 relative before:absolute hover:before:w-full before:w-0 before:transform transform duration-700 before:duration-700 before:h-0.5  before:bg-gray-800 dark:before:bg-gray-100 before:bottom-1 "><Link href="/contact"><a >Contact</a></Link></li> */}
                            <li className="px-2 max-h-10 group dark:borderr-purple-600 border-1 hover:overflow-visible hover:h-60 overflow-hidden space-x-2 border-yellow-500 text-yellow-500 cursor-pointer dark:text-yellow-400 rounded-md flex justify-center items-center relative "> <p>Connect</p> <IoIosArrowDown className='text-lg' />
                            <ul className="absolute dropdown group-hover:opacity-100 opacity-0   top-10 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0   duration-500  opacity- bg-gray-200 rounded-md  w-32 ">
                                
                                <div className=" w-full flex justify-center">
                                <a href={socialP?.github.link} className=" w-4/5 flex space-x-3 p-2 items-center ">
                                    <FaGithubAlt className='text-gray-700 dark:text-gray-100' /> <span className="text-gray-700 dark:text-gray-200">Github</span>
                                </a>
                                </div>
                                
                                <div className="w-full flex justify-center">
                                <a  href={socialP?.linkedin.link} className=" w-4/5 flex space-x-3 p-2 items-center ">
                                    <IoLogoLinkedin className='text-gray-700 dark:text-gray-100' /> <span className="text-gray-700 dark:text-gray-200">Linkedin</span>
                                </a>
                                </div>
                                <div className="w-full flex justify-center">
                                <a  href={socialP?.youtube.link} className=" w-4/5 flex space-x-3 p-2 items-center ">
                                    <IoLogoYoutube className='text-gray-700 dark:text-gray-100' /> <span className="text-gray-700 dark:text-gray-200">Youtube</span>
                                </a>

                                </div>
                                
                                <div className=" w-full flex justify-center">
                                <a href={`mailto:${socialP?.gmail.link}`} className=" w-4/5 flex space-x-3 p-2 items-center ">
                                    <MdOutlineMail className='text-gray-700 dark:text-gray-100' /> <span className="text-gray-700 dark:text-gray-200">Email</span>
                                </a>
                                </div>
                                
                            </ul>
                            </li>
                    </ul>


                    </div>

                    <div   className="flex space-x-8 items-center  ">
                    <button ref={DarkBtn} onClick={()=>{light() ;setDark(!dark)}}  className="w- h- rounded-full  relative justify-self-end ">

                            <div className='text-2xl'  >
                                {icon}
                            </div>
                        </button>
                    <button onClick={()=>{setOpen(!open)}} className=' z-20 space-y-2 md:hidden '  >
                    <div className="w-2.5 h-2.5  rounded-full   bg-gray-800 dark:bg-gray-100   "></div>
                        <div  className="w-2.5 h-2.5  rounded-full   bg-gray-800 dark:bg-gray-100  "></div>
                    </button>
                    </div>
                </div>

            </div>
            <div className={open? 'fixed top-0 z-20   mobilenav    flex justify-center items-center translate-y-0 md:hidden  bg-gray-400 dark:bg-gray-800  bg-opacity-60 dark:bg-opacity-60 opacity-100 transform duration-400 w-full h-screen ':'fixed bg-gray-400 dark:bg-gray-600  opacity-0 transform duration-100 w-full h-80 -translate-y-100 '}>

                    <ul  className="    w-    space-y-10    ">
                        <div className="w-full flex justify-center ">
                            <img className={`w-20 h-20 transform rounded-full ${open ?' ':'-translate-x-32'} `} src="/profile.png" alt="" />
                        </div>
                        <div className="w-full relative  flex justify-center p-4 px-6">
                            <IoIosQuote className='absolute -top-5 left-10 text-2xl text-yellow-500 '/>
                            <p className=' text-left p- dark:text-gray-100 text-lg font-semibold ' >
                                            {
                                                quote?.text
                                            }
                            </p>
                            <div className="flex space-x-4 absolute -bottom-4 ">
                                <span className="text-gray-800 dark:text-gray-100"></span> <i className="text-yellow-600 underline underline-offset-1  "> <a href={`https://www.google.com/search?q=${quote?.author}`} target="_blank" rel="noopener noreferrer">{quote?.author}</a></i>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                        <li   className="link text-3xl text-center inline  text-gray-800 dark:text-gray-100 relative before:absolute hover:before:w-full before:w-0 before:transform transform duration-700 before:duration-700 before:h-0.5  before:bg-gray-800 dark:before:bg-gray-100 before:bottom-1 " onClick={()=>setOpen(!open)}><Link href="/"><a >Home</a></Link></li>
                        </div>

                        <div className="w-full flex justify-center">
                        <li  className="link text-3xl text-center inline  text-gray-800 dark:text-gray-100 relative before:absolute hover:before:w-full before:w-0 before:transform transform duration-700 before:duration-700 before:h-0.5  before:bg-gray-800 dark:before:bg-gray-100 before:bottom-1 " onClick={()=>setOpen(!open)}><Link href="/about"><a >About</a></Link></li>
                        </div>


                        <div className="w-full flex justify-center translate-y-20 ">
                        <div  className="w- h-10 flex space-x-4 ">
                            <a href={socialP?.github.link} className="  "> <FaGithubAlt className='text-gray-700 text-2xl dark:text-gray-100' /></a>
                            <a href={socialP?.linkedin.link} className=""> <IoLogoLinkedin className='text-gray-700 text-2xl dark:text-gray-100' /></a>
                            <a href={socialP?.youtube.link} className=""> <IoLogoYoutube className='text-gray-700 text-2xl dark:text-gray-100' /></a>
                            <a href={socialP?.gmail.link} className=""> <MdOutlineMail className='text-gray-700 text-2xl dark:text-gray-100' /></a>

                        </div>
                        </div>
                    </ul>

            </div>

            </>



    )
}

