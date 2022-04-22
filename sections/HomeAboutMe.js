
export default function(){
    return(
        <section className=" about w-full  bg-gray-00 md:flex md:space-x-4 ">
            <div  className=" hidden md:inline-block w-11/12 md:w-1/2   overflow-hidden relative p-4">
                <img  className=" absolute " src="https://www.kap.dev/content/images/size/w1000/2021/05/VMVM0456.jpg" alt="" />
            </div>
            <div className="w-full md:w-1/2 mt-20 ">
            <h1 className="text-2xl font-mono underline font-semibold p-4 dark:text-gray-100">
                <span>More About me</span>
            </h1>
            <p  className=" about w-11/12 text-md font-mono font-light p-4 text-justify dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error aspernatur ratione quidem ad saepe alias non tenetur reprehenderit voluptas dolorum, repellendus dolores quo reiciendis officiis natus, libero in, praesentium pariatur. Provident saepe quaerat est. Amet modi aliquam aspernatur soluta.
            </p>
            </div>
            <div  className="w-11/12 md:hidden h-96 overflow-hidden relative p-4">
                <img  className=" absolute" src="https://www.kap.dev/content/images/size/w1000/2021/05/VMVM0456.jpg" alt="" />
            </div>
        </section>
    )
}