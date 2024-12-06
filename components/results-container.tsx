import type { NextPage } from "next";
import Image from "next/image";
import ResultsCard from "./results-card";
import ResultsCard1 from "./results-card1";

export type ResultsContainerType = {
  className?: string;
};

const ResultsContainer: NextPage<ResultsContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-5 max-w-full text-left text-lg text-darkslategray-300 font-typography-body-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-0 max-w-full [row-gap:20px]">
        <div className="flex-1 relative tracking-[0.04em] uppercase font-medium inline-block min-w-[100px] max-w-full">
          200+ results
        </div>
        <div className="flex flex-row items-start justify-start gap-3.5 text-base">
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <a className="[text-decoration:none] relative tracking-[0.04em] text-[inherit]">
              Filters
            </a>
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src="/filters.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full text-base lg:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-3 min-w-[561.9px] max-w-full lg:flex-1 mq750:min-w-full">
          <ResultsCard
            resultsImage="/results-image@2x.png"
            kingBedStandard="1 king bed standard"
            holidayInnExpre="Holiday Inn Expre..."
            vector="/vector.svg"
            video="/video1.svg"
          />
          <ResultsCard1
            resultsImage="/results-image@2x.png"
            bedInQuad="Bed in Quad"
            freehandLosAngeles="Freehand Los Angeles"
            vector="/vector-11.svg"
            prop="4.2"
            reviews="(1,941 reviews)"
            s198="$S 198"
          />
          <ResultsCard1
            resultsImage="/results-image@2x.png"
            bedInQuad="1 King, City view"
            freehandLosAngeles="The Westin Bonavent..."
            vector="/vector-21.svg"
            prop="4.1"
            reviews="(1,002 reviews)"
            s198="$S 289"
          />
          <ResultsCard
            resultsImage="/results-image@2x.png"
            kingBedStandard="Deluxe King"
            kingBedStandardWidth="147.9px"
            kingBedStandardDisplay="inline-block"
            holidayInnExpre="The Ritz-Carlton, L..."
            vector="/vector-31.svg"
            video="/feature-video.svg"
          />
        </div>
        <div className="h-[918.3px] flex-1 relative overflow-hidden min-w-[452px] max-w-full mq750:min-w-full">
          <Image
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            width={695}
            height={917}
            alt=""
            src="/map-1@2x.png"
          />
          <Image
            className="absolute top-[81.6px] left-[114.7px] w-[412.4px] h-[502.2px] z-[2]"
            width={412}
            height={502}
            alt=""
            src="/dots-1.svg"
          />
          <Image
            className="absolute top-[826.4px] left-[640.3px] w-[37.3px] h-[73.6px] object-cover z-[2]"
            width={37}
            height={74}
            alt=""
            src="/zoom-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
