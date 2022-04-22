import Image from 'next/image'
export default function e404(){


    return(
        <div className='dark:bg-gray-800 w-screen h-screen flex justify-center items-center ' >
            <div className="  lg:w-1/2 w-4/5 relative  ">
                <div className="bg-gradient-to- from-white to-transparent">
                    <Image className=' top-0'  width='500px' height='500px' src='/404.png' />
                </div>
                <h1 className='lg:text-7xl md:text-4xl text-2xl dark:text-gray-100 text-center' >Somthing went wrong !!</h1>
                <p className="text-lg md:text-xl lg:text-2xl font-san text-gray-800 text-center my-4 dark:text-gray-100">404 Error : page not found!</p>
            </div>
        </div>
    )
}