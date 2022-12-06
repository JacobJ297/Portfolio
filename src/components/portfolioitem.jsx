

import React from 'react';

function Site(link2){
   const websiteLink=link2.link2;
   
   if (websiteLink){return(
   <>
 
            <a    href={websiteLink}
         target="_blank"
         rel="noopener noreferrer">
    <button    
        type="button"
        className="  text-center h-12 w-20 w-max text-base font-medium rounded-md text-white 
        bg-gradient-to-r from-red-500 to-blue-500 drop-shadow-md hover:stroke-white inline-block mx-3 ">
               Site
    </button>
</a>
        
   
   </>)}
}
function PortfolioItem({ title, imgUrl, stack, link , description, link2}) {
   return (
     <>
    <div 
         
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
        
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-70 md:h-50 object-cover "
         />
         <div className="w-full p-4 flex flex-col items-center">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
                  
               ))}
            </p>
            <span className="inline-block px-2 py-1 font-semibold    ">
                  
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white text-center ">
                {description}
            </p>    </span>
            <br></br>
            <div className=" ">
            <a    href={link}
         target="_blank"
         rel="noopener noreferrer"
             >
            <img
            src="/assets/GitHub.jpg"
            className="w-auto h-12  rounded-md inline-block mx-3 my-1 cursor-pointer border-2 border-stone-900"
            /></a>
            <Site link2={link2}/> </div>        
         
         </div>
         
      </div>
   </>)
}

export default PortfolioItem;