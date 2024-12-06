import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FlightCardType = {
  className?: string;
  turkish: string;
  singaporeAirlines?: string;
  aM?: string;
  flightIcon: string;
  aM1?: string;
  h55MNonStop?: string;
  statusIcon: string;
  s730?: string;

  /** Style props */
  flightCardAlignSelf?: CSSProperties["alignSelf"];
  flightCardHeight?: CSSProperties["height"];
  flightCardWidth?: CSSProperties["width"];
  airlineSectionPadding?: CSSProperties["padding"];
  airlineSectionAlignSelf?: CSSProperties["alignSelf"];
  singaporeAirlinesMinWidth?: CSSProperties["minWidth"];
  singaporeAirlinesDisplay?: CSSProperties["display"];
  detailsTimeWidth?: CSSProperties["width"];
  aMAlignSelf?: CSSProperties["alignSelf"];
};

const FlightCard: NextPage<FlightCardType> = ({
  className = "",
  flightCardAlignSelf,
  flightCardHeight,
  flightCardWidth,
  airlineSectionPadding,
  airlineSectionAlignSelf,
  turkish,
  singaporeAirlines,
  singaporeAirlinesMinWidth,
  singaporeAirlinesDisplay,
  detailsTimeWidth,
  aM,
  aMAlignSelf,
  flightIcon,
  aM1,
  h55MNonStop,
  statusIcon,
  s730,
}) => {
  const flightCardStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: flightCardAlignSelf,
      height: flightCardHeight,
    };
  }, [flightCardAlignSelf, flightCardHeight]);

  const flightCard1Style: CSSProperties = useMemo(() => {
    return {
      width: flightCardWidth,
    };
  }, [flightCardWidth]);

  const airlineSectionStyle: CSSProperties = useMemo(() => {
    return {
      padding: airlineSectionPadding,
      alignSelf: airlineSectionAlignSelf,
    };
  }, [airlineSectionPadding, airlineSectionAlignSelf]);

  const singaporeAirlinesStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: singaporeAirlinesMinWidth,
      display: singaporeAirlinesDisplay,
    };
  }, [singaporeAirlinesMinWidth, singaporeAirlinesDisplay]);

  const detailsTimeStyle: CSSProperties = useMemo(() => {
    return {
      width: detailsTimeWidth,
    };
  }, [detailsTimeWidth]);

  const aMStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: aMAlignSelf,
    };
  }, [aMAlignSelf]);

  return (
    <div
      className={`rounded-md bg-studio-darkmode-allwhite-ffffff border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-[25px] pr-[5px] gap-[50px] max-w-full text-left text-base text-dimgray-300 font-typography-body-1 mq750:gap-[25px] mq1050:flex-wrap ${className}`}
      style={flightCardStyle}
    >
      <div
        className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0"
        style={flightCard1Style}
      >
        <div
          className="flex flex-row items-start justify-start gap-[7px]"
          style={airlineSectionStyle}
        >
          <Image
            className="h-[46px] w-[34.8px] relative"
            loading="lazy"
            width={35}
            height={46}
            alt=""
            src={turkish}
          />
          <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
            <div
              className="relative tracking-[0.26px] inline-block min-w-[115px]"
              style={singaporeAirlinesStyle}
            >
              {singaporeAirlines}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[331.2px] flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200">
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
            <div
              className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0"
              style={detailsTimeStyle}
            >
              <div
                className="relative tracking-[0.32px] font-medium mq450:text-mid"
                style={aMStyle}
              >
                {aM}
              </div>
            </div>
            <Image
              className="h-[15.1px] w-[107.1px] relative"
              loading="lazy"
              width={107}
              height={15}
              alt=""
              src={flightIcon}
            />
            <div className="w-[91px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border text-right">
              <div className="self-stretch relative tracking-[0.32px] font-medium mq450:text-mid">
                {aM1}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30.7px] text-base text-dimgray-100 mq450:gap-[15px] mq450:flex-wrap">
            <div className="w-[74.9px] relative tracking-[0.26px] inline-block shrink-0">
              SIN
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 text-center text-gray-100">
              <div className="self-stretch relative tracking-[0.21px] inline-block min-w-[122px]">
                {h55MNonStop}
              </div>
            </div>
            <div className="w-[74.9px] relative tracking-[0.26px] text-right inline-block shrink-0">
              LAX
            </div>
          </div>
        </div>
      </div>
      <div className="w-32 flex flex-row items-start justify-start text-center text-5xl text-orange-100">
        <Image
          className="h-[100px] w-px relative"
          loading="lazy"
          width={1}
          height={100}
          alt=""
          src={statusIcon}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-9 px-0 pb-0">
          <b className="self-stretch relative tracking-[0.34px] mq450:text-lgi">
            {s730}
          </b>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
