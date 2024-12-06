import type { NextPage } from "next";
import Image from "next/image";

export type FlightMainContainerType = {
  className?: string;
  sIN?: string;
  duration: string;
  lAX?: string;
  departOn?: string;
  sep2021?: string;
};

const FlightMainContainer: NextPage<FlightMainContainerType> = ({
  className = "",
  sIN,
  duration,
  lAX,
  departOn,
  sep2021,
}) => {
  return (
    <div
      className={`flex-1 rounded-lg border-whitesmoke-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[18px] px-[19px] gap-[21px] min-w-[411px] max-w-full text-left text-5xl text-cornflowerblue-300 font-typography-body-1 mq750:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
        <h3 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] inline-block min-w-[45.7px] mq450:text-lgi">
          {sIN}
        </h3>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <Image
            className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
            width={117}
            height={24}
            alt=""
            src={duration}
          />
        </div>
        <h3 className="m-0 relative text-inherit tracking-[0.04em] capitalize font-bold font-[inherit] text-right inline-block min-w-[52.3px] mq450:text-lgi">
          {lAX}
        </h3>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[187px] text-xl text-black mq750:pl-[93px] mq750:pr-[93px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative tracking-[0.04em] capitalize mq450:text-base">
          <b>{departOn}</b>
          <span>{sep2021}</span>
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer;
