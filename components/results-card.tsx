import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

export type ResultsCardType = {
  className?: string;
  resultsImage: string;
  kingBedStandard?: string;
  holidayInnExpre?: string;
  vector: string;
  video: string;

  /** Style props */
  kingBedStandardWidth?: CSSProperties["width"];
  kingBedStandardDisplay?: CSSProperties["display"];
};

const ResultsCard: NextPage<ResultsCardType> = ({
  className = "",
  resultsImage,
  kingBedStandard,
  kingBedStandardWidth,
  kingBedStandardDisplay,
  holidayInnExpre,
  vector,
  video,
}) => {
  const kingBedStandardStyle: CSSProperties = useMemo(() => {
    return {
      width: kingBedStandardWidth,
      display: kingBedStandardDisplay,
    };
  }, [kingBedStandardWidth, kingBedStandardDisplay]);

  return (
    <div
      className={`self-stretch rounded-3xs bg-cornflowerblue-400 flex flex-row items-end justify-start pt-0 pb-[0.6px] pl-0 pr-3 gap-4 text-left text-base text-darkslategray-300 font-typography-body-1 mq750:flex-wrap mq750:pl-3 mq750:pt-px mq750:box-border ${className}`}
    >
      <Image
        className="h-[220px] w-[260px] relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs object-cover mq750:flex-1"
        loading="lazy"
        width={260}
        height={220}
        alt=""
        src={resultsImage}
      />
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[14.4px] box-border min-w-[178px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[17px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[31px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
              <div
                className="relative tracking-[0.02em] text-gray-100"
                style={kingBedStandardStyle}
              >
                {kingBedStandard}
              </div>
              <h3 className="m-0 self-stretch relative text-3xl tracking-[0.04em] capitalize font-bold font-[inherit] mq450:text-lg">
                {holidayInnExpre}
              </h3>
              <div className="flex flex-row items-start justify-start gap-2">
                <Image
                  className="h-4 w-4 relative"
                  loading="lazy"
                  width={16}
                  height={16}
                  alt=""
                  src={vector}
                />
                <div className="relative tracking-[0.04em] font-medium">
                  4.7
                </div>
                <div className="relative tracking-[0.04em] text-cornflowerblue-200">
                  (1,136 reviews)
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[11.6px] text-3xl">
              <div className="flex flex-row items-start justify-start gap-px">
                <b className="relative tracking-[0.02em] capitalize mq450:text-lg">
                  $S 286
                </b>
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-sm">
                  <div className="relative tracking-[0.02em]">/night</div>
                </div>
              </div>
              <Button
                className="w-[164px] h-[46px]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#1262af",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#1262af" },
                  width: 164,
                  height: 46,
                }}
              >
                View Details
              </Button>
            </div>
          </div>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            width={24}
            height={24}
            alt=""
            src={video}
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
