import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type ColType = {
  className?: string;
  parisImage: string;
  paris?: string;
  priceValues?: string;

  /** Style props */
  parisMinWidth?: CSSProperties["minWidth"];
  priceValuesDisplay?: CSSProperties["display"];
  priceValuesMinWidth?: CSSProperties["minWidth"];
};

const Col: NextPage<ColType> = ({
  className = "",
  parisImage,
  paris,
  parisMinWidth,
  priceValues,
  priceValuesDisplay,
  priceValuesMinWidth,
}) => {
  const parisStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: parisMinWidth,
    };
  }, [parisMinWidth]);

  const priceValuesStyle: CSSProperties = useMemo(() => {
    return {
      display: priceValuesDisplay,
      minWidth: priceValuesMinWidth,
    };
  }, [priceValuesDisplay, priceValuesMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-0 px-4 box-border min-w-[294px] max-w-[320px] text-left text-xl text-studio-darkmode-allwhite-ffffff font-typography-body-1 ${className}`}
    >
      <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-2 px-3 pb-[115px] relative [row-gap:20px] mq450:flex-wrap">
        <Image
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          width={288}
          height={182}
          alt=""
          src={parisImage}
        />
        <b
          className="flex-1 relative tracking-[0.02em] inline-block min-w-[37px] z-[1] mq450:text-base"
          style={parisStyle}
        >
          {paris}
        </b>
        <div className="flex flex-col items-end justify-start gap-0.5 text-right text-base">
          <div className="w-[53.5px] relative tracking-[0.04em] uppercase inline-block z-[1]">
            from
          </div>
          <div
            className="self-stretch relative text-19xl leading-[38px] font-baloo-bhai inline-block min-w-[91.9px] z-[1] mq750:text-11xl mq750:leading-[30px] mq450:text-4xl mq450:leading-[23px]"
            style={priceValuesStyle}
          >
            {priceValues}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col;
