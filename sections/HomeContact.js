import {BsLinkedin,BsGithub,BsYoutube} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi'

export default function(){
    return(
        <section>
            <h1 className="text-2xl font-mono underline font-semibold p-4 dark:text-gray-100 ">
                <span>Contact Me</span>
            </h1>
            <div className="w-11/12 p-4   space-y-4">
                {/*
                    [<BsLinkedin className=' text-4xl dark:text-gray-100 ' />,<BsGithub className='text-4xl dark:text-gray-100' />,<BsYoutube className='text-4xl dark:text-gray-100' />,<BiMailSend className='text-4xl dark:text-gray-100' />].map((social)=>(
                        <div className="flex">
                    <div className="w-10 h-10 bg-gray-00" >{social}</div>
                    <div className=" hidden  w-full h-10 bg-gray-00" ></div>
                </div>
                    ))
                    */}
                    
                    
                
            </div>
        </section>
    )
}