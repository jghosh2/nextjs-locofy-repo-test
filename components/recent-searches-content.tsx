import type { NextPage } from "next";
import FlightMainContainer from "./flight-main-container";

export type RecentSearchesContentType = {
  className?: string;
};

const RecentSearchesContent: NextPage<RecentSearchesContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-9 max-w-full text-left text-5xl text-cornflowerblue-300 font-typography-body-1 mq750:gap-[18px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[15px] max-w-full">
        <FlightMainContainer
          sIN="SIN"
          duration="/duration.svg"
          lAX="LAX"
          departOn="Depart on: "
          sep2021="7 Sep 2021"
        />
        <FlightMainContainer
          sIN="MY"
          duration="/duration-1.svg"
          lAX="DUB"
          departOn="Depart on:"
          sep2021=" 9 Sep 2021"
        />
      </div>
      <div className="self-stretch relative text-lg tracking-[0.04em] uppercase text-lightgray">
        Prepare for your trip
      </div>
    </div>
  );
};

export default RecentSearchesContent;
