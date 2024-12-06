import type { NextPage } from "next";
import Image from "next/image";
import RecCard from "./rec-card";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: NextPage<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-6 max-w-full text-left text-11xl text-darkslategray-300 font-typography-body-1 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] mq1225:flex-wrap">
        <h2 className="m-0 flex-1 relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] inline-block min-w-[278px] max-w-full mq750:text-5xl mq450:text-lg">
          Recommended Holidays
        </h2>
        <div className="w-[199.9px] rounded-12xl bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start gap-2.5 text-right text-lg text-cornflowerblue-300">
          <div className="flex-1 relative tracking-[0.04em] font-medium">
            View all holidays
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/arrowright-2.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-0 [row-gap:20px] text-xl text-darkslategray-200 mq750:grid-cols-[minmax(240px,_1fr)] mq1225:[grid-row-gap:20px] mq1225:justify-center mq1225:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <RecCard
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          holidayPrices="$899"
        />
        <RecCard
          unsplash5MV818tzxeo="/switzerlandimage@2x.png"
          bali="Swiss"
          d3N="6D5N"
          holidayPrices="$900"
          holidayPricesDisplay="unset"
          holidayPricesMinWidth="unset"
        />
        <RecCard
          unsplash5MV818tzxeo="/boracayimage@2x.png"
          bali="Boracay"
          d3N="5D4N"
          holidayPrices="$699"
          holidayPricesDisplay="inline-block"
          holidayPricesMinWidth="73px"
        />
        <RecCard
          unsplash5MV818tzxeo="/palawanimage@2x.png"
          bali="Palawan"
          d3N="4D3N"
          holidayPrices="$789"
          holidayPricesDisplay="inline-block"
          holidayPricesMinWidth="71px"
        />
      </div>
      <div className="w-[199.9px] rounded-12xl bg-studio-darkmode-allwhite-ffffff hidden flex-row items-start justify-start gap-2.5 whitespace-nowrap text-right text-lg text-cornflowerblue-300">
        <div className="flex-1 relative tracking-[0.04em] font-medium">
          View all holidays
        </div>
        <Image
          className="h-6 w-6 relative overflow-hidden shrink-0"
          width={24}
          height={24}
          alt=""
          src="/arrowright-3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
