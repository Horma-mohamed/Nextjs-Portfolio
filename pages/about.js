import array from '../functions/array'
import { skillsListUrl } from '../utils/constans'
import moment from 'moment'

export default function About({skills,Degrees,Employments,profile}){
    return(
        <div style={{minHeight:'100vh'}} className=" w-full pb-40  bg-white dark:bg-gray-800 flex justify-center lg:items-center  " >

            <div className="lg:w-2/3 w-4/5  mt-40 bg-red-00 bg-opacity-40">
            <div className=" w-full  flex ">
               <div className="w-24 h-24 bg-gray-00 rounded-full overflow-hidden">
                   <img className='  transform -translate-y-5 rounded-full'  src="assets/about.png" alt="" srcset="" />
               </div>
               <div className='w-10/12 h-24 bg-gray-00 flex items-center' >
                       <h1 className="text-4xl text-gray-800  dark:text-gray-100">
                           What About Me?
                       </h1>
               </div>
           </div>
           <div className="w-full space-y-6 ">
               <div className='text-gray-800 dark:text-gray-200 text-justify my-3' >
                    <p dangerouslySetInnerHTML={{ __html:profile.About}} />
               </div>
                <div className='flex space-x-2' >
                     <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Email:</h1><h1 className='text-gray-800 dark:text-gray-100'  ><a href="mailto:horma496@gmail.com">horma496@gmail.com</a></h1>                        
                </div>
                <div className=' space-x-2 ' >
                        <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold flex flex-wrap  '  >Tech&Tools:</h1><h1 className='space-x-4 text-gray-800 dark:text-gray-200' > {skills?.map((each)=>(
                        <span className="p-1 text-sm  md:inline-flex rounded-md bg-opacity-60 bg-gray-0 dark:b-gray-200 underline underline-offset-0 ">#{each.skil}</span>
                         ))} </h1>                        
                </div>
                <div className='  mt-2' >
               <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Educations:</h1>   
               <div className='space-y-2 mt-6 ' >
               {
                   Degrees?.map((degree)=>(
                       <div style={{borderLeftWidth:2,}} className="w-full bg-slate-0 p-2 h-20 bg-gray-00  border-purple-600 relative before:absolute before:w-2 before:h-2 before:rounded-full before:-top-2 before:-left-1 before:bg-purple-600 ">
                           <h1 className="text-xl font-light text-gray-800 dark:text-gray-100">
                               {degree.source}
                           </h1>
                           <h1 className="text-sm text-gray-800 dark:text-gray-100">
                               <span>{moment(degree.start_date,).format('YYYY  MMMM')}</span> - <span>{moment(degree.end_date,).format('YYYY  MMMM')}</span>
                           </h1>
                           <h1 className="text-md text-gray-800 dark:text-gray-100">
                               {degree.course}
                           </h1>
                       </div>
                   ))
               }
             
               </div>                   
           </div>
           <div className=' space-x-2 mt-2' >
               <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Employments:</h1>   
               <div className='space-y-2 mt-8 ' >
               {
                   Employments?.map((employment)=>(
                       <div style={{borderLeftWidth:2,}} className="w-full p-2 h-20 bg-gray-00  border-purple-600 relative before:absolute before:w-2 before:h-2 before:rounded-full before:-top-2 before:-left-1 before:bg-purple-600 ">
                           <h1 className="text-xl font-light text-gray-800 dark:text-gray-100">
                               {employment.company}
                           </h1>
                           <h1 className="text-sm text-gray-800 dark:text-gray-100">
                           <span>{moment(employment.start_date,).format('YYYY  MMMM')}</span> - <span>{moment(employment.end_date,).format('YYYY  MMMM')=='invalid date'? moment(employment.end_date,).format('YYYY  MMMM') : 'Still-On'}</span>
                           </h1>
                           <h1 className="text-md text-gray-800 dark:text-gray-100">
                               {employment.title}
                           </h1>
                       </div>
                   ))
               }
             
               </div>                   
           </div>
           </div>
            </div>      
          
        </div>
    )
}

