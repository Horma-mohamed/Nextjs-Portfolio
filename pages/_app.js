import '../styles/global.scss'
import Layout from '../layouts/layout'
import {useState,useEffect, useRef} from 'react'
import navContext from '../Contexts/navContext'
function MyApp({ Component, pageProps }) {
    //const [dark,setDark] = useState(false)
    const [X,setX] = useState()
    const [Y,setY] = useState()
    const mouse = useRef(null)
    const [visible,setVisible]= useState(true)
     
    //const {x,y}=useMouse(w,h)
   

  return(
<navContext.Provider value={{
  visible:visible,
  setVisible:setVisible,
}}>


    <div  className='relative bg-gray-50 cursor-   dark:bg-gray-800 '>

       
        <Layout>
            <Component {...pageProps}  />
        </Layout>
    </div>
  </navContext.Provider>
  )
}

export default MyApp

