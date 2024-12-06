import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type BookingCardType = {
  className?: string;
  airlineLogo: string;
  singaporeAirlines?: string;
  price?: string;
  depCode?: string;
  depName?: string;
  arrCode?: string;
  arrName?: string;
  flightClass?: string;
  numPeople?: string;
  expedia?: string;
  timeAgo?: string;

  /** Style props */
  bookingCardFlex?: CSSProperties["flex"];
  singaporeAirlinesMinWidth?: CSSProperties["minWidth"];
  priceMinWidth?: CSSProperties["minWidth"];
  departureFlex?: CSSProperties["flex"];
  depCodeDisplay?: CSSProperties["display"];
  depCodeMinWidth?: CSSProperties["minWidth"];
  depNameMinWidth?: CSSProperties["minWidth"];
  arrivalFlex?: CSSProperties["flex"];
  arrCodeDisplay?: CSSProperties["display"];
  arrCodeMinWidth?: CSSProperties["minWidth"];
  arrNameDisplay?: CSSProperties["display"];
  arrNameMinWidth?: CSSProperties["minWidth"];
  arrNameAlignSelf?: CSSProperties["alignSelf"];
  arrNameTextAlign?: CSSProperties["textAlign"];
  flightClassMinWidth?: CSSProperties["minWidth"];
  timeAgoDisplay?: CSSProperties["display"];
  timeAgoMinWidth?: CSSProperties["minWidth"];
};

const BookingCard: NextPage<BookingCardType> = ({
  className = "",
  bookingCardFlex,
  airlineLogo,
  singaporeAirlines,
  singaporeAirlinesMinWidth,
  price,
  priceMinWidth,
  departureFlex,
  depCode,
  depCodeDisplay,
  depCodeMinWidth,
  depName,
  depNameMinWidth,
  arrivalFlex,
  arrCode,
  arrCodeDisplay,
  arrCodeMinWidth,
  arrName,
  arrNameDisplay,
  arrNameMinWidth,
  arrNameAlignSelf,
  arrNameTextAlign,
  flightClass,
  flightClassMinWidth,
  numPeople,
  expedia,
  timeAgo,
  timeAgoDisplay,
  timeAgoMinWidth,
}) => {
  const bookingCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: bookingCardFlex,
    };
  }, [bookingCardFlex]);

  const singaporeAirlines2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: singaporeAirlinesMinWidth,
    };
  }, [singaporeAirlinesMinWidth]);

  const priceStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: priceMinWidth,
    };
  }, [priceMinWidth]);

  const departureStyle: CSSProperties = useMemo(() => {
    return {
      flex: departureFlex,
    };
  }, [departureFlex]);

  const depCodeStyle: CSSProperties = useMemo(() => {
    return {
      display: depCodeDisplay,
      minWidth: depCodeMinWidth,
    };
  }, [depCodeDisplay, depCodeMinWidth]);

  const depNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: depNameMinWidth,
    };
  }, [depNameMinWidth]);

  const arrivalStyle: CSSProperties = useMemo(() => {
    return {
      flex: arrivalFlex,
    };
  }, [arrivalFlex]);

  const arrCodeStyle: CSSProperties = useMemo(() => {
    return {
      display: arrCodeDisplay,
      minWidth: arrCodeMinWidth,
    };
  }, [arrCodeDisplay, arrCodeMinWidth]);

  const arrNameStyle: CSSProperties = useMemo(() => {
    return {
      display: arrNameDisplay,
      minWidth: arrNameMinWidth,
      alignSelf: arrNameAlignSelf,
      textAlign: arrNameTextAlign,
    };
  }, [arrNameDisplay, arrNameMinWidth, arrNameAlignSelf, arrNameTextAlign]);

  const flightClassStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: flightClassMinWidth,
    };
  }, [flightClassMinWidth]);

  const timeAgoStyle: CSSProperties = useMemo(() => {
    return {
      display: timeAgoDisplay,
      minWidth: timeAgoMinWidth,
    };
  }, [timeAgoDisplay, timeAgoMinWidth]);

  return (
    <div
      className={`self-stretch flex-1 rounded-md border-whitesmoke-200 border-[1px] border-solid flex flex-col items-start justify-start py-2 px-[9px] gap-2.5 text-left text-xs text-lightslategray font-inter ${className}`}
      style={bookingCardStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-5">
        <div className="flex flex-row items-center justify-start gap-1">
          <Image
            className="h-6 w-6 relative object-cover"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={airlineLogo}
          />
          <div
            className="relative leading-[16px] inline-block min-w-[104px]"
            style={singaporeAirlines2Style}
          >
            {singaporeAirlines}
          </div>
        </div>
        <div
          className="relative text-base leading-[24px] font-semibold text-gray-200 text-right inline-block min-w-[48px]"
          style={priceStyle}
        >
          {price}
        </div>
      </div>
      <div className="self-stretch rounded bg-whitesmoke-100 overflow-x-auto flex flex-row items-center justify-start p-2 gap-[7px] text-base text-cornflowerblue-200">
        <div
          className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-0.5"
          style={departureStyle}
        >
          <div className="relative font-semibold" style={depCodeStyle}>
            {depCode}
          </div>
          <div
            className="relative text-xs text-lightslategray inline-block min-w-[59px]"
            style={depNameStyle}
          >
            {depName}
          </div>
        </div>
        <Image
          className="h-3 w-[47.8px] relative shrink-0"
          width={48}
          height={12}
          alt=""
          src="/flight-icon.svg"
        />
        <div
          className="flex-1 flex flex-col items-end justify-start py-0 pl-[9px] pr-0 gap-0.5"
          style={arrivalStyle}
        >
          <div
            className="relative font-semibold inline-block min-w-[34px]"
            style={arrCodeStyle}
          >
            {arrCode}
          </div>
          <div
            className="self-stretch relative text-xs text-lightslategray text-right"
            style={arrNameStyle}
          >
            {arrName}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded flex flex-row items-center justify-start gap-5">
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[30px] gap-2">
          <Image
            className="h-4 w-4 relative overflow-hidden shrink-0"
            width={16}
            height={16}
            alt=""
            src="/class-icon.svg"
          />
          <div
            className="relative leading-[16px] inline-block min-w-[54px]"
            style={flightClassStyle}
          >
            {flightClass}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pl-0 pr-9 gap-2">
          <Image
            className="h-4 w-4 relative overflow-hidden shrink-0"
            width={16}
            height={16}
            alt=""
            src="/calender.svg"
          />
          <div className="relative leading-[16px]">{numPeople}</div>
        </div>
      </div>
      <div className="self-stretch border-whitesmoke-200 border-t-[1px] border-solid flex flex-row items-center justify-between pt-1.5 px-0 pb-0 gap-5">
        <div className="relative leading-[16px]">
          <span>{`Booked on `}</span>
          <span className="text-royalblue">{expedia}</span>
        </div>
        <div
          className="relative leading-[16px] font-semibold text-orange-100"
          style={timeAgoStyle}
        >
          {timeAgo}
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