export async function getStaticProps(){
    const reSkills= await fetch('https://horma-portfolio.herokuapp.com/skills')
    const skills = await reSkills.json()  
    const resDegrees= await fetch('https://horma-portfolio.herokuapp.com/degrees/')
    const Degrees = await resDegrees.json()
    const resEmployments= await fetch('https://horma-portfolio.herokuapp.com/employments/')
    const Employments = await resEmployments.json()
    const resProfile= await fetch('https://horma-portfolio.herokuapp.com/profiles/1')
    const profile = await resProfile.json()  

    return{
        props:{
            skills,
            Degrees,
            Employments,
            profile
        },
        revalidate:1
    }
  }

//   <div className='lg:w-1/2 w-4/5 mt-40 mb-40 bg-gray-30 dark:bg-gray-60 py-4 rounded-md shadow-l ' >
//   <div className=" w-full  flex px-4">
//       <div className="w-24 h-24 bg-gray-00 rounded-full overflow-hidden">
//           <img className='  transform -translate-y-5 rounded-full'  src="assets/about.png" alt="" srcset="" />
//       </div>
//       <div className='w-10/12 h-24 bg-gray-00 flex items-center' >
//               <h1 className="text-4xl text-gray-800  dark:text-gray-100">
//                   What About Me?
//               </h1>
//       </div>
//   </div>
//   <div className="w-full flex justify-center   bg-gray-00">
//       <ul className=' w-4/5 grid grid-cols-1 grid-flow-row gap-3' >
//          <li className='text-gray-800 dark:text-gray-200 text-justify my-3' >
//             <div dangerouslySetInnerHTML={{ __html:profile.About}} />
//          </li>
//           <li className='flex space-x-2' >
//               <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Email:</h1><h1 className='text-gray-800 dark:text-gray-100'  ><a href="mailto:horma496@gmail.com">horma496@gmail.com</a></h1>                        
//           </li>
//           <li className='flex space-x-2 ' >
//               <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Tech&Tools:</h1><h1 className='space-x-4 text-gray-800 dark:text-gray-200' > {skills?.map((each)=>(
//                   <span className="p-1 text-sm rounded-md bg-opacity-60 bg-gray-0 dark:b-gray-200 ">{each.skil}</span>
//               ))} </h1>                        
//           </li>
//           <li className=' space-x-2 mt-2' >
//               <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Educations:</h1>   
//               <ul className='space-y-2 mt-8 ' >
//               {
//                   Degrees?.map((degree)=>(
//                       <li style={{borderLeftWidth:2,}} className="w-80 p-2 h-20 bg-gray-00  border-purple-600 relative before:absolute before:w-2 before:h-2 before:rounded-full before:-top-2 before:-left-1 before:bg-purple-600 ">
//                           <h1 className="text-xl font-light text-gray-800 dark:text-gray-100">
//                               {degree.source}
//                           </h1>
//                           <h1 className="text-sm text-gray-800 dark:text-gray-100">
//                               <span>{moment(degree.start_date,).format('YYYY  MMMM')}</span> - <span>{moment(degree.end_date,).format('YYYY  MMMM')}</span>
//                           </h1>
//                           <h1 className="text-md text-gray-800 dark:text-gray-100">
//                               {degree.course}
//                           </h1>
//                       </li>
//                   ))
//               }
             
//               </ul>                   
//           </li>
//           <li className=' space-x-2 mt-2' >
//               <h1  className=' text-gray-800 dark:text-gray-200 underline underline-offset-1 font-bold  '  >Employments:</h1>   
//               <ul className='space-y-2 mt-8 ' >
//               {
//                   Employments?.map((employment)=>(
//                       <li style={{borderLeftWidth:2,}} className="w-80 p-2 h-20 bg-gray-00  border-purple-600 relative before:absolute before:w-2 before:h-2 before:rounded-full before:-top-2 before:-left-1 before:bg-purple-600 ">
//                           <h1 className="text-xl font-light text-gray-800 dark:text-gray-100">
//                               {employment.company}
//                           </h1>
//                           <h1 className="text-sm text-gray-800 dark:text-gray-100">
//                           <span>{moment(employment.start_date,).format('YYYY  MMMM')}</span> - <span>{moment(employment.end_date,).format('YYYY  MMMM')=='invalid date'? moment(employment.end_date,).format('YYYY  MMMM') : 'Still-On'}</span>
//                           </h1>
//                           <h1 className="text-md text-gray-800 dark:text-gray-100">
//                               {employment.title}
//                           </h1>
//                       </li>
//                   ))
//               }
             
//               </ul>                   
//           </li>
//       </ul>
//   </div>
// </div>