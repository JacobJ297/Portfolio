import React from "react";

function Timeline(){
    return(
        <div className="flex flex-col items-center">
            <a href="./abcf32x.pdf" download="How-to-download-file.pdf">
    <button    
        type="button"
        className="  text-center inline-block px-7 py-3 w-max text-base font-medium rounded-md text-white 
        bg-gradient-to-r from-red-500 to-blue-500 drop-shadow-md hover:stroke-white">
                Download CV
    </button>
</a>
        </div>
    )
}
export default Timeline;