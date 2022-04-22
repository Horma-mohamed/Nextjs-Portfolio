import {useState,useEffect, useRef,} from 'react'
import gsap from 'gsap'

export default  function TypeWriter({text,c , delayChar,delay , className}){
    const [currentText,setCurrentText] = useState('')
    const i = useRef(0)
    const cursor = useRef()
    
    
    useEffect(()=>{
        i.current = 0
        setCurrentText('')
    },[text])
    useEffect(()=>{
        

        
        
            while(i.current<text.length){
                const time = setTimeout(()=>{
                   
                        setCurrentText((value)=>value + text.charAt(i.current))
                        i.current +=1
                    },delayChar||50)
                    return ()=>{
                    clearTimeout(time)
                }
                }
        
        if(i==text.length){
            cursor.current.style.display = 'none'
        }

    },[currentText,text])
    return(
        <div>
            <span className={className}>
            {currentText} 
        </span>
        <span className='hi blink text-2xl text-gray-800 dark:text-gray-100' ref={cursor} >{c || '|'}</span>
        </div>
    )
}