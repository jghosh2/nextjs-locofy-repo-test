import type { NextPage } from "next";
import Image from "next/image";
import Col from "./col";

export type TripPlanningType = {
  className?: string;
};

const TripPlanning: NextPage<TripPlanningType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-left text-lg text-cornflowerblue-300 font-typography-body-1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <b className="w-[1049.6px] relative tracking-[0.04em] uppercase inline-block max-w-full">
          Plan your next trip
        </b>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mt-[-2px] text-11xl text-darkslategray-300 mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[682px] max-w-full mq1050:min-w-full">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] mq750:text-5xl mq450:text-lg">
              Most Popular Destinations
            </h2>
          </div>
          <div className="w-[231.4px] rounded-12xl bg-studio-darkmode-allwhite-ffffff flex flex-row items-start justify-start gap-2.5 text-right text-lg text-cornflowerblue-300">
            <div className="flex-1 relative tracking-[0.04em] font-medium">
              View all destinations
            </div>
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              width={24}
              height={24}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-0 [row-gap:20px] text-xl text-studio-darkmode-allwhite-ffffff mq750:grid-cols-[minmax(240px,_1fr)] mq1225:[grid-row-gap:20px] mq1225:justify-center mq1225:grid-cols-[repeat(2,_minmax(240px,_416px))]">
        <Col parisImage="/parisimage@2x.png" paris="Paris" priceValues="$699" />
        <Col
          parisImage="/greeceimage@2x.png"
          paris="Greece"
          parisMinWidth="51px"
          priceValues="$1079"
          priceValuesDisplay="unset"
          priceValuesMinWidth="unset"
        />
        <Col
          parisImage="/norwayimage@2x.png"
          paris="Norway"
          parisMinWidth="55px"
          priceValues="$895"
          priceValuesDisplay="inline-block"
          priceValuesMinWidth="91.9px"
        />
        <Col
          parisImage="/tuscanyimage@2x.png"
          paris="Tuscany"
          parisMinWidth="62px"
          priceValues="$1245"
          priceValuesDisplay="inline-block"
          priceValuesMinWidth="101.6px"
        />
      </div>
    </div>
  );
};

export default TripPlanning;
