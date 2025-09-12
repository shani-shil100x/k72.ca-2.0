import React from "react";

const ProjectCard = (props) => {

    
  return (
    <>
      
        <div className="group w-1/2 hover:rounded-4xl relative overflow-hidden h-full transition-all rounded-none">
          <img
            className="h-full w-full object-cover"
            src={props.image1}
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/30">
            <h2 className="uppercase text-center pt-1 font-[font2] border-3 rounded-full text-3xl w-1/2 ">
              Voir le projet
            </h2>
          </div>
        </div>
        <div className="group w-1/2 hover:rounded-4xl relative overflow-hidden h-full transition-all rounded-none">
          <img
            className="h-full w-full object-cover"
            src={props.image2}
            alt=""
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/30">
            <h2 className="uppercase text-center pt-1 font-[font2] border-3 rounded-full text-3xl w-1/2 ">
              Voir le projet
            </h2>
          </div>
        </div>
   
    </>
  );
};

export default ProjectCard;
