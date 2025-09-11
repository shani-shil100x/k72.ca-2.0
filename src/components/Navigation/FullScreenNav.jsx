import React from "react";

const FullScreenNav = () => {
  return (
    <div className="h-screen overflow-hidden text-white absolute w-full ">
      {/* fulldiv1 */}
      <div className="">
        <div className="flex w-full p-2 items-start justify-between">
          <div>
            <div className="w-21">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                />
              </svg>
            </div>
          </div>

          <div className="h-40 w-40 -mt-10 -mr-10 p-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
        <div className="-mt-10">
          <div className="link relative border-t-1 border-gray-400 ">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-17 pt-4 ">
              projets
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] ">
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Agence */}
          <div className="link relative border-t-1 border-gray-400 ">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-17 pt-4 ">
              Agence
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] ">
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="link relative border-t-1 border-gray-400 ">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-17 pt-4 ">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] ">
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Blogue */}
          <div className="link relative border-y-1 border-gray-400 ">
            <h1 className="uppercase font-[font2] text-[8vw] text-center leading-17 pt-4 ">
              Blogue
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#d3fd50] ">
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
              {/* div content 1 */}
              <div className="moveX flex items-center gap-4 ">
                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>

                <h2 className="leading-17 pt-4 whitespace-nowrap text-black text-[8vw] font-[font2] uppercase ">
                  Pour tout voir
                </h2>
                <div className="object-cover h-15 w-45 rounded-full -mb-2">
                  <img
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    alt=""
                    className="shrink-0 h-full w-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
