import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 ">
      <div className="hover:border-[#d3fd50] hover:text-[#d3fd50] uppercase border-[3px] border-white rounded-full px-8 pb-0 text-center leading-6 pt-8 ">
        <Link 
        to="/projects"
        className="text-[6.5vw]">Work</Link>
      </div>
      <div className="hover:border-[#d3fd50] hover:text-[#d3fd50] uppercase border-[3px] border-white rounded-full px-8 pb-0 text-center leading-6 pt-8 ">
        <Link 
         to="/agence"
        className="text-[6.5vw]">Agency</Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
