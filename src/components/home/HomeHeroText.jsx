import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center pt-1">
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[9vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[9vw] ">
        qui
        <div className="h-[7vw] w-[16vw] overflow-hidden -mt-5 rounded-full">
          <div className="w-full h-full overflow-hidden rounded-full">
            <Video />
          </div>
        </div>
        génère
      </div>
      <div className="text-[9.5vw]  flex justify-center items-center uppercase leading-[9vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
