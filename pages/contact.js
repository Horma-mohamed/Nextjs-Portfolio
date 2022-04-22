import Image from 'next/image'
import {useState,useEffect,useRef} from 'react'
import {SiYoutube,SiGithub,SiLinkedin,SiMinutemailer} from 'react-icons/si'
import {MdAlternateEmail,} from 'react-icons/md'
import axios from 'axios'
import gsap from 'gsap' 
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import setTimeWait from '../functions/setTimeWait'
    export default function Contact(){
        const router = useRouter()
        const [email,setEmail]=useState('')
        const [subject,setSubject]=useState('')
        const [message,setMessage]=useState('')
        const emailRef = useRef({})
        const subjectRef = useRef({})
        const messageRef = useRef({})
        const sendIcon =useRef()
        const statusMsg = useRef()
        useEffect(()=>{
            
//            gsap.timeline().from(sendIcon.current,{x:20,y:10,duration:2,color:'black',ease:'power2.out'})
        },[])
        const isFormValid = emailRef.current.value != ''&& subjectRef.current.value != ''&&messageRef.current.value != ''?true : false
        
        function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
console.log(validateEmail(email));
        function sendEmail(){
           if(isFormValid){
            if(!validateEmail(emailRef.current.value)){
                statusMsg.current.innerText="The email isn't valid !!"
                statusMsg.current.style.color='red'
                statusMsg.current.style.opacity='100%'
                setTimeout(() => {
                 statusMsg.current.style.opacity='0%'
             }, 1500);
               }
               else{
                axios({
                    method:'get',
                    url:`http://localhost:8000/sendmail?email=${email}&subject=${subject}&message=${message}`
                })
                emailRef.current.value = ''
                subjectRef.current.value = ''
                messageRef.current.value = ''
                
                statusMsg.current.innerText='Message sended succefully'
                statusMsg.current.style.color='green'
                statusMsg.current.style.opacity='100%'
                setTimeout(() => {
                    statusMsg.current.style.opacity='0%'
                }, 1500);
               }
           }
           else{
            statusMsg.current.innerText='There are some empty fields !!'
            statusMsg.current.style.color='red'
            statusMsg.current.style.opacity='100%'
            setTimeout(() => {
             statusMsg.current.style.opacity='0%'
         }, 1500);
           }

        }
        const Parent={
            'hidden':{

            },
            'visible':{
                transition:{
                    duration:1,
                    staggerChildren:0.8,
                }
            }

        }
        const Child={
            'hidden':{
                opacity:0,
                y:-20
            },
            'visible':{
                transition:{
                    duration:0.5,
                },
                opacity:1,
                y:0
            }

        }
        const button ={
            'hidden':{
                opacity:0,
                scale:0.5
            },
            'visible':{
                transition:{
                    duration:0.5,
                },
                opacity:1,
                scale:1
            }

        }
    return(
        <div className=' relative w-screen min-h-screen  dark:bg-gray-800 bg-white flex justify-center items-center' >
            <div className=" relative lg:w-1/2 w-4/5 mt-40  mb-40 lg:flex shadow-g dark:shadow-gray-900 ">
        <div className="lg:w-1/3 md:w-full lg:bg-gray-20 lg:bg-opacity-40 min-h-full relative overflow-hidden md:flex md:justify-center  ">
            <img  className=' w-60 md:w-80 translate-y-20  lg:absolute lg:-right-14 transform  lg:top-4 md:-top-40 lg:-rotate-45 '  src='/assets/contact3.png' />
        </div>
        <motion.div variants={Parent} animate='visible' initial='hidden' className="lg:w-2/3 w-full bg-gray-00 dark:bg-gray-00 min-h-full p-4 bg-opacity-40 dark:bg-opacity-40 space-y-2 ">
            <div className="w-full text-xl relative">
                <div className="w-14 h-14 bg-gray-00 dark:g hidden absolute left-0  justify-center items-center">
                    <MdAlternateEmail className='dark:text-gray-800 text-gray-100' />
                </div>
                <motion.input  variants={Child} ref={emailRef} style={{}} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='@Email' className='w-full pl-2 outline-none h-14 bg-gray-100 dark:bg-gray-600 dark:text-gray-100  bg-opacity-60 border-gray-800 outline-1 outline-offset-1 ' />
            </div>
            <div className="w-full text-xl relative">
            <motion.input   variants={Child} ref={subjectRef} style={{}} onChange={(e)=>{setSubject(e.target.value)}} type="text" placeholder='Subject' className='w-full pl-2 outline-none h-14 bg-gray-100 dark:bg-gray-600 dark:text-gray-100  bg-opacity-60 border-gray-800 outline-1 outline-offset-1 ' />
            </div>
            <div className="w-full text-xl relative">
            <motion.textarea  variants={Child} ref={messageRef} style={{}}  onChange={(e)=>{setMessage(e.target.value)}} placeholder='Message' className='w-full pl-2 outline-none h-40 bg-gray-100 dark:bg-gray-600 dark:text-gray-100  bg-opacity-60 border-gray-800 outline-1 outline-offset-1 ' ></motion.textarea>
            </div>
            <div className="w-full h-20 p-2 text-xl relative  ">
                <span ref={statusMsg} className="text-xl  font-semibold text-green-500 opacity-0 inline"></span>
            <motion.button variants={button} onClick={()=>{sendEmail();router.push('/contact')}}  className='  w-24  h-10 bg-purple-800 mt-2  text-gray-200  bg-opacity-80 hover:bg-opacity-100 float-right rounded-md ' ><SiMinutemailer className='inline mx-1 text-gray-200' />  Send</motion.button>
            </div>


        </motion.div>
        <div className="absolute -bottom-14 w-64 h-10  flex space-x-4 justify-center">
            {[<SiGithub  ref={sendIcon}/> ,<SiYoutube/>,<SiLinkedin/>].map(each=>(
                <div className="w-8 h-8 rounded-full hidden md:flex justify-center items-center text-xl  bg-purle-600 text-gray-800 dark:text-gray-200 ">
                    {each}
                </div>
            ))}
            
            </div>
            </div>
            
        </div>
    )
}