import useMouse from "../functions/useMouse"
import TypeWriter from "../includes/TypeWriter"
import {useState,useEffect} from 'react'
// function useMouse(){
//     const [mousePosition , setMousePosition]= useState({
//         x:null,
//         y:null,
//         movementX:null,
//         movementY:null
//     })
    
//     useEffect(()=>{
//         const handle = (e)=>{
//             setMousePosition({
//                 x:e.pageX,
//                 y:e.pageY,
//                 movementX:e.movementX,
//                 movementY:e.movementY
//             })
//         }
//         window.addEventListener('mousemove',handle)
//         return ()=> window.removeEventListener('mousemove',handle)
//     })
// }
export default function(){
    const {x,y}=useMouse()
    return(
        <div className="w-screen h-screen bg-transparent dark:bg-gray-800">
     <TypeWriter text='Hello world ' c=' _'/>
        <div>
            <h1>{x}</h1>
            <h1>{y}</h1>
        </div>
        <div style={{transform:`translate3d(${x}px,${y}px,0)`}} className="absolute w-10 h-10 bg-gray-400 rounded-full"></div>
        </div>
    )
}