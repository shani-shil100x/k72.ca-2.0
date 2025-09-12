import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];

  // gsap animation
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // seconds it takes to "catch up" to native scroll
      effects: true, // look for data-speed, data-lag attributes
    });
  });

  useGSAP(() => {
  gsap.utils.toArray(".hero").forEach((hero, i) => {
    gsap.from(hero, {
      y: 100,
      scale: 0.95,
      ease: "power3.out",
      scrollTrigger: {
        trigger: hero,
        start: "top 90%",   // when card enters view
        end: "top 40%",     // finish animation a bit earlier
        scrub: true,        // smooth scrub animation
      },
    });
  });
});


  // useGSAP(function () {
  //   gsap.from(".hero", {
  //     height: "100px",
  //     stagger: {
  //       amount: 0.4,
  //     },
  //     scrollTrigger: {
  //       trigger: ".lol",
  //       scrub: true,
  //     },
  //   });
  // });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="p-1.5  ">
        <div className="pt-[40vh]">
          <h2 className="uppercase font-[font2] text-[13vw]">
            Projets
           <sup className="text-[0.25em] align-super">16</sup>
          </h2>
        </div>
        {/* bottom content div */}
        <div className="-mt-14 lol">
          {projects.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="hero lol w-full h-[25rem] mb-2 flex gap-2"
              >
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
