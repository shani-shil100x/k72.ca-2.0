import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const stairParentRef = useRef(null);
  const currentPath = useLocation().pathname;
  const pageRef = useRef(null);
  // gsap animation page transition
  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairParentRef.current, {
        display: "block",
      });
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.3,
        },
      });

      tl.to(".stair", {
        y: "100%",
        stagger: {
          amount: -0.3,
        },
      });

      tl.to(stairParentRef.current, {
        display: "none",
      });
      tl.to(".stair", {
        y: "0%",
      });
      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1.3,
      });
    },
    [currentPath]
  );

  console.log(props.children);
  return (
    <div>
      <div
        ref={stairParentRef}
        className="h-screen top-0 z-10 fixed w-full"
      >
        <div className="h-full flex w-full">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
