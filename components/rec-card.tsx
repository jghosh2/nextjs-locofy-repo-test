import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type RecCardType = {
  className?: string;
  unsplash5MV818tzxeo: string;
  bali?: string;
  d3N?: string;
  holidayPrices?: string;

  /** Style props */
  holidayPricesDisplay?: CSSProperties["display"];
  holidayPricesMinWidth?: CSSProperties["minWidth"];
};

const RecCard: NextPage<RecCardType> = ({
  className = "",
  unsplash5MV818tzxeo,
  bali,
  d3N,
  holidayPrices,
  holidayPricesDisplay,
  holidayPricesMinWidth,
}) => {
  const holidayPricesStyle: CSSProperties = useMemo(() => {
    return {
      display: holidayPricesDisplay,
      minWidth: holidayPricesMinWidth,
    };
  }, [holidayPricesDisplay, holidayPricesMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start py-0 px-4 box-border min-w-[294px] max-w-[320px] text-left text-xl text-darkslategray-200 font-typography-body-1 ${className}`}
    >
      <Image
        className="self-stretch h-[242px] relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        width={288}
        height={242}
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="self-stretch rounded-t-none rounded-b-3xs bg-studio-darkmode-allwhite-ffffff border-whitesmoke-200 border-[1px] border-solid flex flex-col items-center justify-center py-[18px] px-[15px]">
        <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3px] min-w-[120px]">
            <div className="self-stretch relative tracking-[0.02em] font-medium mq450:text-base">
              {bali}
            </div>
            <div className="self-stretch relative text-base tracking-[0.02em] text-darkgray">
              {d3N}
            </div>
          </div>
          <div
            className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right mq750:text-7xl mq750:leading-[27px] mq450:text-lgi mq450:leading-[20px]"
            style={holidayPricesStyle}
          >
            {holidayPrices}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecCard;
