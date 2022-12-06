import React from "react";
import portfolio from "../../data/portfolio";
import PortfolioItem from "./portfolioitem";
function Portfolio(){
    return(
        <div className="flex flex-col md:flex-row items center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                {portfolio.map(project => (
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    link={project.link}
                    stack={project.stack}
                    description={project.description}
                    link2={project.link2}
                    />

                    
               )) }
               
            </div>
        </div>
    )
}
export default Portfolio;