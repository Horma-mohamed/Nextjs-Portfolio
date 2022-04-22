import { useEffect, useState } from "react";

export default function useMouse(w,h){
    const [mousePosition , setMousePosition]= useState({
        x:null,
        y:null,
        movementX:null,
        movementY:null
    })
    
    useEffect(()=>{
        const handle = (e)=>{
            setMousePosition({
                x:e.pageX -w||0,
                y:e.pageY -h||0,
                movementX:e.movementX,
                movementY:e.movementY
            })
        }
        window.addEventListener('mousemove',handle)
        
        return ()=> window.removeEventListener('mousemove',handle)
    })
    return mousePosition
}