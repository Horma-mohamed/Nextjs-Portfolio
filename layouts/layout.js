import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useState ,useRef , useEffect} from "react"
import useMouse from '../functions/useMouse'
export default function({children}){
    var bg='bg-gray-50'
    const [mousePosition , setMousePosition]= useState({
        x:null,
        y:null,
        movementX:null,
        movementY:null
    })
    
    
    const [dark,setDark] = useState(false)
    const [navStatu,setNavStatu] = useState(false)
    
    return(
        <div className={ dark?`w-screen absolute top-0 dark dark:bg-gray-800 min-h-screen  overflow-x-hidden `:`w-screen absolute top-0 overflow-x-hidden `}>
        <div className=" w-full  relative">
        <NavBar dark={dark} setDark={setDark} navStatu={navStatu} setNavStatu={setNavStatu} />
            <div className="w-full" >
                {children}
            </div>
        <Footer/>
        </div>
        </div>
    )
}