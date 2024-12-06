import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FlightCard1Type = {
  className?: string;
  sIA: string;
  singaporeAirlines?: string;
  aM?: string;
  flightIcon: string;
  aM1?: string;
  h55MNonStop?: string;
  vector1: string;
  s730?: string;

  /** Style props */
  singaporeAirlinesRight?: CSSProperties["right"];
  frameDivWidth?: CSSProperties["width"];
  frameDivGap?: CSSProperties["gap"];
  h55MNonStopDisplay?: CSSProperties["display"];
  h55MNonStopMinWidth?: CSSProperties["minWidth"];
};

const FlightCard1: NextPage<FlightCard1Type> = ({
  className = "",
  sIA,
  singaporeAirlines,
  singaporeAirlinesRight,
  frameDivWidth,
  aM,
  flightIcon,
  aM1,
  frameDivGap,
  h55MNonStop,
  h55MNonStopDisplay,
  h55MNonStopMinWidth,
  vector1,
  s730,
}) => {
  const singaporeAirlines1Style: CSSProperties = useMemo(() => {
    return {
      right: singaporeAirlinesRight,
    };
  }, [singaporeAirlinesRight]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const h55MNonStopStyle: CSSProperties = useMemo(() => {
    return {
      display: h55MNonStopDisplay,
      minWidth: h55MNonStopMinWidth,
    };
  }, [h55MNonStopDisplay, h55MNonStopMinWidth]);

  return (
    <div
      className={`self-stretch h-[100px] rounded-md bg-studio-darkmode-allwhite-ffffff border-lightgray border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-0 pl-[25px] pr-[5px] gap-[50px] max-w-full text-left text-base text-dimgray-300 font-typography-body-1 mq750:gap-[25px] mq1050:flex-wrap ${className}`}
    >
      <div className="w-[155.8px] flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start relative gap-[7px]">
          <Image
            className="h-[46px] w-[34.8px] relative"
            loading="lazy"
            width={35}
            height={46}
            alt=""
            src={sIA}
          />
          <div
            className="absolute !m-[0] top-[calc(50%_-_9.5px)] right-[-20px] tracking-[0.26px]"
            style={singaporeAirlines1Style}
          >
            {singaporeAirlines}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-[22.5px] px-0 pb-0 box-border max-w-full text-2xl text-cornflowerblue-200"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-2">
          <div className="flex flex-row items-start justify-start gap-5 mq450:flex-wrap">
            <div className="w-[93px] flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.32px] font-medium mq450:text-mid">
                {aM}
              </div>
            </div>
            <Image
              className="h-[15.1px] w-[107.1px] relative"
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
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[26.7px] text-base text-dimgray-100 mq450:flex-wrap"
            style={frameDiv1Style}
          >
            <div className="w-[74.9px] relative tracking-[0.26px] inline-block shrink-0">
              SIN
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 text-center text-gray-100">
              <div
                className="self-stretch relative tracking-[0.21px] whitespace-nowrap"
                style={h55MNonStopStyle}
              >
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
          width={1}
          height={100}
          alt=""
          src={vector1}
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

export default FlightCard1;
