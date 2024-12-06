import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HotelCard from "./hotel-card";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: NextPage<PopularStaysType> = ({ className = "" }) => {
  const router = useRouter();

  const onViewAllStaysButtonClick = useCallback(() => {
    router.push("/hotels-page");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-11xl text-darkslategray-300 font-typography-body-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1225:flex-wrap">
        <h2 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] inline-block min-w-[159px] max-w-full mq750:text-5xl mq450:text-lg">
          Popular Stays
        </h2>
        <div className="w-[174.7px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border text-right text-lg text-cornflowerblue-300">
          <div
            className="self-stretch rounded-12xl bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start gap-2.5 cursor-pointer"
            onClick={onViewAllStaysButtonClick}
          >
            <div className="flex-1 relative tracking-[0.04em] font-medium">
              View all stays
            </div>
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/arrowright-4.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-0 [row-gap:20px] text-base mq750:grid-cols-[minmax(240px,_1fr)] mq1225:[grid-row-gap:20px] mq1225:justify-center mq1225:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <HotelCard
          matterhornSuitesImage="/matterhorn-suites-image@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          starIcon="/star-icon.svg"
          placeholder="4.9"
          reviews="(60 reviews)"
        />
        <HotelCard
          matterhornSuitesImage="/discovery-shores-image@2x.png"
          roomInfoWidth="234px"
          entireBungalow="2-Story beachfront suite"
          matterhornSuites="Discovery Shores"
          night="$360/night"
          starIcon="/vector-1.svg"
          placeholder="4.8"
          reviews="(116 reviews)"
          reviewsMinWidth="81px"
        />
        <HotelCard
          matterhornSuitesImage="/arctic-hut-image@2x.png"
          roomInfoWidth="240px"
          entireBungalow="Single deluxe hut"
          matterhornSuites="Arctic Hut "
          night="$420/night"
          starIcon="/vector-2.svg"
          placeholder="4.7"
          reviews="(78 reviews)"
          reviewsMinWidth="74px"
        />
        <HotelCard
          matterhornSuitesImage="/lake-louise-image@2x.png"
          roomInfoWidth="234px"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          starIcon="/vector-3.svg"
          placeholder="4.6"
          reviews="(63 reviews)"
          reviewsMinWidth="74px"
        />
      </div>
      <div className="w-[174.7px] rounded-12xl bg-studio-darkmode-allwhite-ffffff hidden flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-lg text-cornflowerblue-300">
        <div className="flex-1 relative tracking-[0.04em] font-medium">
          View all stays
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src="/arrowright-5.svg"
        />
      </div>
    </div>
  );
};

export default PopularStays;
